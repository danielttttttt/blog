# DC Universe Blog with Interactive Comments

A responsive blog page featuring a DC Universe movie review with interactive comment functionality and dynamic blog posts fetching.

## Features

### ✅ Interactive Comment System
- **Form Submission**: Handle comment submission with JavaScript
- **Real-time Display**: Comments appear immediately below the post
- **Persistence**: Comments saved in localStorage and persist on page reload
- **Form Validation**: Basic validation for name and comment fields
- **Responsive Design**: Mobile-friendly comment layout

### ✅ Dynamic Blog Posts
- **API Integration**: Fetches blog posts from JSONPlaceholder API
- **Async Loading**: Uses fetch() to load posts asynchronously
- **Error Handling**: Graceful error handling for failed requests
- **Clean Display**: Formatted blog post cards with titles and content

### ✅ Modern Web Technologies
- **Vanilla JavaScript**: Simple, clean JavaScript following best practices
- **CSS Variables**: Modern CSS with custom properties
- **Responsive Design**: Mobile-first approach with media queries
- **Semantic HTML**: Proper HTML structure and accessibility

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox and CSS variables
- **Vanilla JavaScript**: ES5 compatible JavaScript
- **JSONPlaceholder API**: External API for blog posts
- **localStorage**: Browser storage for comment persistence

## File Structure

```
├── blog.html          # Main blog page
├── styles.css         # All CSS styles
├── script.js          # JavaScript functionality
├── batmann.jpg        # Featured image
├── dc-fan-avatar.jpg  # Author avatar
└── README.md          # Project documentation
```

## JavaScript Features Implemented

### Variables & Data Types
- String variables for form inputs
- DOM element references
- Date objects for timestamps

### Functions
- `fetchBlogPosts()` - Fetches posts from API
- `displayBlogPosts()` - Renders posts to DOM
- Anonymous functions for event handling

### Event Listeners
- Form submission handling
- Page load event for initialization
- Uses `addEventListener()` method exclusively

### API Integration
- `fetch()` for HTTP requests
- Promise handling with `.then()`
- Error handling with `.catch()`

### DOM Manipulation
- `querySelector()` and `getElementById()` for element selection
- `createElement()` and `innerHTML` for content creation
- `appendChild()` for adding elements to DOM

## How to Use

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   ```

2. **Open the blog page**
   - Open `blog.html` in your web browser
   - Or serve with a local web server

3. **Interact with comments**
   - Fill out the comment form with your name and comment
   - Submit to see your comment appear immediately
   - Comments will persist when you reload the page

4. **View blog posts**
   - Blog posts load automatically from JSONPlaceholder API
   - Shows 5 recent posts with titles and content

## Browser Compatibility

- Modern browsers with ES5 support
- localStorage support required for comment persistence
- Fetch API support required for blog posts (or polyfill needed for older browsers)

## Future Enhancements

- Comment editing and deletion
- User authentication
- Real backend integration
- Comment threading/replies
- Search functionality
- Categories and tags

## Author

**Daniel Negussie** - DC Superfan & Movie Critic

---

*This project demonstrates modern web development practices using vanilla JavaScript, responsive CSS, and API integration.*
