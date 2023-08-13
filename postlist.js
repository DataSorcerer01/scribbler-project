document.addEventListener('DOMContentLoaded', function () {
    const deleteIcons = document.querySelectorAll('.delete-icon');
    const deleteModal = document.getElementById('delete-post-modal');
    const deleteYesBtn = document.getElementById('delete-yes-btn');
    const deleteNoBtn = document.getElementById('delete-no-btn');

    deleteIcons.forEach(function (deleteIcon) {
        deleteIcon.addEventListener('click', function () {
            deleteModal.style.display = 'block';
            const postCard = this.closest('.post-card');

            deleteYesBtn.addEventListener('click', function () {
                // Code to delete the post
                postCard.remove();
                deleteModal.style.display = 'none';
            });

            deleteNoBtn.addEventListener('click', function () {
                deleteModal.style.display = 'none';
            });
        });
    });
});
