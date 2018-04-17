var recipes= {prop:1}
function updateObjectWithKeyAndValue(object, prop2, 2){
  Object.assign({}, recipes, { [prop2]: 2 })
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, prop2, 2){
  recipes[prop2=2]
return recipes
}
