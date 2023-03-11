


// fetch POST for create

// fetch PUT for update

// fetch DELETE for delet 
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

// event listener for update button

// event listener for delete button
document
  .querySelector('.btn-delete')
  .addEventListener('click', deleteButtonHandler);
