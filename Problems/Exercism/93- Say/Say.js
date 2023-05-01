



/**
  #Instructions
  Given a number from 0 to 999,999,999,999, spell out that number in English.

  Step 1
  Handle the basic case of 0 through 99.

  If the input to the program is 22, then the output should be 'twenty-two'.

  Your program should complain loudly if given a number outside the blessed range.

  Some good test cases for this program are:

  * 0
  * 14
  * 50
  * 98
  * -1
  * 100
  
  #Extension
  If you're on a Mac, shell out to Mac OS X's say program to talk out loud. If you're on Linux or Windows, eSpeakNG may be available with the command espeak.

  #Step 2
  Implement breaking a number up into chunks of thousands.

  So 1234567890 should yield a list like 1, 234, 567, and 890, while the far simpler 1000 should yield just 1 and 0.

  The program must also report any values that are out of range.

  #Step 3
  Now handle inserting the appropriate scale word between those chunks.

  So 1234567890 should yield '1 billion 234 million 567 thousand 890'

  The program must also report any values that are out of range. It's fine to stop at "trillion".

  #Step 4
  Put it all together to get nothing but plain English.

  12345 should give twelve thousand three hundred forty-five.

  The program must also report any values that are out of range.

  #Extensions
  Use and (correctly) when spelling out the number in English:

  * 14 becomes "fourteen".
  * 100 becomes "one hundred".
  * 120 becomes "one hundred and twenty".
  * 1002 becomes "one thousand and two".
  * 1323 becomes "one thousand three hundred and twenty-three". 
   
  01-May-2023
*/


const NUMBER_MAP = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
};
export const say = (n) => {
	if (n < 0 || n > 999999999999)
		throw new Error("Number must be between 0 and 999,999,999,999.");
	if (n === 0) return "zero";
	if (n % 10 === 0 && n < 100) return NUMBER_MAP[n];
	let parse = (nn) => {
		let amount = "";
		let billions = Math.floor(nn / 1000000000);
		nn -= billions * 1000000000;
		let millions = Math.floor(nn / 1000000);
		nn -= millions * 1000000;
		let thousands = Math.floor(nn / 1000);
		nn -= thousands * 1000;
		let hundreds = Math.floor(nn / 100);
		nn -= hundreds * 100;
		let tens = Math.floor(nn / 10);
		nn -= tens * 10;
		let digits = nn;
		if (billions > 0) amount += parse(billions) + " billion ";
		if (millions > 0) amount += parse(millions) + " million ";
		if (thousands > 0) amount += parse(thousands) + " thousand ";
		if (hundreds > 0) amount += NUMBER_MAP[hundreds] + " hundred ";
		if (tens > 0) {
			if (tens > 1) {
				if (hundreds > 0) amount += " ";
				amount += NUMBER_MAP[tens * 10];
				if (digits > 0) amount += "-" + NUMBER_MAP[digits];
			} else {
				amount += NUMBER_MAP[tens * 10 + nn];
			}
		} else if (digits > 0) amount += NUMBER_MAP[digits];
		return amount;
	};
	return parse(n)
		.split(" ")
		.filter((s) => s !== "")
		.join(" ")
		.trim();
};
