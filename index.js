var jsonDeepClone = function (source){
  var copy = {}
  if(typeof(source)=="object" && !Array.isArray(source)){
    Object.keys(source).forEach(function(key){
        if(typeof(source[key])=="object"){
            if(!Array.isArray(source[key])){
              copy[key] = deepClone(source[key])
            }
            else{
              copy[key] = source[key].map(function(a){return a})
            }
        }
        else{
             copy[key] = source[key]
        }
        
    })  
  }
  return copy
}
module.exports = jsonDeepClone