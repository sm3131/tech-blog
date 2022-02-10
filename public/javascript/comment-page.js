const buttons = document.querySelectorAll('.delete-comment');
buttons.forEach(button => {
    button.addEventListener('click', commentPageHandler);
})

async function commentPageHandler(event) {
    event.preventDefault();

    const id = event.target.name;
   
    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        //document.location.replace('/dashboard');
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

