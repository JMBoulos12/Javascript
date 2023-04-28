



/**
  #Instructions
  Implement a program that translates from English to Pig Latin.

  Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below), 
  but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.

  * Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word. 
    Please note that "xr" and "yt" at the beginning of a word make vowel sounds (e.g. "xray" -> "xrayay", "yttria" -> "yttriaay").
  * Rule 2: If a word begins with a consonant sound, move it to the end of the word and then add an "ay" sound to the end of the word. 
    Consonant sounds can be made up of multiple consonants, a.k.a. a consonant cluster (e.g. "chair" -> "airchay").
  * Rule 3: If a word starts with a consonant sound followed by "qu", move it to the end of the word, 
    and then add an "ay" sound to the end of the word (e.g. "square" -> "aresquay").
  * Rule 4: If a word contains a "y" after a consonant cluster or as the second letter in a two letter word it makes a vowel sound 
    (e.g. "rhythm" -> "ythmrhay", "my" -> "ymay").
    
  There are a few more rules for edge cases, and there are regional variants too.
  
  28-April-2023
*/


export const translate = (sentence) => {
    const vowel = ['a','e','i','o','u','xr','yt'];
    const consonants = 'b,c,d,f,g,h,j,k,l,m,n,ñ,p,q,r,s,t,v,x,y,z'.split(',');
    const addW = 'ay';
    sentence = sentence.split(' ');
    let result = sentence.map((word) => {
        let quIndex = word.search(/qu/);
        let yIndex = word.search(/y/);
        let yBoolean = false;
        // Rule 4, Pre-Extra
        if(yIndex > 0){
            let count = 0;
            let cuttedWorld = word.substr(0,yIndex);
            for(let letter of cuttedWorld) if(consonants.includes(letter)) count += 1;
            if(count === word.substr(0,yIndex).length) yBoolean = true;
        }else if(yIndex === 0 && !consonants.includes(word[yIndex + 1])){
           return word.substr(yIndex + 1) + word.substr(0, yIndex + 1) + addW;
        }
        // Rules
        if(vowel.includes(word[0]) || vowel.includes(word.substr(0,2))){
            return word + addW;
        }else if(quIndex >= 0){
            return word.substr(quIndex + 2) + word.substr(0, quIndex + 2) + addW;
        }if(yBoolean){
            return word.substr(yIndex) + word.substr(0,yIndex) + addW;
        }else if(consonants.includes(word[0])){
            let indexCount = 0;
            for(let letter of word){
                if(consonants.includes(letter)) indexCount += 1;
                else break;
            }
            return word.substr(indexCount) + word.substr(0, indexCount) + addW;
        }
    })
    return result.join(' ');
};
