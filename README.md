﻿# Vacuum-algo

## Project setup
```
npm install
```
### Compiles and hot-reloads
```
npm run serve
```

### index.ts

For testing the script, an instance created using the class Vacuum whish takes two arguments, the first is an array represent the grid dimension, the second is an array repesent the initial position of the vacuum cleaner. For executing the Instructions, the method 'executeInstructions' takes as argument a string of instructions and communicate the results (final position) by appending them in index.html

```
import Vacuum from './vacuum'

(() => {
  const vacuum1:Vacuum = new Vacuum([10, 10], [5, 5, 'N'])
  vacuum1.executeInstructions('DADADADAA')
})()

```
