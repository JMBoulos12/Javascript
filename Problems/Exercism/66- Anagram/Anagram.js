



/**
  #Instructions
  An anagram is a rearrangement of letters to form a new word: for example "owns" is an anagram of "snow". 
  A word is not its own anagram: for example, "stop" is not an anagram of "stop".

  Given a target word and a set of candidate words, this exercise requests the anagram set: the subset of the candidates that are anagrams of the target.

  The target and candidates are words of one or more ASCII alphabetic characters (A-Z and a-z). Lowercase and uppercase characters are equivalent: 
  for example, "PoTS" is an anagram of "sTOp", but StoP is not an anagram of sTOp. 
  The anagram set is the subset of the candidate set that are anagrams of the target (in any order). 
  Words in the anagram set should have the same letter case as in the candidate set.

  Given the target "stone" and candidates "stone", "tones", "banana", "tons", "notes", "Seton", the anagram set is "tones", "notes", "Seton". 
   
   21-April-2023
*/


// my assumption here is that the easiest thing to do is sort every string first
// might not be the most performant, but makes sense to me..
const sortString = (s) => s.toLowerCase().split('').sort().join('');
export const findAnagrams = (word, possibilities) => {
    const sortedWord = sortString(word);
    return possibilities.filter(function (possibility) {
        return sortedWord === sortString(possibility) && word.toLowerCase() !== possibility.toLowerCase();
    });
};
