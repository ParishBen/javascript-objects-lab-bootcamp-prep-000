var recipes= {prop:1, prop2:2}
function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, recipes, { [key]: value })
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes[key=value]
return recipes
}
