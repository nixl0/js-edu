const posts = [
    { title: 'post one', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatem odit sequi alias eius distinctio quos numquam voluptates. Labore error pariatur nisi ab porro doloribus aperiam obcaecati eum! Ipsum rem consectetur non tenetur dolore porro odit, voluptatum velit provident ad?' },
    { title: 'post two', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque, aliquid quaerat aspernatur distinctio similique esse totam dolores vero architecto?' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            (! error) ? resolve() : reject('error occured');
        }, 2000);
    });
}

// createPost({title: 'post three', body: 'blablablaa'})
//     .then(getPosts)
//     .catch(err => alert(err));

async function init() {
    await createPost({title: 'post three', body: 'blablablaa'});

    getPosts();
}



getPosts();
init();