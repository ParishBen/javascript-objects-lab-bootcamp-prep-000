var recipes= {prop: 1, prop2: 2}
function updateObjectWithKeyAndValue(object, prop2, value){
  Object.assign({}, recipes, { ['prop2']: '2' })
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, prop2, value){
  recipes[prop2=2]
  return recipes
}