cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.moust.cordova.videoplayer/www/videoplayer.js",
        "id": "com.moust.cordova.videoplayer.VideoPlayer",
        "pluginId": "com.moust.cordova.videoplayer",
        "clobbers": [
            "VideoPlayer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-appcenter-shared/www/AppCenter.js",
        "id": "cordova-plugin-appcenter-shared.AppCenter",
        "pluginId": "cordova-plugin-appcenter-shared",
        "clobbers": [
            "AppCenter"
        ]
    },
    {
        "file": "plugins/cordova-plugin-appcenter-analytics/www/Analytics.js",
        "id": "cordova-plugin-appcenter-analytics.Analytics",
        "pluginId": "cordova-plugin-appcenter-analytics",
        "clobbers": [
            "AppCenter.Analytics"
        ]
    },
    {
        "file": "plugins/cordova-plugin-appcenter-crashes/www/Crashes.js",
        "id": "cordova-plugin-appcenter-crashes.Crashes",
        "pluginId": "cordova-plugin-appcenter-crashes",
        "clobbers": [
            "AppCenter.Crashes"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
        "id": "cordova-plugin-email-composer.EmailComposer",
        "pluginId": "cordova-plugin-email-composer",
        "clobbers": [
            "cordova.plugins.email",
            "plugin.email"
        ]
    },
    {
        "file": "plugins/cordova-plugin-email-composer/src/browser/EmailComposerProxy.js",
        "id": "cordova-plugin-email-composer.EmailComposerProxy",
        "pluginId": "cordova-plugin-email-composer",
        "runs": true
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
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
    "cordova-plugin-email-composer": "0.8.15",
    "cordova-sqlite-storage": "2.3.2",
    "cordova-plugin-network-information": "2.0.1"
}
// BOTTOM OF METADATA
});