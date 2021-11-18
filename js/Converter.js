

let DecimalTo = class {
	constructor(divisor, dividend){
		this.divisor = divisor;	
		this.dividend = dividend;	
	}

	getQuotient() {
		let quo = this.dividend/this.divisor;
		//return Number.parseFloat(quo).toFixed(2);
		//console.log(dividend%this.divisor);
		return Math.trunc(quo);
		//return Number.parseInt(Number.parseFloat(quo).toFixed(0));
		//return quo;
	}

	getModulo(){
		let mod = this.dividend%this.divisor;
		return mod;
	}

	getSubtrahend(){
		let sbtd = this.divisor * this.getQuotient();
		return sbtd;
	}

};

let decToBin = new DecimalTo(2, 100);
let decToOctal = new DecimalTo(8, 100);
let decToHexa = new DecimalTo(16, 100);

console.log("Bin: ", decToBin.getQuotient(), " Modulo: ", decToBin.getModulo(), " Subtrahend: ", decToBin.getSubtrahend());
console.log("Octal: ", decToOctal.getQuotient(), " Modulo: ", decToOctal.getModulo(), " Subtrahend: ", decToOctal.getSubtrahend());
console.log("Hexa: ", decToHexa.getQuotient(), " Modulo: ", decToHexa.getModulo(), " Subtrahend: ", decToHexa.getSubtrahend());