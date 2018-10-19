/** 场景1 
 * 计算对象数组中每个电脑操作系统是否可用
 * 大于16位操作系统表示可用,否则不可用
*/

var computers = [
  {name:"Apple",ram:16},
  {name:"IBM",ram:4},
  {name:"Acer",ram:32}
];

var everyComputersCanRunProgram = true;
var someComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++){
  var computer = computers[i];
  if(computer.ram < 16){
    everyComputersCanRunProgram = false;
  }else{
    someComputersCanRunProgram = true;
  }
}

console.log(everyComputersCanRunProgram);
console.log(someComputersCanRunProgram);

/** 
 * Every: 一假即假
 * Some: 一真即真
 */

 var every = computers.every(function(computer){
   // 需要返回一个 bool 值, 如果每次遍历后都为真, 那么返回true, 如果有一次为假, 那么返回 false
   return computer.ram > 16;
 })

 console.log("==========");
 console.log(every);

 var some = computers.some(function(computer){
   // 需要返回一个 bool 值, 如果每次遍历后都为假, 那么返回 false, 如果有一次为真, 那么返回 true
  return computer.ram > 16;
 })

 console.log(some);
