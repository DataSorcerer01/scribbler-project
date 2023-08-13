document.addEventListener("DOMContentLoaded", function() {
    const signupModal = document.getElementById("signup-modal");
    const signupButton = document.getElementById("sign-up-btn");
    const closeButton = signupModal.querySelector(".close-btn");

    signupButton.addEventListener("click", function() {
        signupModal.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        signupModal.style.display = "none";
    });

    const signinButton = document.getElementById("sign-in-btn");
    const signinModal = document.getElementById("signin-modal");
    const signinCloseButton = signinModal.querySelector(".close-btn");

    signinButton.addEventListener("click", function() {
        signinModal.style.display = "block";
    });

    signinCloseButton.addEventListener("click", function() {
        signinModal.style.display = "none";
    });

    signinModal.addEventListener("click", function(event) {
        if (event.target === signinModal) {
            signinModal.style.display = "none";
        }
    });

    
});
document.addEventListener("DOMContentLoaded", function() {
    const signinButton = document.getElementById("sign-in-btn");
    const signinModal = document.getElementById("signin-modal");
    const signinCloseButton = signinModal.querySelector(".close-btn");
    const toggleToSignup = signinModal.querySelector(".toggle-to-signup");
    const signinFields = signinModal.querySelectorAll(".signin-field");
    const signinSubmitButton = signinModal.querySelector("#signin-submit-btn");

    signinButton.addEventListener("click", function() {
        signinModal.style.display = "block";
    });

    signinCloseButton.addEventListener("click", function() {
        signinModal.style.display = "none";
    });

    toggleToSignup.addEventListener("click", function() {
        signinModal.style.display = "none";
        signupModal.style.display = "block";
    });

    signinModal.addEventListener("click", function(event) {
        if (event.target === signinModal) {
            signinModal.style.display = "none";
        }
    });

    signinSubmitButton.addEventListener("click", function(event) {
        let allFieldsFilled = true;

        signinFields.forEach(field => {
            if (field.value.trim() === "") {
                allFieldsFilled = false;
                field.parentElement.querySelector(".error-message").style.display = "block";
            } else {
                field.parentElement.querySelector(".error-message").style.display = "none";
            }
        });

        if (!allFieldsFilled) {
            event.preventDefault();
        }
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const allPostsButton = document.getElementById("all-posts-btn");
    const createPostButton = document.getElementById("create-post-btn");
    const createPostModal = document.getElementById("create-post-modal");
    const closeButton = createPostModal.querySelector(".close-btn");

    allPostsButton.addEventListener("click", function() {
        
        window.location.href = "bloglist.html";  
    });

    createPostButton.addEventListener("click", function() {
        createPostModal.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        createPostModal.style.display = "none";
    });

   
});

