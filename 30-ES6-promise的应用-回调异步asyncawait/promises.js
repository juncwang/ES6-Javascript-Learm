/**
 * 动态往DOM中添加内容
 * 回调
 */

const posts = [
  {title:"Post one",body:"this is post one"},
  {title:"Post two",body:"this is post two"}
];

function getPosts(){
  setTimeout(() => {
    let output = '';
    posts.forEach((post,index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  },1000)
}



function createPost(post){
  // 实例化promise对象
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if(!error){
        resolve();
      }else {
        reject("Error: something went wrong!");
      }
    },2000)
  })
}

// createPost({title:"Post Three",body:"this is post three"})
//     .then(getPosts)
//     .catch(err => console.log(err))

// asycn / await
// async function init(){
//   await createPost({title:"Post Three",body:"this is post three"})

//   getPosts()
// }

// init();

async function fetchUsers(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

fetchUsers()



// Promise.all
// const promise1 = Promise.resolve("Hello world");
// const promise2 = Promise.resolve(20);
// const promise3 = new Promise((resolve,reject) => {
//   setTimeout(resolve,2000,"goodbye")
// })

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(values => {
//   console.log(values)
// })



