# Rrantomato-web

A professional website for the Wattpad author known as RRantomato. This website showcases the author's books, provides an about section, and offers contact information.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Featured books section with links to Wattpad
- About the author section
- Contact form for reader engagement
- Social media links

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## File Structure

- `index.html` - Main website structure
- `css/styles.css` - All styling for the website
- `js/books.js` - Contains book data and display functionality
- `js/main.js` - Contains all interactive functionality
- `images/` - Directory for all website images (currently empty, needs author photos and book covers)

## Setup Instructions

1. Clone or download this repository
2. Open `index.html` in your browser to view the website
3. Customize the content as needed:
   - Update book information in `js/books.js`
   - Add real book covers and author photo to the `images/` directory
   - Update social media links in the contact section of `index.html`

## Customization

### Adding New Books

To add new books, edit the `books` array in `js/books.js`. Follow the existing format:

```javascript
{
    id: [unique number],
    title: "Book Title",
    description: "Brief description of the book",
    coverImage: "images/bookcover.jpg",
    wattpadLink: "https://www.wattpad.com/story/yourstorylink"
}
```

### Changing Colors

The website uses a purple color scheme. To change this, edit the following in `css/styles.css`:

- Primary color: `#6d5c7e` (purple)
- Secondary color: `#584a66` (darker purple for hover states)

## License

This project is open-source and available for personal use.

## Credits

- Font Awesome for icons
- Google Fonts for typography
