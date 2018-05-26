module.exports = function jsonDeepClone(source){
  var copy = {}
  if(typeof(source)=="object" && !Array.isArray(source)){
    Object.keys(source).forEach(function(key){
        if(typeof(source[key])=="object"){
            if(!Array.isArray(source[key])){
              copy[key] = jsonDeepClone(source[key])
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
