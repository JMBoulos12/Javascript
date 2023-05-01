



/**
  #Instructions
  Create a custom set type.

  Sometimes it is necessary to define a custom data structure of some type, like a set. 
  In this exercise you will define your own set. 
  How it works internally doesn't matter, as long as it behaves like a set of unique elements. 
   
  01-May-2023
*/


export class CustomSet extends Set {
	contains = this.has;
	empty = () => !this.size;
	eql = s => this.size == s.size && this.subset(s);
	union = s => new CustomSet([...this, ...s]);
	filter = f => new CustomSet([...this].filter(f));
	intersection = s => this.filter(x => s.has(x));
	difference = s => this.filter(x => !s.has(x));
	subset = s => this.difference(s).empty();
	disjoint = s => this.intersection(s).empty();
}
