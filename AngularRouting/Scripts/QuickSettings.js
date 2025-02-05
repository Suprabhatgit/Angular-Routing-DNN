﻿var AngularRouting = AngularRouting || {};

AngularRouting.quickSettings = function(root, moduleId) {

    // Setup your settings service endpoint
    /*
    var service = {
        path: "AngularRouting",
        framework: $.ServicesFramework(moduleId)
    }
    service.baseUrl = service.framework.getServiceRoot(service.path) + "Settings/";
    */

    var SaveSettings = function () {
        alert("Save Settings");
        var deferred = $.Deferred();
        return deferred.promise();
    };

    var CancelSettings = function () {
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    };

    var LoadSettings = function () {

    };

    var init = function () {
        // Wire up the default save and cancel buttons
        $(root).dnnQuickSettings({
            moduleId: moduleId,
            onSave: SaveSettings,
            onCancel: CancelSettings
        });
        LoadSettings();
    }

    return {
        init: init
    }
};