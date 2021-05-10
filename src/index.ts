import Vacuum from './vacuum'

(() => {
  const vacuum1:Vacuum = new Vacuum([10, 10], [5, 5, 'N'])
  vacuum1.executeInstructions('DADADADAAD')
})()

