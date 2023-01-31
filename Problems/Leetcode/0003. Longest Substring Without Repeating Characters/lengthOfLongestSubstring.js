




/*
  Given a string s, find the length of the longest 
  substring
   without repeating characters.

  Example 1:

  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.
  
  Example 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.
  
  Example 3:
  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

  Constraints:
  0 <= s.length <= 5 * 104
  s consists of English letters, digits, symbols and spaces. 
  
  29-January-2023
*/

var lengthOfLongestSubstring = function(s) {
    var length = s.length;
    if (length <= 1) {
        return length;
    }
    var p = 0;
    var q = 1;
    var result = 1;
    while (q < length) {
        var sub = s.slice(p, q);
        var i = sub.indexOf(s[q]);
        if (i !== -1) {
            p = p + i + 1;
        }
        q++;
        result = q - p > result ? q - p : result;
    }
    return result;
};
