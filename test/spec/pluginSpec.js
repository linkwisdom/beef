// 只有在入口文件才采用侵入方式
var require = require('../../src/require');

describe('jasmine-node', function () {
    require.config({
        name: 'source',
        baseUrl: './source'
    });

    it('test text plugin', function () {
        var text = require('text!source/text.txt');
        expect(text).toBe('i am beef');

        require(['source/amd'], function(amd) {
            expect(amd.mod).toBe('mod');
        });
    });

    it('test async plugin', function () {
        var text = require('text!source/text.txt');
        expect(text).toBe('i am beef');

        require(['source/amd', 'source/mod'], function(amd, mod) {
            expect(amd.name).toBe('amd');
            expect(mod.name).toBe('modules');
        });
    });
});

