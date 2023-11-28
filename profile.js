function validateForm(){
    var postContent = document.getElementById('postContent').ariaValueMax.trim();
    if (postContent === "") {
        alert("Please enter your post before submitting.");
        return false;
    }
    return true;
}
// create a new post element
var newPost = document.createElement('div');
newPost.className = 'post';
newPost.textContent = postContent;
// append the new post to the postscontainer
var postsContainer = document.getElementById('postsContainer');
postsContainer.appendChild(newPost);
// clear the textarea content after submitting
document.getElementById('postContent').value = '';
return false; // prevvents the form from actually submitting and refreshing the page