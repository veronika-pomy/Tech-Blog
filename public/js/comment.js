const newCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector("#comment-name").value.trim();;
    
    const response = await fetch('/post/:id' , {
        method: 'POST',
        body: JSON.stringify({content}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/post/:id');
    } else {
        alert('Could not leave a comment. Please try again!');
    };

};

document
  .querySelector('.form-comment')
  .addEventListener('submit', newCommentHandler);