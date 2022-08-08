// Array of objects
// Each Object is a post
const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

// Function that has a 1 second delay before showing posts
// setTimeout() is an arrow function that allows us to create a delay in function output
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
Callback passes in function so that we wait 2 seconds before showing posts,
instead of loading the dom already in 1 second, then pushing another object
to an array which takes 2 seconds, so that the third object is never displayed
*/
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
} 

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);
