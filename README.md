# ES6-Javascript-Learm

* 在 vscode 中安装插件 `Live Server`
    * 可以实时更新网页显示
* 在 vscode 中安装插件 `JavaScript (ES6) code snippets`
    * vscode 对 ES6 的支持, 并且有提示代码

### 学习目录

----------------------------------------------------------------

2. 数组方法 `forEach`
    * 遍历数组, 每次循环会取出数组的一个值, 无返回值

3. 数组方法 `map`
    * 遍历数组, 每次循环会取出数组的一个值, 返回一个新的数组

4. 数组方法 `filter`
    * 遍历数组, 每次循环会取出数组的一个值, 返回筛选条件为真的所有元素的新数组

5. 数组方法 `find`
    * 遍历数组, 每次循环会取出数组的一个值, 返回筛选条件为真的第一个元素

6. 数组方法 `every&some1`
    * `every` 遍历数组, 每次循环会取出数组的一个值, 如果筛选条件对每个元素都是真返回 true, 如果筛选条件下有一个为假返回 false
    * `some` 遍历数组, 每次循环会取出数组的一个值, 如果筛选条件下有一个为真返回 true, 筛选条件下都为假返回 false

7. 数组方法 `every&some2`
    * 案例

8. 数组方法 `reduce1`
    * 遍历数组, 每次循环会取出数组的一个值, 方法函数有两个形参, 第一个为 最终返回的值, 第二个为 数组每次遍历的值, 最终返回 第一个形参 

9. 数组方法 `reduce2`
    * 案例

* 总结: 使用数组遍历方法时, 如果传入的是一个已经定义好的方法, 那么只需要写入方法名-可以省略方法后的括号
* 例如: `function test(item)`, 调用时 `array.forEach(test)` 

----------------------------------------------------------------

10. `let` 与 `const`
    * 变量 `let` 主要是作用为加入了作用域区块这个概念, 离开作用域就会失效, 在块内也分内部与外部
    * 常量 `const` 无法被改变, 除非保存的是对象或数组, 因为常量保存的是他们的地址, 改变它们内部的值, 它们本身的地址不会发送改变

11. 模板字符串
    * 使用 `ESC 键下面这个键定义模板语法` 
    * 模板语法支持多行定义
    * 结束时, 为了安全加入 `;` 
    * 模板语法内可以加入 js 语法及变量, 例如 `<h1>${ js 语法内容 }</h1>`

12. 箭头函数
    * 定义方式 `const test = (参数) => { 执行代码 }`
    * 缩减代码
    * 改变this指向

13. 增项对象字面量
    * 解决的问题: 缩减代码
    * 如果对象参数与传入的参数名一致, 那么就可以直接省略赋值操作

14. 函数参数默认值
    * 优化代码
    * 举例 `function test(url, method = "GET")` 调用方法时, 如果没有给第二给参数, 那么第二个参数就会默认给到方法定义时预先给到的值

15. 数组-展开运算符
    * 更快,更便捷的操作数组
    * 方法定义使用时可接受无定长的数组
    * 传递参数时使用可将数组所有参数传递过去分别传入
    * 语法 `...Array`

16. 解析(对象)
    * 更快,更便捷
    * 例子 `const object = { test1: "t1", test2: "t2"}` 
    * 例子 `const { test1, test2 } = object`
    * 解构时 对象内的元素名称必须与接收的变量名称一致 

17. 解析(对象-Array)
    * 更快,更便捷
    * 例子 `const Array = ["Henry","Bucky","Emily"]` 
    * 例子 `const [name1,name2,name3] = Array`
    * 例子 `const {length} = Array` 
    * 例子 `const [name,...rest] = Array`  混合展开运算符进行解构 `name = "Henry", rest = ["Bucky","Emily"]`
    * 解构时 数组按前后顺序进行解构, 不需要名称一致

18. 面向对象(class)
    * 万事皆对象
    * 使用 `class` 关键字定义
    * 使用 `constructor` 函数定义构造函数, 使用 `this.变量名` 定义类的变量
    * 可在 `class` 内部使用 `函数名(){}` 定义函数
    * 使用 `static (变量名/函数名())` 关键自定义静态变量或函数, 定义静态变量时不需要将静态变量写在构造函数内
    * 使用 `extends` 关键字实现继承

19. generator生成器(斐波那契数列)
    * 可以返回多次的函数
    * 使用 `function* 生成器名(){}` 定义生成器
    * 使用 `yield` 定义返回值对象
    * 使用举例: `const gen = 生成器名()` 把生成器付给变量
    * 使用时 `console.log(gen.next())` 使用 `next()` 方法调用生成器当前返回对象
    * 返回对象是 `value: 返回的值 , done: 是否完成`
    * 例子说明

