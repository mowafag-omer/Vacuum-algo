interface Ivacuum {
  Xgrid: number
  Ygrid: number
  x: number
  y: number
  orientation: string
  toRight(): void
  toLeft(): void
  executeInstructions(x:string): void
}

export default class Vacuum implements Ivacuum {
  Xgrid: number
  Ygrid: number
  x: number
  y: number
  orientation: string

  constructor(dimension: number[], Initialposition: [number, number, string]) {
    this.Xgrid = dimension[0]   
    this.Ygrid = dimension[1]   
    this.x = Initialposition[0],
    this.y= Initialposition[1]
    this.orientation = Initialposition[2].toUpperCase()
  }

  toRight(){
    switch(this.orientation){
      case 'N':
        this.orientation = 'E'
        break
      case 'E':
        this.orientation = 'S'
        break
      case 'S':
        this.orientation = 'W'
        break
      case 'W':
        this.orientation = 'N'
        break
      default: 
      throw new Error(`"${this.orientation}" isn't a valide direction`)  
    }
  }
  
  toLeft(){
    switch(this.orientation){
      case 'N':
        this.orientation = 'W'
        break
      case 'W':
        this.orientation = 'S'
        break
      case 'S':
        this.orientation = 'E'
        break
      case 'E':
        this.orientation = 'N'
        break
      default: 
      throw new Error(`Orientation invalide`)  
    }
  }

  forward(){
    switch(this.orientation){
      case 'N':
        this.y < this.Ygrid && this.y++ 
        break
      case 'S':
        this.y > 0 && this.y-- 
        break
      case 'E':
        this.x < this.Xgrid && this.x++ 
        break
      case 'W':
        this.x > 0 && this.x--
        break
      default: 
      throw new Error(`Orientation invalide`)  
    }
  }

  executeInstructions(instructions:string){
    [...instructions.toUpperCase()].forEach(i => {
      switch(i){
        case 'D':
          this.toRight()
          break
        case 'G':
          this.toLeft()
          break
        case 'A':
          this.forward()
          break
        default: 
        throw new Error(`"${i}" n'est pas une instruction valide`)  
      }
    })

    console.log(`x=${this.x} y=${this.y} orientation=${this.orientation}`)
    
    document.querySelector('body')!.innerHTML = `<h3>x=${this.x} y=${this.y} orientation=${this.orientation}</h3>`
  }
}