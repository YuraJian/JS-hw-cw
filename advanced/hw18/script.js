const containerAll = document.getElementById('container');


const getXHR = (url) => {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';

        xhr.send();

        xhr.onload = () => {
            const { status, response } = xhr;
            if (status === 200) {
                resolve(response);
            } else {
                reject({
                    status,
                })
            }
        }

        xhr.onerror = () => {
            reject({});
        }
    })
}

const hideComments = (div) => {
    let comments = div.lastElementChild;
    comments.remove();
};

const showComments = (comments, div) => {
    const commentsContainer = document.createElement('div');
    comments.map((comment) => {
        const commentText = document.createElement('p');
        commentText.innerText = comment.body;

        commentsContainer.append(commentText);
    })

    div.append(commentsContainer);
}

const getComments = (id, event) => {
    getXHR(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => {
            const button = event.target;
            const parent = event.target.parentNode;

            if (button.innerText === 'Show Comments') {
                button.innerText = 'Hide Comments';
                showComments(response, parent);
            } else if (button.innerText === 'Hide Comments') {
                button.innerText = 'Show Comments';
                hideComments(parent);
            }
        })
        .catch((err) => {
            if (err.status !== undefined) {
                if (err.status === 404) {
                    alert('user not found')
                }
            }
        })
}

const renderPosts = (posts) => {
    const mapPosts = posts.map((post) => {
        const postContainer = document.createElement('div');
        const postTitle = document.createElement('h2');
        const postText = document.createElement('p');
        const postButton = document.createElement('button');

        postContainer.classList.add('post-container');

        postTitle.innerText = post.title;
        postText.innerText = post.body;
        postButton.innerText = 'Show Comments';

        let postID = post.id;

        console.log(post.id)

        postContainer.append(postTitle, postText, postButton);

        postButton.addEventListener('click', (event) => {
            getComments(postID, event);
        })

        containerAll.append(postContainer)
    })
}

getXHR(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => {
        renderPosts(response)
    })
    .catch((err) => {
        if (err.status !== undefined) {
            if (err.status === 404) {
                alert('user not found')
            }
        }
    })