// Array of objects
// Each Object is a post
const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

// Function that has a 1 second delay before showing posts
// setTimeout() is an arrow function that allows us to create a delay in function displaying
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

/*Function that has a 2 second delay before pushing on a third post object
Using a promise which is a placeholder for a future value allows us to perform async tasks
without using callbacks. Allows for .then and .catch.
*/
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){ 
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
} 

// createPost({ title: 'Post Three', body: 'This is post three' })
//  .then(getPosts)
//  .catch(err => console.log(err));

// async function stands for asynchronous  function which waits for the promise to execute before 
// executing the rest of the code in the asynchronous event loop
async function init(){
    await createPost({ title: 'Post Three', body: 'This is post three' });
    getPosts();
}
init();

/* PROMISE ALL allows you to run all promises but it will take the longest promise time delay*/
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'Goodbye')
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => 
//     res.json()
// );
// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

