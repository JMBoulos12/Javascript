



/**
  #Instructions
  Given a diagram, determine which plants each child in the kindergarten class is responsible for.

  The kindergarten class is learning about growing plants. The teacher thought it would be a good idea to give them actual seeds, 
  plant them in actual dirt, and grow actual plants.

  They've chosen to grow grass, clover, radishes, and violets.

  To this end, the children have put little cups along the window sills, and planted one type of plant in each cup, 
  choosing randomly from the available types of seeds.

  [window][window][window]
  ........................ # each dot represents a cup
  ........................
  
  There are 12 children in the class:

  * Alice, Bob, Charlie, David,
  * Eve, Fred, Ginny, Harriet,
  * Ileana, Joseph, Kincaid, and Larry.
  
  Each child gets 4 cups, two on each row. Their teacher assigns cups to the children alphabetically by their names.

  The following diagram represents Alice's plants:

  [window][window][window]
  VR......................
  RG......................
  
  In the first row, nearest the windows, she has a violet and a radish. In the second row she has a radish and some grass.

  Your program will be given the plants from left-to-right starting with the row nearest the windows. From this, it should be able to determine which plants belong to each student.

  For example, if it's told that the garden looks like so:

  [window][window][window]
  VRCGVVRVCGGCCGVRGCVCGCGV
  VRCCCGCRRGVCGCRVVCVGCGCV
  
  Then if asked for Alice's plants, it should provide:
  * Violets, radishes, violets, radishes
  
  While asking for Bob's plants would yield:
  * Clover, grass, clover, clover
  
  04-May-2023
*/


const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];
const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};
export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
      this.diagram = diagram.split('\n');
      this.students = students.sort()
  }
  plants(student) {
      let len = this.students.length;
      
      let STUDENTS_PLANTS = [...Array(len)].map(x => [])
      
      this.diagram.map(array => {
          let count = 0;
          for(let i = 1; i <= array.length; i++){
              if(i % 2 == 0){
                  STUDENTS_PLANTS[count].push(PLANT_CODES[array[i-2]])
                  STUDENTS_PLANTS[count].push(PLANT_CODES[array[i-1]])
                  count++
              }
          }
      })
      return STUDENTS_PLANTS[this.students.indexOf(student)]
  }
}
