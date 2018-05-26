# jsondeepclone
Deep clones a javascript object
```javascript
var jsonDeepClone = require('jsondeepclone')
var data = {
  "a":1,
  "b":2,
  "c":{
    "d":1,
    "g":{
      "h":1
    }
  },
  "e":[1,2,3],
  "f":new Date()
}


var b = jsonDeepClone(data)
console.log(b)

```