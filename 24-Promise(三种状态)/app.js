/** 
 * 构造函数: Promise
 * 一个非常牛逼闪电的东西!
 */

 let promise = new Promise((resolve,reject) => {
    // 设置系统等待 3 秒后执行回调函数
    setTimeout(()=>{
        resolve();
    },3000)
    // resolve();
    // reject();
 });
//  console.log(promise);

// promise.then(() => console.log("成功,没有任何问题!"))

promise
  .then(() => console.log("成功,没有任何问题!"))
  .then(() => console.log("成功,可以无限调用then方法!"))
  .catch(() => console.log("uh oh,出现了重大问题!"))

 
