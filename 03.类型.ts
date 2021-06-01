let a: unknown
a = 2
a = true
a = 'string'

let b: string
// if (typeof a === 'string') {
//   b = a
// }

// b = a as string //类型断言

b = <string>a
console.log(typeof b,b);

let c: 10

//使用 | 连接多个类型
let d: string | number
d = 'kobe'
d = 222

//字面量进行类型声明
let sex: 'male' | 'female'
sex = 'male'
sex = 'female'

// never 表示永远不会返回结果
function f(): never {
  throw new Error('报错了')
}
// f()

// void 用来表示空，以函数为例，就表示没有返回值的函数
function f1():void {

}
f1()
