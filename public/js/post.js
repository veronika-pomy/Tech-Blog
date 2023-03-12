// fetch POST for create
const createPostButtonHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-name').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/dashboard`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
            'Content-Type': 'application/json',
        },
        });

        if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert('Could not create a new post');
        }
    }
};

// fetch PUT for update
const updateButtonHandler = async (event) => {

    if (event.target.hasAttribute('data-id')){

        const id = event.target.getAttribute('data-id');
        // how to get the data from the input field? 
        const contentUpdate = document.querySelector('#post-content-update').value.trim();

        const response = await fetch(`/dashboard/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    'content': contentUpdate,
                }
            )
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post.');
        }
    }
};

// fetch DELETE for delete
const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/dashboard/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post.');
        }
    }
};

// event listener for create button
document
  .querySelector('.form-post')
  .addEventListener('submit', createPostButtonHandler);

// event listener for update button
document
  .querySelector('.btn-update')
  .addEventListener('click', updateButtonHandler);

// event listener for delete button
document
  .querySelector('.btn-delete')
  .addEventListener('click', deleteButtonHandler);
