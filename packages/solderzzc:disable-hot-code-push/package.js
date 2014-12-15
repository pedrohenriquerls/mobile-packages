Package.describe({
  name: "solderzzc:disable-hot-code-push",
  summary: "On Cordova, disable hot code push.",
  version: '1.0.4',
  git: "https://github.com/meteor/mobile-packages"
});

Package.on_use(function (api) {
  api.versionsFrom("0.9.2");
  api.use(['reactive-var', 'reload'], 'web');

  // Imply so that we can access the Reload export from an app
  api.imply(['reload'], 'web');

  api.add_files("disable-hot-code-push.js", 'web.cordova');
  api.add_files("browser.js", 'web.browser');
});
