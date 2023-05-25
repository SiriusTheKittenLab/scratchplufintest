(function (ext) {
    // Block descriptor
    var descriptor = {
        blocks: [
            ['w', 'do %n times', 'doTimes'],
            ['w', 'then do %n times', 'thenDoTimes'],
        ],
    };

    // Function to execute the code blocks inside the "do times" block
    ext.doTimes = function (input, callback) {
        for (var i = 0; i < input; i++) {
            callback();
        }
    };

    // Function to execute the code blocks inside the "then do times" block
    ext.thenDoTimes = function (input, callback) {
        for (var i = 0; i < input; i++) {
            callback();
        }
    };

    // Extension initialization
    ext._shutdown = function () {};

    ext._getStatus = function () {
        return { status: 2, msg: 'Ready' };
    };

    // Register the extension
		ScratchExtensions.register('Quick Tools', descriptor, ext);
})(window.ScratchExtensions || (window.ScratchExtensions = {}));
