"""Pack ambientCG CC0 1K materials into the game's existing RGB/XYR layout."""
from pathlib import Path
from zipfile import ZipFile
from io import BytesIO
from PIL import Image
import numpy as np,json,subprocess
root=Path(__file__).resolve().parents[1];out=root/'public/tex/geology';out.mkdir(parents=True,exist_ok=True)
sources={'cliff':'Rock030','darkrock':'Rock035','mud':'Ground054','earth':'Ground048'}
for name,asset in sources.items():
 cache=root/'lab/cave-expansion'/f'{asset}.zip';cache.parent.mkdir(parents=True,exist_ok=True)
 if not cache.exists():subprocess.run(['curl','--fail','-L','--retry','2','--max-time','120','-o',str(cache),f'https://ambientcg.com/get?file={asset}_1K-JPG.zip'],check=True)
 with ZipFile(cache) as z:
  def load(suffix):return Image.open(BytesIO(z.read(next(p for p in z.namelist() if p.endswith(suffix+'.jpg'))))).convert('RGB').resize((1024,1024),Image.Resampling.LANCZOS)
  c=np.asarray(load('_Color'),dtype=float);ao=np.asarray(load('_AmbientOcclusion'),dtype=float)[:,:,0]/255
  Image.fromarray(np.uint8(np.clip(c*(.65+.35*ao[:,:,None]),0,255))).save(out/f'{name}_c.jpg',quality=90)
  n=np.asarray(load('_NormalGL')).copy();n[:,:,2]=np.asarray(load('_Roughness'))[:,:,0];Image.fromarray(n).save(out/f'{name}_n.jpg',quality=94)
  load('_Displacement').convert('L').save(out/f'{name}_h.jpg',quality=92)
 print(name,asset,flush=True)
(out/'manifest.json').write_text(json.dumps({'license':'CC0-1.0','resolution':1024,'sources':{k:f'https://ambientcg.com/view?id={v}' for k,v in sources.items()}},indent=2)+'\n')
