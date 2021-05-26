const books = [
  { title: "Algorithms to Live By", author: "Brian Christian and Tom Griffiths", genre: "Nonfiction" },
  { title: "American Carnage", author: "Tim Alberta", genre: "Politics & Social Sciences" },
  { title: "Becoming", author: "Michelle Obama", genre: "Biography" },
  { title: "Belonging", author: "Toko-pa Turner", genre: "Nonfiction" },
  { title: "Caste", author: "Isabel Wilkerson", genre: "History" },
  { title: "Multipliers", author: "Liz Wiseman and Greg McKeown", genre: "Business" },
  { title: "My Grandmother's Hands", author: "Resmaa Menakem", genre: "Race" },
  { title: "The New Jim Crow", author: "Michelle Alexander", genre: "Race" },
  { title: "On the Road", author: "Jack Kerouac", genre: "Classics" },
  { title: "Scrum", author: "Jeff Sutherland", genre: "Business" },
  { title: "Talking to Strangers", author: "Malcolm Gladwell", genre: "Nonfiction" },
  { title: "Teaching to Transgress", author: "bell hooks", genre: "Education" },
]


// Using Arrow Functions
const getBookInformation = (books, title) => books.find(book => book.title === title)

const booksByGenre = (books, genre) => {
  const booksList = books.filter(book => book.genre === genre)
  return booksList.length > 0 ? booksList : "None Found"
}

const booksWithAuthors = books => books.map(book => `${book.title} by ${book.author}`)



// Using Long Form
function getBookInformation(books, title) {
  return books.find(book => book.title === title)
}

function booksByGenre(books, genre) {
  const booksList = books.filter(book => book.genre === genre)
  return booksList.length > 0 ? booksList : "None Found"
}

function booksWithAuthors(books) {
  return books.map(book => `${book.title} by ${book.author}`)
}