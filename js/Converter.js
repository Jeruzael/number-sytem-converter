

let DecimalTo = class {
	constructor(divisor){
		this.divisor = divisor;
		
	}

	getQuotient(dividend) {
		let quo = dividend/this.divisor;		
		//return Number.parseFloat(quo).toFixed(2);
		return Math.trunc(quo);
		//return Number.parseInt(Number.parseFloat(quo).toFixed(0));
		//return quo;
	}


};

let decToBin = new DecimalTo(2);
let decToOctal = new DecimalTo(8);
let decToHexa = new DecimalTo(16);

console.log("Bin: ", decToBin.getQuotient(100));
console.log("Octal: ", decToOctal.getQuotient(100));
console.log("Hexa: ", decToHexa.getQuotient(100));