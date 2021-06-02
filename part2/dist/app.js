console.log('hello');
console.log('world');
console.log('world');
console.log('world');
console.log('w5');
System.register("b", [], function (exports_1, context_1) {
    "use strict";
    var a;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("a", a = '我是啊');
        }
    };
});
System.register("app", ["b"], function (exports_2, context_2) {
    "use strict";
    var b_1;
    var __moduleName = context_2 && context_2.id;
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
let z = 9;
console.log(z);
let aa = 4;
let a = 6;
//# sourceMappingURL=app.js.map