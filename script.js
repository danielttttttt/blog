var form = document.querySelector('.comment-form');
var commentsArea = document.querySelector('.comments-display');
var blogPostsList = document.getElementById('blog-posts-list');

// Load comments and fetch blog posts on page load
window.addEventListener('load', function() {
    var saved = localStorage.getItem('comments');
    if (saved) {
        commentsArea.innerHTML = saved;
    }

    // Fetch blog posts from JSONPlaceholder
    fetchBlogPosts();
});

// Function to fetch blog posts
function fetchBlogPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            displayBlogPosts(posts);
        })
        .catch(function(error) {
            blogPostsList.innerHTML = '<p>Failed to load posts. Please try again later.</p>';
        });
}

// Function to display blog posts
function displayBlogPosts(posts) {
    var postsHTML = '';

    for (var i = 0; i < posts.length; i++) {
        postsHTML += '<div class="blog-post-item"><div class="blog-post-title">' + posts[i].title + '</div><div class="blog-post-body">' + posts[i].body + '</div></div>';
    }

    blogPostsList.innerHTML = postsHTML;
}

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;

    if (name && comment) {
        // Create comment HTML
        var commentHTML = '<div class="comment-item"><div class="comment-header"><strong>' + name + '</strong><span class="comment-date">' + new Date().toLocaleDateString() + '</span></div><div class="comment-content"><p>' + comment + '</p></div></div>';

        // Add to page
        commentsArea.innerHTML += commentHTML;

        // Save to localStorage
        localStorage.setItem('comments', commentsArea.innerHTML);

        // Clear form
        form.reset();
    }
});
