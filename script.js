function addPost() {
    const postTitle = document.getElementById("post-title").value;
    const postContent = document.getElementById("post-content").value;

    if (postTitle.trim() === "" || postContent.trim() === "") {
        alert("Please enter a title and content for your post.");
        return;
    }

    const postList = document.getElementById("post-list");
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const titleElement = document.createElement("h2");
    titleElement.textContent = postTitle;
    postElement.appendChild(titleElement);

    const contentElement = document.createElement("p");
    contentElement.textContent = postContent;
    postElement.appendChild(contentElement);

    const dateElement = document.createElement("p");
    const currentDate = new Date();
    

    const formattedDate = `${currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })} | ${currentDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })}`;
    
    dateElement.textContent = `Posted on: ${formattedDate}`;
    postElement.appendChild(dateElement);

    postList.appendChild(postElement);


    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";


    document.getElementById("post-content").style.height = "auto";
}


const contentTextarea = document.getElementById("post-content");
contentTextarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
});


contentTextarea.style.height = "auto";
