/** 
 *  async & await
 * 
 */

// async function myFunc(){
//   // return "Hello World!";

//   const promise = new Promise((resolve,reject) => {
//     setTimeout(() => resolve('Hello World!'),2000)
//   })

//   // 错误信息
//   const error = true;

//   if(!error){
//     // 等待resolve执行完毕之后,才会执行
//     const res = await promise;
       // 需要将定义的 promise 返回出去下面程序才会执行
//     return res;
//   }else{
       // 错误类的引入方式
//     await Promise.reject(new Error("error: 报错了!"));
//   }
// }

// // console.log(myFunc());

// myFunc()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// 请求数据
// 使用 async & await 实现异步网络请求
// 使用 async 定义需要异步的方法
async function getUsers(){
  // 使用 await 来实现程序等待, 意思就是该语句执行完成后, 才会继续往下面执行下去
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

// async 定义的方法会有 then 及 catch 方法
getUsers().then(users => console.log(users))