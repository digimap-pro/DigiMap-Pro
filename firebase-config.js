// ============================================================
// DIGIMAP FIREBASE CONFIGURATION (Configured for RYK-DigiMap)
// ============================================================

window.DIGIMAP_CONFIG = {
  adminWhatsApp: "923006743311",
  appName: "DigiMap",

  firebase: {
    apiKey: "AIzaSyA4gSFCw2wkJx3LM0I1si1kbWV94ZJ8k3Q",
    authDomain: "ryk-digimap.firebaseapp.com",
    databaseURL: "https://ryk-digimap-default-rtdb.firebaseio.com",
    projectId: "ryk-digimap",
    storageBucket: "ryk-digimap.firebasestorage.app",
    messagingSenderId: "816244072301",
    appId: "1:816244072301:web:43e4a73c338c29b822c464",
    measurementId: "G-VMCFGXZLYF"
  }
};

window.isFirebaseConfigured = function () {
  const fb = window.DIGIMAP_CONFIG && window.DIGIMAP_CONFIG.firebase;
  return Boolean(
    fb &&
    fb.apiKey &&
    !fb.apiKey.includes("PASTE_") &&
    fb.databaseURL &&
    !fb.databaseURL.includes("PASTE_")
  );
};
