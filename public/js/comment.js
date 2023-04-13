const loginFormHandle = async (event) => {
    event.preventDefault();
    console.log("loginFormHandle");
    const comment_body = document.getElementById("comment-body").value.trim();
    const url = location.href.split("/")
    const post_id = url[url.length - 1]

    if (comment_body && post_id) {
        const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ comment_body, post_id }),
            headers: { "Content-Type": "application/json" },
        });
        const results = response.json()
        console.log(results);

        if (response.ok) {
            console.log("TESTING");
            document.location.replace('/dashboard');
        } else {

            alert("Failed to log in.");
        }
    }
};


document.getElementById('comment-button').addEventListener('click', loginFormHandle);