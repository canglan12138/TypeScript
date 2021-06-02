// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的
let obj: {name: string,age?: number}
obj = {
  name: '孙悟空',
  age: 20,
}
console.log(obj);

//[key: string]: any 任意类型的数据
let obj1: {name: string,[key: string]: any}
obj1 = {
  name: '孙悟空',
  age: 20,
}
console.log(obj);

/*
*   设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
* */
let fun: (a: number,b: number) => number
fun = function (a,b): number {
  return a + b
}
console.log(fun(6, 6));

/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组
let arr: string[]
arr = ['孙悟空','猪八戒','唐僧','沙和尚']
console.log(arr);

let arr2: Array<number>
arr2 = [1,2,3,4,5]
console.log(arr2);

/*
* enum 枚举
*
* */
enum Gender {
  male,
  female
}
let i: {name: string,gender:Gender}
i = {
  name: '孙悟空',
  gender: Gender.female
}
console.log(i.gender === Gender.female);

// 类型的别名
type My_type = string | number
let k: My_type
let j: My_type
k = 1
k = '孙悟空'
j = 1
console.log(k, j);
