# Sakuga Edit – Ideen & Roadmap

> Version 4.0 («Molob-Update») hat alle abgehakten Punkte eingebaut.

Ideensammlung für die nächsten Versionen. Neue Wünsche einfach unten ergänzen.

## Geplant (noch nicht gebaut)

### Flow-Edits (Inspiration: Molob, «Anime Flow Editing»)
- [x] **Flow-Preset:** weiche, durchgehende Kamerabewegung statt harter Shakes
- [x] **Bewegungs-Übergänge:** der Übergang führt die Bewegungsrichtung des Clips weiter
- [x] Starker Motion Blur und sanfte Velocity-Kurven als Standard im Flow-Preset

### Sound-Design
- [x] Sound-Effekte: **Whoosh** (Übergänge), **Impact/Boom** (Drop), **Riser** (Build-up)
- [x] Automatisch platzieren **oder** selbst auf die Timeline ziehen

### Look
- [x] Dunkle, dramatische Color-Grading-Looks (z. B. für Aizen-, Villain- und Dark-Edits)

### Aus Molobs Aizen-Edit (analysiert, gemacht in CapCut)
- [x] **Farbwechsel auf jedem Beat** (rot → pink → blau → gelb → lila)
- [x] **Neon-Duotone:** Line-Art und dunkle Clips einfärben (dunkel = Farbe, hell = weiss + Glow)
- [x] **Partikel-Overlays:** Bokeh, Glitzer, Funken/Glut, pulsieren auf dem Beat
- [x] **Blitz-Overlay** (lila/goldene Elektro-Blitze um den Charakter)
- [x] **Blur-Whip-Übergang** (starke Bewegungsunschärfe als Übergang)
- [x] **Split-Screen-Collage** (mehrere Panels schieben sich ins Bild)
- [x] **Epische Serifenschrift** (z. B. Cinzel) + Stil «Episch»: silbern, Schatten, leichter Glow, Buchstabe für Buchstabe
- [x] Looks: **Gold/Feuer**, **Villain-Lila**, **Blut-Rot**
- [x] Preset **«Villain Flow»**, das alles kombiniert
- [ ] Später (braucht KI): **Text hinter der Person** (Person freistellen)

### Aus 6 weiteren Molob-Edits (Toji, Gojo/Sukuna, Demon Slayer, Gohan, Bleach, Sanji)
**Text ist sein Markenzeichen:**
- [x] **Doppel-Text:** dasselbe Wort riesig als reine Kontur über den ganzen Screen + klein gefüllt in der Mitte (SIDE, POTENTIAL, YOUR, SH*T)
- [x] **Neon-Kontur-Text** mit Glow (z. B. blaues MOLOB)
- [x] **Wort hervorheben:** einzelnes Wort in Akzentfarbe («THE *STRONGEST* SORCERER»), Syntax mit *Sternchen*
- [x] **Verlauf-Füllung:** Gold, Silber, Lila
- [x] **3D-Text** (Extrude mit unscharfem Schatten)
- [x] **Gespiegelter Text**
- [x] Schriften: Serif wie Cinzel/Trajan, schmal-fett gestapelt («A SMOOTH / CRIMINAL», rot/weiss)
- [x] **Auto-Text:** Wörter automatisch auf Beats verteilen, im Doppel-Text-Stil
- [x] **Signatur/Wasserzeichen-Text** (eigener Name, wie «MOLOB»)
- [ ] Später (KI): Text **hinter** der Person

**Effekte & Looks:**
- [x] **Leuchtende Augen:** Form «Leuchtpunkt» (weicher Glow, Blend Addieren), auf das Auge setzen
- [x] **Lens-Flare / Anamorph-Streifen** (gelb/blau)
- [x] **Bokeh-Kreise** (gross, pink/lila) und **Elektro-Blitze** als Overlay
- [x] Looks: **Lila/Pink-Grade** (Toji), **Rot-Schwarz** (Sukuna), **Eisblau** (Gojo), **Gold**
- [x] **Invert-Blitz** auf einzelnen Frames, **Zoom-Blur** und **Richtungs-Blur** als Übergang
- [x] **Split-Screen-Collage** (Sanji-Edit)

### KI-Edit (Version 5, «Narrative + Sakuga»)
- [x] **Prompt-Feld unter der Vorschau:** Edit beschreiben («make a world cup edit»), App baut ihn
- [x] **Schnell-Modus** ohne Internet (Stichwörter) und **Claude-Modus** mit eigenem API-Schlüssel (sieht die Clips)
- [x] **Mehrspur-Timeline:** Text, Effekte, Look, Beats, Audio, Clips
- [x] Looks **Suspense Grade** (vor dem Drop) und **Saturation Pop** (nach dem Drop)

