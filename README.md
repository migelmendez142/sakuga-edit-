# Sakuga Edit 作画

Anime-, Gaming- und Hype-Edits automatisch im Takt. Du wählst Clips und einen Song, die App findet Beats, Snares, BPM und den Drop und schneidet alles passend. Shakes, Flashes, Velocity, 3D-Swing, Speedlines und Übergänge kommen automatisch dazu.

Kein Wasserzeichen, kein Abo, und alles läuft auf dem Gerät. Deine Clips verlassen dein Handy nie.

---

## Was in diesem Ordner ist

| Ordner / Datei | Wofür |
| --- | --- |
| `www/` | Die eigentliche App (HTML, Schriften, Icons, Offline-Cache). Funktioniert als Web-App und als Inhalt der nativen Apps. |
| `www/index.html` | Der ganze Editor: Oberfläche, Video-Engine (WebGL-Shader), Beat-Erkennung, Export |
| `resources/` | App-Icon und Startbildschirm. Daraus werden alle Grössen für iPhone und Android erzeugt. |
| `capacitor.config.json` | Einstellungen der nativen App (Name, App-ID `ch.sakuga.edit`, Farben) |
| `scripts/patch-native.mjs` | Trägt die iPhone-Berechtigungen (Fotos, Kamera) und Android-Einstellungen ein |
| `.github/workflows/` | Automatische Builds: Android-APK, Web-App online stellen, iOS-Check |

---

## Weg 1: Web-App aufs iPhone (gratis, ohne Mac)

Danach hast du ein App-Icon auf dem Home-Bildschirm, die App läuft im Vollbild und auch offline.

1. Erstelle einen kostenlosen Account auf **github.com**.
2. Klicke oben rechts auf **＋ → New repository**. Name z. B. `sakuga-edit`, Sichtbarkeit **Public**, dann **Create repository**.
3. Klicke auf **uploading an existing file** und ziehe **den gesamten Inhalt** dieses Ordners hinein, auch den Ordner `.github`. Dann **Commit changes**.
   - Tipp: Am PC mit Chrome geht das per Drag & Drop. Der Ordner `.github` ist unter Windows manchmal versteckt: Im Explorer unter *Ansicht → Ausgeblendete Elemente* einblenden.
4. Im Repository: **Settings → Pages → Source: «GitHub Actions»** auswählen.
5. Warte 1–2 Minuten (unter **Actions** siehst du den Fortschritt). Deine App ist dann online unter
   `https://DEIN-NAME.github.io/sakuga-edit/`
6. Öffne diese Adresse auf dem iPhone in **Safari** → **Teilen-Symbol** → **Zum Home-Bildschirm**.

Fertige Videos speicherst du über **Teilen / In Fotos sichern** → **Video sichern**, oder du schickst sie direkt an TikTok oder Instagram.

**Ohne GitHub:** Auf **app.netlify.com/drop** den Ordner `www` hineinziehen. Du bekommst sofort einen Link. Danach weiter mit Schritt 6.

---

## Weg 2: Android-App (APK)

Wenn du Weg 1 gemacht hast, baut GitHub die APK bei jedem Upload automatisch.

1. Im Repository auf **Actions → «Android-APK bauen»** schauen, bis ein grüner Haken erscheint (ca. 5 Minuten).
2. Dann rechts unter **Releases → «Sakuga Edit – neueste Android-Version»** die Datei `sakuga-edit.apk` herunterladen. Das geht direkt auf dem Android-Handy.
3. Datei öffnen und «Installation aus unbekannten Quellen» erlauben.

Für den **Google Play Store** brauchst du ein Entwicklerkonto (einmalig 25 $) und eine signierte Release-Version. Das richten wir ein, wenn die App so weit ist.

---

## Weg 3: Echte iPhone-App (braucht einen Mac)

Apple erlaubt das Bauen von iPhone-Apps nur mit **Xcode auf einem Mac**.

1. Auf dem Mac installieren: **Xcode** (App Store) und **Node.js** (nodejs.org).
2. Im Terminal in diesem Ordner:
   ```
   npm install
   npm run setup:ios
   npm run open:ios
   ```
