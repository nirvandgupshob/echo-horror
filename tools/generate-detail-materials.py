"""Original, periodic PBR surfaces for hospital and mining props. numpy + Pillow.
Albedo, normal XY / roughness B, height; reproducible without network access.
"""
from pathlib import Path
import json
import numpy as np
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]/'public/tex/details'
SIZE=512
NAMES=['terrazzo','linoleum','blue-tile','peeled-ivory','red-brick','coal','salt-vein','green-enamel','zinc','hazard','burlap','timber-sawn']

def noise(rng,cells):
    g=rng.random((cells,cells));p=np.arange(SIZE)*cells/SIZE;i=p.astype(int);t=p-i;t=t*t*(3-2*t)
    a=g[i[:,None],i[None,:]];b=g[(i[:,None]+1)%cells,i[None,:]];c=g[i[:,None],(i[None,:]+1)%cells];d=g[(i[:,None]+1)%cells,(i[None,:]+1)%cells]
    return (a*(1-t[:,None])+b*t[:,None])*(1-t[None,:])+(c*(1-t[:,None])+d*t[:,None])*t[None,:]

def mix(a,b,k):return np.asarray(a)*(1-k[...,None])+np.asarray(b)*k[...,None]
def edge(v,width):return np.clip((width-v)/max(.001,width*.3),0,1)
def generate(index,name):
    rng=np.random.default_rng(1101987+index*839);y,x=np.mgrid[0:SIZE,0:SIZE]/SIZE
    broad,mid,fine=noise(rng,4),noise(rng,24),noise(rng,128)
    h=np.full((SIZE,SIZE),.5);rough=np.full_like(h,.75)
    if name=='terrazzo':
        rgb=np.zeros((SIZE,SIZE,3))+[151,145,122];h+=fine*.025
        for k in range(160):
            cx,cy=rng.random(2);dx=(x-cx+.5)%1-.5;dy=(y-cy+.5)%1-.5;a=rng.random()*6.28
            u=dx*np.cos(a)+dy*np.sin(a);v=-dx*np.sin(a)+dy*np.cos(a)
            chip=(np.abs(u)/(rng.uniform(.006,.019))+np.abs(v)/rng.uniform(.004,.013))<1
            rgb[chip]=rng.choice([[70,76,72],[191,184,158],[110,88,70],[205,201,178]])
        seam=np.maximum(edge(x*4%1,.02),edge(y*4%1,.02));rgb=mix(rgb,[65,67,58],seam);h-=seam*.12;rough[:]=.61
    elif name=='linoleum':
        checker=((x*2).astype(int)+(y*2).astype(int))%2;rgb=mix([91,103,76],[124,127,90],checker*.5+.2)
        scratches=(np.sin((x*96+y*12)*np.pi)> .994)*(mid>.48);wear=np.clip((broad-.53)*2,0,.5)
        rgb=mix(rgb,[154,147,114],wear+scratches*.20);h+=fine*.02;rough=.58+wear*.5
    elif name=='blue-tile':
        seam=np.maximum(edge(x*4%1,.042),edge(y*4%1,.042));cell=rng.uniform(.83,1.08,(4,4))[(y*4).astype(int),(x*4).astype(int)]
        rgb=np.array([86,128,132])*cell[...,None];rgb=mix(rgb,[74,79,70],seam);h+=.14*(1-seam);rough=.29+.55*seam
        crack=edge(np.abs(np.sin((x*6+y*4+mid*.18)*np.pi)),.015)*(broad>.61);rgb=mix(rgb,[43,57,54],crack*.6);h-=crack*.03
    elif name=='peeled-ivory':
        peel=np.clip((broad*.65+mid*.35-.47)*12,0,1);rgb=mix([177,170,137],[91,102,94],peel)
        rims=np.clip(1-np.abs(peel-.5)*4,0,1);rgb=mix(rgb,[193,185,151],rims*.35);h+=peel*.08+fine*.035;rough=.68+peel*.22
    elif name=='red-brick':
        row=(y*6).astype(int);u=(x*3+(row%2)*.5)%1;v=y*6%1
        seam=np.maximum(edge(np.minimum(u,1-u),.035),edge(np.minimum(v,1-v),.075));cell=rng.uniform(.77,1.16,(6,3))[row,((x*3+(row%2)*.5)%3).astype(int)]
        rgb=np.array([127,72,47])*cell[...,None]*(.82+mid[...,None]*.36);rgb=mix(rgb,[118,113,93],seam)
        h+=.25*(1-seam)+fine*.07;rough[:]=.92
    elif name=='coal':
        # Uneven fractured plates, with periodic seeds and narrow dark joints.
        nearest=np.full_like(h,10.);second=nearest.copy()
        for j in range(6):
            for i in range(6):
                cx,cy=(np.array([i,j])+rng.uniform(.12,.88,2))/6
                dx=(x-cx+.5)%1-.5;dy=(y-cy+.5)%1-.5
                distance=np.sqrt((dx*.75)**2+(dy*1.3)**2)
                second=np.minimum(second,np.maximum(nearest,distance));nearest=np.minimum(nearest,distance)
        joint=np.clip(1-(second-nearest)/.012,0,1)
        layers=np.sin((y*18+np.sin(x*np.pi*4)*.18+broad*.3)*np.pi)
        rgb=mix([32,38,37],[62,68,63],broad*.4+mid*.6)
        rgb+=layers[...,None]*3;rgb=mix(rgb,[16,22,22],joint*.8)
        h+=mid*.08+layers*.025-joint*.13;rough=.5+fine*.25
    elif name=='salt-vein':
        veins=np.exp(-np.abs(np.sin((x*6+y*4+mid*.4)*np.pi))*15);rgb=mix([132,112,99],[203,202,181],veins)
        rgb=mix(rgb,[165,135,114],broad*.35);h+=veins*.12+mid*.13;rough=.58-veins*.16
    elif name=='green-enamel':
        chip=np.clip((broad*.5+mid*.5-.56)*15,0,1);rgb=mix([66,111,98],[95,61,37],chip)
        scratch=(np.sin(x*160*np.pi+y*8*np.pi)>.995)*(mid>.5);rgb=mix(rgb,[158,161,142],scratch*.4)
        h-=chip*.045;rough=.36+chip*.5
    elif name=='zinc':
        spangle=np.maximum(noise(rng,18),noise(rng,29));rgb=np.array([146,155,148])*(.7+spangle[...,None]*.45)
        h+=fine*.02;rough=.42+(mid-.5)*.18
    elif name=='hazard':
        stripes=((x+y)*4%1<.5).astype(float);rgb=mix([35,39,34],[185,147,54],stripes)
        chip=np.clip((mid-.58)*6,0,.8);rgb=mix(rgb,[89,79,62],chip);h-=chip*.04;rough=.68+chip*.2
    elif name=='burlap':
        warp=np.sin(x*64*np.pi);weft=np.sin(y*64*np.pi);threads=(warp*.5+.5)*(weft*.5+.5)
        rgb=np.array([133,111,76])*(.72+threads[...,None]*.40);h+=threads*.13+fine*.025;rough[:]=.97
    else:
        grain=np.sin((x*28+broad*.3+np.sin(y*6*np.pi)*.12)*np.pi);saw=np.sin(y*140*np.pi)*.015
        rgb=np.array([120,92,55])*(.8+grain[...,None]*.14+mid[...,None]*.26);h+=grain*.035+saw;rough[:]=.89
    rgb=np.clip(rgb*(.93+fine[...,None]*.13),0,255);h=np.clip(h,0,1)
    gy,gx=((np.roll(h,-1,axis=a)-np.roll(h,1,axis=a)) for a in (0,1))
    normal=np.dstack((-gx*5,-gy*5,np.ones_like(h)));normal/=np.linalg.norm(normal,axis=2)[...,None]
    packed=np.dstack((normal[:,:,:2]*.5+.5,np.clip(rough,.05,1)))
    Image.fromarray(rgb.astype('uint8')).save(ROOT/f'{name}_c.jpg',quality=92)
    Image.fromarray((packed*255).astype('uint8')).save(ROOT/f'{name}_n.jpg',quality=95)
    Image.fromarray((h*255).astype('uint8')).save(ROOT/f'{name}_h.jpg',quality=94)

if __name__=='__main__':
    ROOT.mkdir(parents=True,exist_ok=True)
    for i,name in enumerate(NAMES):generate(i,name)
    (ROOT/'manifest.json').write_text(json.dumps({'license':'CC0-1.0','generator':'tools/generate-detail-materials.py','resolution':SIZE,'materials':NAMES},indent=2)+'\n')
    print(f'{len(NAMES)} surfaces / {len(NAMES)*3} maps generated')
