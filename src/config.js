var path = require('path');
var root = process.cwd();
var packages = {};


module.exports = {
    config: function(option) {
        if (option.baseUrl) {
            root = path.resolve(root, option.baseUrl)
        }

        if (option.packages) {
            packages = option.packages;

            for (var item in packages) {
                packages[item] = path.resolve(root, packages[item]);
            }
        }
    },
    resolve: function(relativeId, module) {
        if (relativeId.charAt(0) !== '.') {
            if (relativeId in packages) {
                return packages[relativeId];
            }
            for (var item in packages) {
                if (relativeId.indexOf(item) == 0) {
                    return relativeId.replace(item, packages[item]);
                }
            }
        } else {
            return path.resolve(root, relativeId);
        }

        return relativeId;
    }
};