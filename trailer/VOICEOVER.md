# ECHO — showcase: озвучка

Голос: низкий, спокойный, почти шёпот у микрофона. Без «трейлерного» пафоса, без
восходящей интонации в конце фраз. Темп медленный, паузы на многоточиях реальные (0.3–0.5 с).
Строки 11 и 12 — одна фраза, разорванная скримером: 12 звучит после чёрного кадра, тише и ровнее.

Для TTS (ElevenLabs и подобные): stability ~0.55–0.65, similarity ~0.75, style 0–0.15,
скорость 0.9. Генерируйте каждую строку отдельным файлом, так проще попасть в таймкоды.
«Echo» читается как обычное английское слово, «Kamerton» в тексте не звучит.

## Строки и таймкоды

Таймкод — момент, когда строка должна начаться в видео.

| № | Старт | Текст |
|---|---|---|
| 01 | 0:00.30 | You were born blind. |
| 02 | 0:01.60 | Two days ago, they gave you an implant called Echo. |
| 03 | 0:05.60 | Every sound draws the world around you. |
| 04 | 0:08.70 | The louder the sound, the more you see. |
| 05 | 0:11.90 | Then the station went silent. |
| 06 | 0:14.25 | Not all of it. |
| 07 | 0:24.00 | Something down here hunts by sound. |
| 08 | 0:26.90 | Hold still, and listen. Its steps glow red. |
| 09 | 0:29.90 | When it comes close, cover your mouth. |
| 10 | 0:32.80 | Don't breathe. |
| 11 | 0:33.95 | And the moment you see it... |
| 12 | 0:37.90 | ...it hears you. |
| 13 | 0:39.90 | Wake the generator. Call the lift. |
| 14 | 0:44.80 | Then hold the shutters until it comes. |
| 15 | 0:47.80 | Three ways in. One motor. It will try every one. |
| 16 | 0:51.60 | And when the lift finally moves... |
| 17 | 0:54.20 | ...it only goes down. |
| 18 | 0:59.20 | Level minus eleven. |
| 19 | 1:01.40 | Caves that swallowed a hospital. |
| 20 | 1:09.60 | Nine miners still hang above the pit. |
| 21 | 1:15.20 | And something new crawls on the walls, calling the hunter to you. |
| 22 | 1:20.30 | Keep your torch on it. |
| 23 | 1:29.20 | Echo. A first-person horror game you play with your ears. |
| 24 | 1:34.30 | Free, in your browser. Put your headphones on. |

## Как вставить в видео

Сохраните строки как `vo/01.wav` … `vo/24.wav` (подойдут и `.mp3`; номер в начале имени —
номер строки из таблицы, тишину в начале файла микс срежет сам) и запустите из `trailer/edit`:

```bash
SRC=../build/frames python3 mix.py          # пересоберёт mix_no_vo.wav и mix_full.wav
ffmpeg -i echo_showcase_no_vo.mp4 -i mix_full.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 320k echo_showcase.mp4
```

Музыка и звуки игры в `mix_no_vo.wav` уже приглушены (дакинг) в окнах под эти строки,
так что голос встанет без дополнительной обработки. Если какая-то строка у вас вышла
длиннее окна, сдвиньте её старт в `edit/timeline.py` (список `VO`) и перезапустите `mix.py`.

## Текст целиком (для вставки в TTS)

```
You were born blind.
Two days ago, they gave you an implant called Echo.
Every sound draws the world around you.
The louder the sound, the more you see.
Then the station went silent.
Not all of it.
Something down here hunts by sound.
Hold still, and listen. Its steps glow red.
When it comes close, cover your mouth.
Don't breathe.
And the moment you see it...
...it hears you.
Wake the generator. Call the lift.
Then hold the shutters until it comes.
Three ways in. One motor. It will try every one.
And when the lift finally moves...
...it only goes down.
Level minus eleven.
Caves that swallowed a hospital.
Nine miners still hang above the pit.
And something new crawls on the walls, calling the hunter to you.
Keep your torch on it.
Echo. A first-person horror game you play with your ears.
Free, in your browser. Put your headphones on.
```
