describe('index.js', function () {
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

  describe('getBookInformation(books, title)', function () {
    it('returns a book object with a matching title from an array', function () {
      expect(getBookInformation(books, "Scrum")).to.eql({ title: "Scrum", author: "Jeff Sutherland", genre: "Business" });
    });

    it('returns undefined if there are no books found with a matching title', function() {
      expect(getBookInformation(books, "Romeo & Juliet")).to.equal(undefined);
    });
  });

  describe('booksByGenre(books, genre)', function () {
    it('returns all books in a given genre', function () {
      expect(booksByGenre(books, "Nonfiction")).to.eql([
        { title: "Algorithms to Live By", author: "Brian Christian and Tom Griffiths", genre: "Nonfiction" },
        { title: "Belonging", author: "Toko-pa Turner", genre: "Nonfiction" },
        { title: "Talking to Strangers", author: "Malcolm Gladwell", genre: "Nonfiction" },
      ]);
    });

    it('returns "None Found" if there are no books found with a matching title', function() {
      expect(booksByGenre(books, "Fiction")).to.eql("None Found")
    });
  });

  describe('booksWithAuthors(books)', function () {
    it('returns an array of books with their authors', function () {
      expect(booksWithAuthors(books)).to.have.all.members([
        "Algorithms to Live By by Brian Christian and Tom Griffiths",
        "American Carnage by Tim Alberta",
        "Becoming by Michelle Obama",
        "Belonging by Toko-pa Turner",
        "Caste by Isabel Wilkerson",
        "Multipliers by Liz Wiseman and Greg McKeown",
        "My Grandmother's Hands by Resmaa Menakem",
        "The New Jim Crow by Michelle Alexander",
        "On the Road by Jack Kerouac",
        "Scrum by Jeff Sutherland",
        "Talking to Strangers by Malcolm Gladwell",
        "Teaching to Transgress by bell hooks",
      ]);
    });
  });
});