// 只有在入口文件才采用侵入方式
var require = require('../../src/require');

describe('jasmine-node', function () {
    // 配置第一次
    require.config({
        name: 'source',
        baseUrl: './source',
        packages: {
            'resource': './resource'
        }
    });

    // 配置第二次
    require.config({
        name: 'admin',
        baseUrl: './admin',
        packages: {
            'public': './public'
        }
    });

    it('test module require', function () {
        var admin = require('admin');
        var pow = require('admin/pow');
        expect(admin.add(1, 1)).toBe(2);
        expect(pow(2, 3)).toBe(8);
    });

    it('test packages module', function () {
        var list = require('public/list');
        expect(list.admin.name).toBe('administrator');
        expect(list.mod.name).toBe('modules');
        expect(list.local.name).toBe('local');
    });
});