3. In Xcode links auf **App** klicken → **Signing & Capabilities** → deine Apple-ID als **Team** wählen.
4. iPhone per Kabel anschliessen, oben auswählen, ▶ drücken.

- Mit einer **kostenlosen Apple-ID** läuft die App 7 Tage auf deinem eigenen iPhone, danach neu aufspielen.
- Mit dem **Apple Developer Program** (99 $/Jahr) kannst du sie über TestFlight an Freunde verteilen und in den **App Store** bringen.
- Ohne eigenen Mac: Unter **Actions → «iOS-Version prüfen»** kompiliert GitHub die iPhone-Version testweise auf einem Mac in der Cloud.

---

## Änderungen machen

1. `www/index.html` bearbeiten (oder Claude bitten, es zu tun).
2. In `www/sw.js` die Zeile `const VERSION = 'sakuga-v1'` hochzählen (`sakuga-v2` …), damit Handys die neue Version laden.
3. Die Datei wieder auf GitHub hochladen. Web-App und APK werden automatisch neu gebaut.

Lokal testen am PC: `npm run serve` und dann `http://localhost:8080` im Browser öffnen.

---

## Funktionen

- **Musik:** Kick/Snare-Trennung, BPM-Erkennung, Drop-Erkennung, Beat-Raster, Beat tippen
- **Auf dem Beat:** Shake, Zoom-Punch, Flash, RGB-Split, Speedlines, 3D-Swing, Zoom-Blur, Pixel-Glitch, Invert
- **Bewegung:** Motion Blur, Echo, Tempo-Kurven (Velocity, Hero, Bullet, Montage), 12/8-fps-Anime-Look
- **Übergänge:** Swipe, Whip, Zoom-Through, Spin, 3D-Flip, Flash, Glitch, Pixel, Mix
- **Look:** 6 Farblooks, Glow, Anime-Linien, Cel-Shading, Halftone, Lichtstrahlen, Wave, Spiegel/Kaleido, Vignette, Körnung, Kino-Balken
- **Ebenen (Pro-Modus):** Text, Formen (Rechteck, Kreis, Stern, Dreieck, Herz, Ring, Linie), Overlay-Videos/-Bilder, Farbflächen
- **Keyframes:** Position, Grösse, Drehung, Deckkraft · Easing (Linear, Ease, In, Out, Overshoot, Bounce, Hold) · Gesten direkt im Bild
- **Animationen mit einem Tap:** Pop-In, Slide-Up, Zoom-In, Spin-In, Fade-In/-Out, Pop-Out, Slide-Down, Zoom-Out
- **Effekte pro Ebene:** Glow, Blur, RGB-Split, Pixel, Wave, Chroma-Key (Greenscreen), Farbton, Helligkeit, Shake/Pulse auf Beat · Blend-Modi Normal/Addieren/Screen/Multiplizieren
- **Text:** 8 Animationen (u. a. Wort für Wort im Takt), 4 Stile, 5 Schriften, freie Farben
- **Musik-Bibliothek:** 6 Sakuga-Sounds ohne Copyright (Phonk, Trap, EDM, Anime Rush, Lo-Fi, Drill)
- **Projekte:** automatisch gespeichert (auf dem Gerät), Rückgängig/Wiederholen
- **Presets:** 8 eingebaute Styles, eigene Presets speichern
- **Export:** MP4 (oder WebM), 720p/1080p, 30/60 fps, ohne Wasserzeichen

## Ideen für die nächsten Versionen

- Auto-Untertitel aus Sprache (Spracherkennung auf dem Gerät)
- Schnellerer Export als Echtzeit (nativer Video-Encoder)
- Projekte speichern und später weiterbearbeiten
- Hintergrund entfernen (KI-Cutout) und Auto-Framing für 16:9-Clips

## Lizenzen

Schriften: SIL Open Font License (`www/fonts/OFL-fonts.txt`), Permanent Marker: Apache 2.0. Capacitor: MIT.
