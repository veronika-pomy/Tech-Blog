const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector("#comment-name").value;
     console.log(comment);
        const response = await fetch('/post/:id' , {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        // this part to then render comment on the page ? 
        // if (response.ok) {
        //     document.location.replace('/post/:id');
        // } else {
        //     alert('Could not leave a comment. Please try again!');
        // };
};

document
  .querySelector('.form-comment')
  .addEventListener('submit', newCommentHandler);