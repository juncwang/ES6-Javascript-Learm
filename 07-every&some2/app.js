/** 场景2
 * 假定有一个注册页面,判断所有input内容的长度是否大于0 
 * 
 */
 console.log("================");

 function Field(value){
   this.value = value;
 }

 Field.prototype.validate = function(){
   return this.value.length > 0;
 }

 var username = new Field("henrywu");
 var telephone = new Field("18888888888");
 var password = new Field("my_password");

//  console.log(username.validate());
//  console.log(telephone.validate());
//  console.log(password.validate());

 var fields = [username,telephone,password];

 var formIsValid = fields.every(function(field){
  return field.validate();
 })

 console.log(formIsValid);

 if(formIsValid){
  // 注册成功
 }else{
   // 给用户一个友善的错误提醒
 }

