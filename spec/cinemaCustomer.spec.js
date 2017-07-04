const {CinemaCustomer, ChildCustomerWithParent} = require('../src/CinemaCustomer');

describe('Cinema Customer', () => {
	it ("The customer should be a type of `object`, and an instance of the `cinemaCustomer` class" , () => {
		let sam = new CinemaCustomer(25);
		expect(typeof sam).toEqual(typeof {});
		expect(sam instanceof CinemaCustomer).toBeTruthy();
	});
	
	it(`The customer age be a property of the customer`, function() {
		let dami = new CinemaCustomer(26);
		expect(dami.age).toBe(26);
	});
	
	it('should return the correct category of adult customers', function() {
		let dami = new CinemaCustomer(26);
		expect(dami.getCategory()).toBe('adult');
	});
	
	it('should return the correct category of children', function() {
		let fegor = new CinemaCustomer(16);
		expect(fegor.getCategory()).toBe('child');
	});
	
	it('should return correct movie list for adults', function() {
		let shalom = new CinemaCustomer(26);
			expect(shalom.canWatch()).toEqual([ 'Zootopia', 'Wonder woman', 'Black Widow', 'John Wick', 'Addicted']);
	});
	
	it('should return correct movie list for children not accompanied by parents', function() {
			let trey = new CinemaCustomer(16);
			expect(trey.canWatch()).toEqual(['Zootopia', 'Wonder woman', 'Black Widow']);
	});
	
	it('should return correct ticket fee for adults', function() {
		let matt = new CinemaCustomer(37);
		expect(matt.getTicketFee()).toBe(1500);
		});
	
	it('should return correct ticket fee for children', function() {
		let sarah = new CinemaCustomer(12);
		expect(sarah.getTicketFee()).toBe(1000);
		});
});

describe('Child Customer with Parent', () => {
	it('ChildCustomerWithParent should be a subclass of CinemaCustomer', () => {
		expect(Object.getPrototypeOf(ChildCustomerWithParent) === CinemaCustomer).toBe(true);
	});
	
	it('should return correct ticket fee for children with parents', function() {
		let anita = new ChildCustomerWithParent(15);
		expect(anita.getTicketFee()).toBe(1000);
	});
		
	it('should return correct movie list for children accompanied by parents', function() {
		let anita = new ChildCustomerWithParent(15);
		expect(anita.canWatch()).toEqual(['Zootopia', 'Wonder woman', 'Black Widow', 'John Wick']);
		});
});