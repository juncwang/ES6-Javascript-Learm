/**
 *  箭头函数
 *  解决的问题
 *  1. 缩减代码
 *  2. 改变this指向
 */

 // 普通定义方法
 const double1 = function(number){
    return number * 2;
 }

 // 箭头定义方法
 const double2 = (number) => {
  return number * 2;
 }

 // 单行箭头定义方法
 const double3 = (number) => number * 2;
 
 // 单行箭头定义方法
 const double4 = number => number * 2;

 const double5 = (number => number * 2);
 
 // 有两给形参的箭头定义方法
 const double6 = (number,number2) => number + number2;

 const double = (number,number2) => {
   sum = number + number2 
   return sum;
 }
//  console.log(double(20,20));

// map一个数组,让数组中的值以double形式展现
const numbers = [1,2,3];
var newNumbers = numbers.map(number => number * 2);

// console.log(newNumbers);


// 改变this指向

// 第一种方式传递 this 
const team1 = {
  members:["Henry","Elyse"],
  teamName:"es6",
  teamSummary:function(){
    // 在进入其他指向之前, 先把 this 执行保存为一给变量
    let self = this;
    return this.members.map(function(member){
      // this不知道该指向谁了
      return `${member}隶属于${self.teamName}小组`;
    })
  }
}

// 第二种方式传递 this 
const team2 = {
  members:["Henry","Elyse"],
  teamName:"es6",
  teamSummary:function(){
    return this.members.map(function(member){
      // this不知道该指向谁了
      return `${member}隶属于${this.teamName}小组`;
      // 在嵌套函数时, 把 this 绑定进去
    }.bind(this))
  }
}

// 第三种方式传递 this 
const team = {
  members:["Henry","Elyse"],
  teamName:"es6",
  teamSummary:function(){
    // 使用箭头符号改变 this 的指向
    // 感觉系统没把 箭头函数当作一给函数, 而只是当作一给执行序列, 不会改变 this 的指向问题
    return this.members.map((member) => {
      // this指向的就是team对象
      return `${member}隶属于${this.teamName}小组`;
    })
  }
}

console.log(team.teamSummary());










 



 



 
 