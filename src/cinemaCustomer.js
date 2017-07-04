class CinemaCustomer {
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
    return this.getPermittedMovies(this.getCategory());
  }

  getTicketFee () {
    if (this.getCategory() === 'adult') {
      return 1500;
    }
    return 1000;
  }

  buyTicket (cash) {
    if (cash < this.getTicketFee()) {
      return "Cash not enough.";
    }
    return "Enjoy your movie."
  }
};

class ChildCustomerWithParent extends CinemaCustomer {
  constructor (age) {
    super(age);
  }
  
  getCategory () {
    return "child with parent";
  }
};

module.exports = {
	CinemaCustomer,
	ChildCustomerWithParent
};

let ray = new CinemaCustomer(12);
let trey = new CinemaCustomer(22);
let sophia = new ChildCustomerWithParent(12);
