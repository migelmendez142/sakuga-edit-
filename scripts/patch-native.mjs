// Ergänzt nach "npx cap add ..." die nativen Einstellungen, die Sakuga Edit braucht.
// Kann beliebig oft laufen (fügt nichts doppelt ein).
import fs from 'node:fs';

const plist = 'ios/App/App/Info.plist';
if (fs.existsSync(plist)) {
  let s = fs.readFileSync(plist, 'utf8');
  const keys = {
    NSPhotoLibraryAddUsageDescription: 'Sakuga Edit speichert deine fertigen Edits in der Fotos-App.',
    NSPhotoLibraryUsageDescription: 'Sakuga Edit braucht Zugriff auf deine Videos und Bilder, um daraus Edits zu machen.',
    NSCameraUsageDescription: 'Damit kannst du Clips direkt mit der Kamera aufnehmen.',
    NSMicrophoneUsageDescription: 'Für den Ton von Clips, die du direkt aufnimmst.'
  };
  for (const [k, v] of Object.entries(keys)) {
    if (!s.includes(`<key>${k}</key>`)) s = s.replace(/<dict>/, `<dict>\n\t<key>${k}</key>\n\t<string>${v}</string>`);
  }
  if (!s.includes('<key>UIRequiresFullScreen</key>')) s = s.replace(/<dict>/, `<dict>\n\t<key>UIRequiresFullScreen</key>\n\t<true/>`);
  // nur Hochformat auf dem iPhone
  s = s.replace(/<key>UISupportedInterfaceOrientations<\/key>\s*<array>[\s\S]*?<\/array>/, '<key>UISupportedInterfaceOrientations</key>\n\t<array>\n\t\t<string>UIInterfaceOrientationPortrait</string>\n\t</array>');
  fs.writeFileSync(plist, s);
  console.log('iOS Info.plist angepasst');
}

const manifest = 'android/app/src/main/AndroidManifest.xml';
if (fs.existsSync(manifest)) {
  let s = fs.readFileSync(manifest, 'utf8');
  if (!s.includes('android:screenOrientation')) s = s.replace('<activity', '<activity\n            android:screenOrientation="portrait"');
  if (!s.includes('android:hardwareAccelerated')) s = s.replace('<application', '<application\n        android:hardwareAccelerated="true"');
  fs.writeFileSync(manifest, s);
  console.log('AndroidManifest angepasst');
}
