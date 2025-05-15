// Featured books data from rrantomato's actual Wattpad stories
const books = [
    {
        id: 1,
        title: "His Smile",
        description: "Dibalik senyum itu ada rahasia yang ia simpan dengan baik.",
        coverImage: "https://img.wattpad.com/cover/248732370-256-k695500.jpg",
        wattpadLink: "https://www.wattpad.com/story/248732370-his-smile"
    },
    {
        id: 2,
        title: "Some",
        description: "Aktingmu itu bagus sekali Jeno~ya.",
        coverImage: "https://img.wattpad.com/cover/252880371-256-k758900.jpg",
        wattpadLink: "https://www.wattpad.com/story/252880371-some"
    },
    {
        id: 3,
        title: "Jilan Minta Maaf Ayah",
        description: "Tentang Jilan Atharrayhan, seorang pemuda yang bersikeras untuk mendapatkan maaf dari sang ayah meski ditolak mentah-mentah, Jilan tidak akan menyerah meminta maaf pada ayahnya.",
        coverImage: "https://img.wattpad.com/cover/303664865-256-k728811.jpg",
        wattpadLink: "https://www.wattpad.com/story/303664865-jilan-minta-maaf-ayah"
    },
    {
        id: 4,
        title: "Promise",
        description: "Perpisahan adalah keputusan yang berat bagi setiap orang yang diberi pilihan itu.  Tapi terkadang hal itu harus dipaksakan untuk kebaikan. Sama halnya seperti yang dialami oleh Taeyong yang harus berpisah dengan adiknya karena perpisahan kedua orang tua mereka.  Apa benar hal itu untuk kebaikan bersama? ",
        coverImage: "https://img.wattpad.com/cover/307871467-256-k22927.jpg",
        wattpadLink: "https://www.wattpad.com/story/307871467-promise"
    }
];

// Function to display books in the grid
function displayBooks() {
    const booksGrid = document.querySelector('.books-grid');
    
    // Clear any existing content
    booksGrid.innerHTML = '';
    
    // Loop through the books array and create cards
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
          bookCard.innerHTML = `
            <div class="book-cover">
                <img src="${book.coverImage}" alt="${book.title} cover">
            </div>            <div class="book-info">
                <h3>${book.title}</h3>
                <a href="${book.wattpadLink}" class="btn" target="_blank">Read on Wattpad</a>
            </div>
        `;
        
        booksGrid.appendChild(bookCard);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', displayBooks);
