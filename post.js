document.addEventListener("DOMContentLoaded", function() {
    const editButtons = document.querySelectorAll(".edit-button");
    const likeButtons = document.querySelectorAll("#like-button");
    const commentButtons = document.querySelectorAll(".comment-button");

    editButtons.forEach(button => {
        button.addEventListener("click", toggleEditMode);
    });

    likeButtons.forEach(button => {
        button.addEventListener("click", toggleLike);
    });

    commentButtons.forEach(button => {
        button.addEventListener("click", addComment);
    });

    function toggleEditMode(event) {
        const postContainer = event.target.closest(".post-container");
        const postTitle = postContainer.querySelector(".post-title");
        const postText = postContainer.querySelector(".post-text");

        postTitle.classList.toggle("editable");
        postText.classList.toggle("editable");
        
        if (postTitle.classList.contains("editable")) {
            event.target.innerHTML = '<i class="fas fa-save"></i> Save';
        } else {
            event.target.innerHTML = '<i class="fas fa-edit"></i> Edit';
        }
    }

    function toggleLike(event) {
        const likeButton = event.target;
        const likeStatus = likeButton.nextElementSibling;

        if (likeButton.classList.contains("liked")) {
            likeButton.classList.remove("liked");
            likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> Like';
        } else {
            likeButton.classList.add("liked");
            likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked!';
        }

        const currentLikes = likeStatus.textContent;
        const likesNumber = parseInt(currentLikes);
        if (!isNaN(likesNumber)) {
            if (likeButton.classList.contains("liked")) {
                if (likesNumber === 0) {
                    likeStatus.textContent = "1 person likes this!";
                } else {
                    likeStatus.textContent = (likesNumber + 1) + " people like this!";
                }
            } else {
                if (likesNumber === 1) {
                    likeStatus.textContent = "Be the first one to like this!";
                } else {
                    likeStatus.textContent = (likesNumber - 1) + " people like this!";
                }
            }
        }
    }

    function addComment(event) {
        const postContainer = event.target.closest(".post-container");
        const commentInput = postContainer.querySelector("#comment-input");
        const allComments = postContainer.querySelector(".all-comments");

        if (commentInput.value.trim() !== "") {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");
            commentDiv.textContent = commentInput.value;
            allComments.insertBefore(commentDiv, allComments.firstChild);

            commentInput.value = "";
        }
    }
});
 editButton = document.querySelector(".edit-button");

    if (editButton.textContent === "Edit") {
        postTitle.contentEditable = true;
        postText.contentEditable = true;
        postTitle.style.border = "2px solid pink";
        postText.style.border = "2px solid pink";
        editButton.innerHTML = '<i class="fas fa-save"></i> Save';
    } else {
        postTitle.contentEditable = false;
        postText.contentEditable = false;
        postTitle.style.border = "none";
        postText.style.border = "none";
        editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
    }


// Function to handle the Like button click
function toggleLike() {
    const likeButton = document.querySelector(".like-button");
    const likeStatus = document.querySelector(".like-status");
    let likeCount = parseInt(likeButton.dataset.likes);

    if (!likeButton.classList.contains("liked")) {
        likeCount++;
        likeButton.classList.add("liked");
    } else {
        likeCount--;
        likeButton.classList.remove("liked");
    }

    likeButton.dataset.likes = likeCount;
    likeStatus.textContent = likeCount === 0 ? "Be the first one to like this!" :
                          likeCount === 1 ? "1 person likes this!" : 
                          `${likeCount} people like this!`;
}

// Function to handle the Comment button click
function addComment() {
    const commentInput = document.querySelector(".comment-input");
    const allComments = document.querySelector(".all-comments");

    if (commentInput.value !== "") {
        const comment = document.createElement("div");
        comment.className = "comment";
        comment.textContent = commentInput.value;
        allComments.insertBefore(comment, allComments.firstChild);
        commentInput.value = "";
    }
}

// Attach event listeners when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.querySelector(".edit-button");
    const likeButton = document.querySelector(".like-button");
    const commentButton = document.querySelector(".comment-button");

    editButton.addEventListener("click", toggleEditMode);
    likeButton.addEventListener("click", toggleLike);
    commentButton.addEventListener("click", addComment);
});
