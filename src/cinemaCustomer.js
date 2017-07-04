class cinemaCustomer {
  constructor (age) {
    this.age = age;
  }

  getCategory() {
    if (this.age > 17) {
      return "adult";
    } else {
      return "child";
    } 
  }

  getPermittedMovies (category) {
    let gMovies = ["Zootopia"];
    let pgMovies = ["Wonder woman", "Black Widow"];
    let rMovies = ["John Wick"];
    let xMovies = ["Addicted"];

    if (category === "adult") {
      return [...gMovies, ...pgMovies, ...rMovies, ...xMovies];
    } else if (category === "child with parent") {
      return [...gMovies, ...pgMovies, ...rMovies];
    } else {
      return [...gMovies, ...pgMovies];
    }
  }

  canWatch () {
    return this.getPermittedMovies(getCategory());
  }

  getTicketFee () {
    if (this.getCategory() === 'child') {
      return 1000;
    }
    return 1500;
  }

  buyTicket (cash) {
    if (cash < this.getTicketFee()) {
      return "Cash not enough.";
    }
    return "Enjoy your movie."
  }
};

class childCustomerWithParent extends cinemaCustomer {
  constructor (age) {
    super(age);
  }

  getCategory () {
    return "child with parent";
  }
};