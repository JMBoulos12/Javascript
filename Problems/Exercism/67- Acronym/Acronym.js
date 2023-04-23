



/**
  #Instructions
  Convert a phrase to its acronym.

  Techies love their TLA (Three Letter Acronyms)!

  Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG). 
   
  23-April-2023
*/


export const parse = (input) => {
  return input.split(/[^a-zA-Z']/)
    .map(word => word[0] && word[0].toUpperCase())
    .join('');
};
