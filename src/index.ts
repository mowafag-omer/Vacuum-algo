import Vacuum from './vacuum'


/* vacuum1 is an instance of the class Vacuum, 
it takes arguments two arrays, the dimensions [x, y] 
initial position [x, y, orientation]  */

/* vacuum1.executeInstructions takes the Instructions as argument, executes them 
and communicate the results by appending them in index.html */

(() => {
  const vacuum1: Vacuum = new Vacuum([10, 10], [5, 5, 'N'])
  vacuum1.executeInstructions('DADADADAA')
})()