20. generator生成器原理(迭代器实现)
    * 迭代器还原生成器的结构
    * 多个 yield 返回原理

21. generator实战demo(相亲网)
    * 例子

22. 新的数据结构(map)
    * 键值对: 与对象不同的是键和值可以是任何类型
    * 定义 `map` 的形式 `const map1 = new Map()`
    * 定义 `对象` 的形式 `const obj1 = new Object()`
    * 使用 `set()` 设置或添加 `map` 的内容
        * 例如 `map1.set('test1','Value of key1')`
    * 使用 `get()` 获取 `map` 中的 key 对应的值
    * 使用 `size` 获取 `map` 值的数量
    * 使用 `for...of` 遍历 `map`
        * 例如 `for( let [key, value] of map1){console.log(`${key} = ${value}`)}`
    * 使用 `forEach` 遍历 `map`
        * 例如 `map1.forEach((value,key) => { console.log(`${key} = ${value}`) })`
    * 使用 `map` 转化为正常的数组
        * 例如 `const keyValueArray = Array.from(map1)`
    * 使用 `map` 中的key转化为数组
        * 例如 `const keyArray = Array.from(map1.keys())`
    * 使用 `map` 中的value值转换为数组
        * 例如 `const valueArray = Array.from(map1.values())`

23. 新的数据结构(set)
    * 集合: 可以存储任何数据类型,并且是唯一的(不重复的值)
    * 定义 `set` 的形式 `const set1 = new Set();`
    * 定义 `对象` 的形式 `const obj1 = new Object()`
    * 使用 `add()` 添加 `set` 的内容
        * 例如 `set1.add(100)`
    * 使用 `size` 获取 `set` 值的数量
    * 使用 `has()` 检查 `set` 中是否拥有对应的值
        * 例如 `console.log(set1.has(100))`
    * 使用 `delete` 删除 `set` 中的内容
        * 例如 `set1.delete(100)`
    * 使用 `forEach` 遍历
        * 例如 `set1.forEach((value) =>{ console.log(value) })`
    * 将 `set` 转换为 `array`
        * 例如 `const setArray = Array.from(set1)`

24. Promise(三种状态)
    * 构造函数
    * 定义使用它的形式
    ```js
    let promise = new Promise((resolve,reject) => {
        // resolve();           // 成功状态, 使用后 then 方法可以被调用, 且可被调用多次
        // resolve(data)
        // reject();            // 失败状态, 使用后 catch 方法可以被调用, 且可被调用多次
        // reject(err)
        // 根据条件判断调用哪一个方法
        // 如果使用 return 就可以在 then 方法的回调函数中传入一个 return 的方法
        // return data
    });

    promise
        .then(() => console.log("成功,可以无限调用then方法!"))
        // .then(data => console.log(data))
        .catch(() => console.log("uh oh,出现了重大问题!"))
    ```

25. fetch(新的http请求方法)
    * 一个基于promise的请求方法,更简单,更便捷
    * 他也拥有 then() 方法及 catch() 方法
    * 使用例子
    ```js
    // 传入一个地址(本地或或网络)
    fetch(url)
        // response => response.json() 让返回的信息进行 json 解析
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log("error:" + err));
    ```
    * 该方法 `then` 及 `catch` 方法的使用方法
        * 需要传入一个带一个形参的回调函数接受返回的数据
        * 返回的数据如果是 json 数据,首先需要 json() 方法把文字流进行转换一次
        * 返回的数据如果是 文本 数据,首先需要 text() 方法把文字流进行转换一次
        * 然后才可以进行使用

26. fetch(请求三种数据格式)
    * 例子: 请求本地文本数据
    * 例子: 请求本地 json 数据
    * 例子: 请求网络接口

### 27. 封装fetch库(增删改查) 
* 利用 `fetch` 与 `Promise` 实现更快,更简单的请求数据
* 实现功能有: 直接获取数据及通过上传参数获取数据

28. async和await(es7)
    * 定义方法时加入 `async` 就等同于使用 `Promise` 类型
    * 就可以直接使用 `then() 或 catch()` 方法
    * 详见例子

### 29. async封装fetch(2.0版本)
    * 利用 `async 及 await fetch` 封装一个 27 课的库 
    * 实现功能有: 直接获取数据及通过上传参数获取数据

30. ES6-promise的应用-回调异步asyncawait
    * 讲解ES5 及 ES6 回调函数
    * 异步之间的操作


### 经常会使用到的测试网络 
* `http://jsonplaceholder.typicode.com/`
* `https://api.github.com/users`