### Aus 12 weiteren Edits (Uchiha, Black Clover, Goku, Madara, Toji …)
- [x] **Text-Karte auf Schwarz** + Animation **«Wörter stapeln»** («YOURE NOT / EVEN IN THE / SAME LEAGUE»)
- [x] **~Wort~ = nur Kontur**, gemischt mit weiss und rot
- [x] Schrift **Metal** (Gothic/Grunge wie «ZANN»), Buchstabe für Buchstabe
- [x] Stil **Banner (Wasted)**: dunkles Band über die ganze Breite
- [x] Look **Nur Rot** (Color Isolation, Rest schwarz-weiss)
- [x] Form **Stern-Blitz** (4-Zacken-Glanz auf dem Drop)
- [x] Übergang **Tinte** (Tintenklecks deckt zu und gibt das nächste Bild frei)

### iPhone-Stabilität (Version 5.1)
- [x] **Einfacher Grafik-Modus (2D)** ohne WebGL: springt automatisch ein, wenn Safari WebGL blockiert; Vorschau und Export laufen weiter
- [x] Höchstens 4 Videos gleichzeitig im Speicher (iPhone), die nächsten Clips werden vorgeladen
- [x] Grafik-Modus selbst wählbar: Voll · Sicher · Einfach (2D)

### KI-Regie (Version 6): die KI weiss, wie gute Edits aufgebaut sind
- [x] **Aufbau wie bei Profi-Edits:** Hook (stärkster Shot zuerst) → Build-up (ruhige, längere Shots) → Rampe (Schnitte werden schneller) → Drop (bester Clip genau auf den Drop, schnelle Cuts) → Outro
- [x] **Die KI schaut sich jeden Clip an:** findet Action-Stellen, ruhige Stellen und schwarze Frames; Action kommt auf den Drop
- [x] **Übergänge nur am Phrasen-Anfang**, sonst harte Cuts mit Zoom-Punch; Blitze nur auf starken Beats; ab und zu ein Shot länger halten
- [x] **Texte kurz und selten** (1–2 s auf Hook oder Drop statt die ganze Zeit)
- [x] **Trend-Bibliothek:** Phonk, Brazil Phonk, Flow, Velocity, Head Bop, Aura, Villain Arc, Emotional, Manga, Lyric/Typo, Glitch, VS, Sport
- [x] **Eigene Trends speichern** (★): Edit gefällt → Namen geben → später nur den Namen eintippen
- [x] Neue Sounds: **Brazil Phonk** (Tamborzão, verzerrte Cowbell, 808) und neue **Phonk Drift**
- [x] **Export Bild für Bild** (WebCodecs): ruckelfrei 30/60 fps, volle Schärfe, Standard 1080p
- [x] **Volle Auflösung:** Clips werden nicht mehr auf 540 px verkleinert (das war die Pixel-Ursache)
- [x] **Virale Songs:** Anleitung in der App (TikTok-Video oder Song wählen → Beats + Drop automatisch), Hinweis nach dem KI-Edit, wenn nur der Platzhalter-Sound läuft
- [x] **Spannung vor dem Drop:** langsamer Push-In, am Drop kurzer Freeze-Hit (Standbild + Blitz) und Zoom-Punch
- [x] **Demon-Stil** (Referenz «Demon vs Devil»): auf fast jedem Schnitt kurze Effekte (Wisch, Negativ-Frame, Blitz), Violett-Grade, kleiner Titel im Build-up, Fade-out am Ende
- [x] Fix: alte Formen (z. B. goldener Stern) blieben bei jedem neuen KI-Edit im Projekt und waren in jedem Frame zu sehen
- [x] iPhone-Export: läuft ruckelfrei auch ohne Audio-Encoder (MP4 ohne Ton), Grund des Fallbacks wird angezeigt
- [ ] Trend «Honorable»: Miguel schickt Bildschirmaufnahmen, dann genau nachbauen

## Ideen sammeln
- [ ] Miguel sucht noch weitere Features (Tutorials als Bildschirmaufnahme schicken)

## Erledigt
- [x] Auto-Edit im Takt (Beats, Snares, BPM, Drop)
- [x] Ebenen, Keyframes, Easing, Formen, Overlays, Chroma-Key
- [x] Manueller Schnitt-Modus (Teilen, Kürzen, Umsortieren, Effekte pro Clip)
- [x] Song-Suche (Openverse, Creative Commons) und Offline-Sounds
- [x] Projekte speichern, Rückgängig/Wiederholen
- [x] iPhone-Web-App, Desktop (Tastenkürzel, Drag & Drop), Android-APK
