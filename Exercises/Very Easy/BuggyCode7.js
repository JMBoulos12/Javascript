/*
  Mubashir wants to swap two given numbers!
  It is not returning the right values. Can you help him fix it?
  a = 100
  b = 200
  a, b = swap(a, b)
  print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
  
  Examples  :
  swap(100, 200) ➞ [200, 100]
  swap(44, 33) ➞ [33, 44]
  swap(21, 12) ➞ [12, 21]
  
  20-January-2023
*/

//First Method
function swap(a, b){
  t = a // Store value of `a` in a temporary variable `t`
	a = b // Store value of `b` in `a`
	b = t // Store value of `t` in `b`
	return [a, b]
}
/* Second Method
function swap(a, b){
	return [b, a]
}
*/
