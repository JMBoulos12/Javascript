



/**
  #Instructions
  Recite the nursery rhyme 'This is the House that Jack Built'.

  [The] process of placing a phrase of clause within another phrase of clause is called embedding. 
  It is through the processes of recursion and embedding that we are able to take a finite number of forms (words and phrases) and construct an infinite number of expressions. 
  Furthermore, embedding also allows us to construct an infinitely long structure, in theory anyway.

  * papyr.com
  
  The nursery rhyme reads as follows:

  This is the house that Jack built.

  This is the malt
  that lay in the house that Jack built.

  This is the rat
  that ate the malt
  that lay in the house that Jack built.

  This is the cat
  that killed the rat
  that ate the malt
  that lay in the house that Jack built.

  This is the dog
  that worried the cat
  that killed the rat
  that ate the malt
  that lay in the house that Jack built.

  This is the cow with the crumpled horn
  that tossed the dog
  that worried the cat
  that killed the rat
  that ate the malt
  that lay in the house that Jack built.

  This is the maiden all forlorn
  that milked the cow with the crumpled horn
  that tossed the dog
  that worried the cat
  that killed the rat
  that ate the malt
  that lay in the house that Jack built.

  This is the man all tattered and torn
  that kissed the maiden all forlorn
  that milked the cow with the crumpled horn
  that tossed the dog
  that worried the cat
  that killed the rat
  that ate the malt
  that lay in the house that Jack built.

  This is the priest all shaven and shorn
  that married the man all tattered and torn
  that kissed the maiden all forlorn
  that milked the cow with the crumpled horn
  that tossed the dog
  that worried the cat
  that killed the rat
  that ate the malt
  that lay in the house that Jack built.

  This is the rooster that crowed in the morn
  that woke the priest all shaven and shorn
  that married the man all tattered and torn
  that kissed the maiden all forlorn
  that milked the cow with the crumpled horn
  that tossed the dog
  that worried the cat
  that killed the rat
  that ate the malt
  that lay in the house that Jack built.

  This is the farmer sowing his corn
  that kept the rooster that crowed in the morn
  that woke the priest all shaven and shorn
  that married the man all tattered and torn
  that kissed the maiden all forlorn
  that milked the cow with the crumpled horn
  that tossed the dog
  that worried the cat
  that killed the rat
  that ate the malt
  that lay in the house that Jack built.

  This is the horse and the hound and the horn
  that belonged to the farmer sowing his corn
  that kept the rooster that crowed in the morn
  that woke the priest all shaven and shorn
  that married the man all tattered and torn
  that kissed the maiden all forlorn
  that milked the cow with the crumpled horn
  that tossed the dog
  that worried the cat
  that killed the rat
  that ate the malt
  that lay in the house that Jack built.
  
  27-April-2023
*/


const NOUNS = [,
  "house that Jack built.",
  "malt",
  "rat",
  "cat",
  "dog",
  "cow with the crumpled horn",
  "maiden all forlorn",
  "man all tattered and torn",
  "priest all shaven and shorn",
  "rooster that crowed in the morn",
  "farmer sowing his corn",
  "horse and the hound and the horn"
];
const VERBS = [,
  "lay in",
  "ate",
  "killed",
  "worried",
  "tossed",
  "milked",
  "kissed",
  "married",
  "woke",
  "kept",
  "belonged to"
];
export class House {
  static verse(n) {
    let verse = [`This is the ${NOUNS[n]}`];
    for (let i = n-1; i > 0; i--)
      verse.push(`that ${VERBS[i]} the ${NOUNS[i]}`);
    return verse;
  }
  static verses(start, end) {
    let rhyme = [];
    for (let i = start; i <= end; i++)
      rhyme.push(...this.verse(i), "");
    rhyme.pop();
    return rhyme;
  }
}
