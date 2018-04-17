var recipes= {prop: 1, prop2:2}
function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, recipes, { [prop2]: 2 })
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes[prop2= 2]
return recipes
}
