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
    "id": "cordova-plugin-email-composer.EmailComposer",
    "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
    "pluginId": "cordova-plugin-email-composer",
    "clobbers": [
      "cordova.plugins.email",
      "plugin.email"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-ionic.common",
    "file": "plugins/cordova-plugin-ionic/www/common.js",
    "pluginId": "cordova-plugin-ionic",
    "clobbers": [
      "IonicCordova"
    ],
    "runs": true
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
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
  "cordova-plugin-email-composer": "0.8.15",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-ionic": "4.1.7",
  "cordova-sqlite-storage": "2.3.2"
};
// BOTTOM OF METADATA
});