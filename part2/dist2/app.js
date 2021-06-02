System.register(["./b"], function (exports_1, context_1) {
    "use strict";
    var b_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (b_1_1) {
                b_1 = b_1_1;
            }
        ],
        execute: function () {
            console.log('app');
            console.log(b_1.a);
        }
    };
});
//# sourceMappingURL=app.js.map