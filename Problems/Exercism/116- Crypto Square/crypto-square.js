



/**
  #Instructions
  Implement the classic method for composing secret messages called a square code.

  Given an English text, output the encoded version of that text.

  First, the input is normalized: the spaces and punctuation are removed from the English text and the message is downcased.

  Then, the normalized characters are broken into rows. These rows can be regarded as forming a rectangle when printed with intervening newlines.

  For example, the sentence
  "If man was meant to stay on the ground, god would have given us roots."
  
  is normalized to:
  "ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots"
  
  The plaintext should be organized in to a rectangle. The size of the rectangle (r x c) should be decided by the length of the message, 
  such that c >= r and c - r <= 1, where c is the number of columns and r is the number of rows.

  Our normalized text is 54 characters long, dictating a rectangle with c = 8 and r = 7:

  "ifmanwas"
  "meanttos"
  "tayonthe"
  "groundgo"
  "dwouldha"
  "vegivenu"
  "sroots  "
  
  The coded message is obtained by reading down the columns going left to right.

  The message above is coded as:
  "imtgdvsfearwermayoogoanouuiontnnlvtwttddesaohghnsseoau"
  
  Output the encoded text in chunks that fill perfect rectangles (r X c), with c chunks of r length, separated by spaces. 
  For phrases that are n characters short of the perfect rectangle, pad each of the last n chunks with a single trailing space.

  "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau "
  Notice that were we to stack these, we could visually decode the ciphertext back in to the original message:

  "imtgdvs"
  "fearwer"
  "mayoogo"
  "anouuio"
  "ntnnlvt"
  "wttddes"
  "aohghn "
  "sseoau "
  
  04-May-2023
*/


export class Crypto {
    constructor(inString) {
        this.inString = inString;
    }
    get ciphertext() {
        if(this.inString == "")
            return "";
        let outString = this.inString
            .toLowerCase()
            .replace(/\s+|[^a-zA-Z0-9]/g, "");
        let r, c; //rows, columns (if they can't equal, column can be 1 more)
        let s = Math.ceil(Math.sqrt(outString.length));
        if (s ** 2 > outString.length && (s + s -1) > outString.length) {
            c = s;
            r = s - 1;
        } else {
            r = c = s;
        }
        let table = [];
        let string = "";
        let rep = 0;
        
        //Creates cipher table 
        for (let e = 0; e < r; e++) {
            string = "";
            for (let i = rep; i < c+rep; i++) {
                if(outString[i]==undefined)
                    string+=" "
                else
                    string += outString[i];
            }
            rep+=c;
            table.push(string);
        }
        outString = "";
        
        //creates ciphered text
        for(let i = 0; i<c; i++){
            for(let e = 0; e<r; e++){
                outString+= table[e].charAt(i);
            }
            if(i!=c-1)
              outString+= " ";
        }
        return outString;
    }
}
