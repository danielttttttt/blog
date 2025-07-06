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
    // DC Universe blog posts data
    var dcPosts = [
        {
            title: "Superman Legacy: What We Know So Far",
            body: "James Gunn's Superman Legacy promises a fresh take on the Man of Steel. Set to reboot the DC Universe, this film will focus on a younger Superman balancing his Kryptonian heritage with his human upbringing in Smallville."
        },
        {
            title: "The Flash Movie: Multiverse Madness Explained",
            body: "Barry Allen's solo adventure explores the multiverse like never before. With multiple Batman variants and timeline changes, The Flash delivers spectacular action while diving deep into the consequences of time travel."
        },
        {
            title: "Wonder Woman's Impact on Modern Superhero Cinema",
            body: "Gal Gadot's Wonder Woman revolutionized female superhero representation. From her debut in Batman v Superman to her solo films, Diana Prince has become a symbol of strength, compassion, and heroism."
        },
        {
            title: "Aquaman and the Lost Kingdom: Underwater Epic",
            body: "Jason Momoa returns as the King of Atlantis in this underwater adventure. With stunning visuals and epic battles, the sequel explores Arthur Curry's role as both surface dweller and ocean protector."
        },
        {
            title: "The Dark Knight Trilogy: Christopher Nolan's Masterpiece",
            body: "Nolan's Batman trilogy redefined superhero cinema with its realistic approach. From Batman Begins to The Dark Knight Rises, Christian Bale's Bruce Wayne faced psychological and physical challenges that elevated the genre."
        }
    ];

    // Simulate API delay for realistic loading
    setTimeout(function() {
        displayBlogPosts(dcPosts);
    }, 1000);
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
