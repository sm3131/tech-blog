async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-name"]').value;
    const post_text = document.querySelector('textarea[name="post-body"]').value;
    const user_id = 1

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_text,
            user_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);