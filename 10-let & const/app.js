/**
 *  var let const
 */

//  var a = "Test1";
//  let b = "Test2";

function testVar(){
  var a = 30;
  if(true){
    var a = 50;
    console.log(a); // 50
  }

  console.log(a);  // 50
}

// var 没有作用域
// testVar();

function testLet(){
  let a = 30;
  if(true){
    let a = 50;
    console.log(a);  // 50
  }
  console.log(a);   // 30
}

// let 有作用域区块的概念
// testLet();

{
  let b = 100;
}

// let 离开作用域后就会被消除
// console.log(b);

// for(var i = 0; i < 10; i++){
  // console.log(i);
// }

// var 在外面可以被调用, 所以打印出来为 10
// console.log(i);

for(let i = 0; i < 10; i++){
  console.log(i);
}

// let 在作用域外就会消除, 所以无法打印
// console.log(i);

// const
// const x = 10;
// x = 100;
// const 为常量不可以被改变

const colors = [];
// colors = "Green"; 报错
// const 定义一个数组, 保存指向这给数组的地址值

colors.push("red");
colors.push("blue");
// const 数组的值可以被改变, 因为改变里面的值, 并没有改变数组本身的地址值

console.log(colors);

const str = "Hello";
str = "World";
// const 报错, 因为保存的是值, 不是地址








 



 



 
 