cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.moust.cordova.videoplayer.VideoPlayer",
    "file": "plugins/com.moust.cordova.videoplayer/www/videoplayer.js",
    "pluginId": "com.moust.cordova.videoplayer",
    "clobbers": [
      "VideoPlayer"
    ]
  },
  {
    "id": "cordova-plugin-appcenter-shared.AppCenter",
    "file": "plugins/cordova-plugin-appcenter-shared/www/AppCenter.js",
    "pluginId": "cordova-plugin-appcenter-shared",
    "clobbers": [
      "AppCenter"
    ]
  },
  {
    "id": "cordova-plugin-appcenter-analytics.Analytics",
    "file": "plugins/cordova-plugin-appcenter-analytics/www/Analytics.js",
    "pluginId": "cordova-plugin-appcenter-analytics",
    "clobbers": [
      "AppCenter.Analytics"
    ]
  },
  {
    "id": "cordova-plugin-appcenter-crashes.Crashes",
    "file": "plugins/cordova-plugin-appcenter-crashes/www/Crashes.js",
    "pluginId": "cordova-plugin-appcenter-crashes",
    "clobbers": [
      "AppCenter.Crashes"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-email-composer.EmailComposer",
    "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
    "pluginId": "cordova-plugin-email-composer",
    "clobbers": [
      "cordova.plugins.email",
      "plugin.email"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.moust.cordova.videoplayer": "1.0.1",
  "cordova-plugin-appcenter-shared": "0.1.6",
  "cordova-plugin-appcenter-analytics": "0.1.6",
  "cordova-plugin-appcenter-crashes": "0.1.6",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-email-composer": "0.8.15"
};
// BOTTOM OF METADATA
});