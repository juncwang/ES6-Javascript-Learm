/**
 *  增强对象字面量
 *  解决的问题: 缩减代码
 *  
 */

// 创建一个对象
// new Object(); {}
// 创建一给数组
// new Array(); []

// 该方法返回一给实例对象
function createBookShop(inventory){
  return {
    // inventory: inventory
    // 增强对象字面量写法
    inventory,
    // inventoryValue: function(){
    // 增强对象字面量写法
    inventoryValue(){
      return this.inventory.reduce((total,book) => total + book.price,0);
    },
    // priceForTitle: function(title){
    // 增强对象字面量写法
    priceForTitle(title){
      return this.inventory.find(book => book.title === title).price;
    }
  }
}

const inventory = [
  {title:"Vue",price:10},
  {title:"Angular",price:15}
];

const bookShop = createBookShop(inventory);

// console.log(bookShop.inventoryValue());
// console.log(bookShop.priceForTitle("Angular"));


function saveFile(url,data){
  // jq 的 $.ajax() 方法
  // 增强对象字面量写法
  $.ajax({
    method:"POST",
    url,          // 原始方式 url:url,
    data,          // 原始方式 data:data
  });
}

const url = "http://fileupload.com";
const data = {color:"red"};

saveFile(url,data);









 



 



 
 