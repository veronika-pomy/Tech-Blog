const newCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector("#comment-name").value.trim();;
    const postId = location.pathname.split('/')[2];
    const response = await fetch('/post/' + postId , {
        method: 'POST',
        body: JSON.stringify({content}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Could not leave a comment. Please try again!');
    };

};

document
  .querySelector('.form-comment')
  .addEventListener('submit', newCommentHandler);