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
    // Try to fetch DC-related news from NewsAPI (free tier)
    fetch('https://newsapi.org/v2/everything?q=DC+comics+OR+Batman+OR+Superman+OR+Wonder+Woman&language=en&pageSize=5&apiKey=demo')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.articles && data.articles.length > 0) {
                var blogPosts = data.articles.map(function(article) {
                    return {
                        title: article.title,
                        body: article.description || 'Read more about this DC Universe topic...'
                    };
                });
                displayBlogPosts(blogPosts);
            } else {
                // Fallback to custom DC posts if no articles found
                loadDCFallbackPosts();
            }
        })
        .catch(function(error) {
            console.log('NewsAPI failed, using DC fallback posts:', error);
            // Fallback to curated DC posts
            loadDCFallbackPosts();
        });
}

// Fallback function with DC-themed posts
function loadDCFallbackPosts() {
    var dcPosts = [
        {
            title: "The Batman 2022: A New Dark Knight Era",
            body: "Robert Pattinson's Batman brings a fresh, noir-inspired take to Gotham City. This grounded approach focuses on detective work and psychological depth."
        },
        {
            title: "Superman Legacy: James Gunn's Vision",
            body: "The new Superman film promises to explore Clark Kent's dual identity as both alien and human, bringing hope back to the DC Universe."
        },
        {
            title: "Wonder Woman's Cultural Impact",
            body: "Gal Gadot's portrayal has redefined female superheroes in cinema, inspiring a new generation of fans and filmmakers worldwide."
        },
        {
            title: "The Flash: Multiverse Adventures",
            body: "Barry Allen's time-traveling adventure explores multiple timelines and brings together different versions of beloved DC characters."
        },
        {
            title: "Aquaman: King of the Seven Seas",
            body: "Jason Momoa's Aquaman has transformed the character from comic relief to a powerful, respected hero of the underwater world."
        }
    ];

    displayBlogPosts(dcPosts);
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
