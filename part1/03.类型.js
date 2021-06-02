var a;
a = 2;
a = true;
a = 'string';
var b;
// if (typeof a === 'string') {
//   b = a
// }
// b = a as string //类型断言
b = a;
console.log(typeof b, b);
var c;
//使用 | 连接多个类型
var d;
d = 'kobe';
d = 222;
//字面量进行类型声明
var sex;
sex = 'male';
sex = 'female';
// never 表示永远不会返回结果
function f() {
    throw new Error('报错了');
}
// f()
// void 用来表示空，以函数为例，就表示没有返回值的函数
function f1() {
}
f1();
