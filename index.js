var recipes= {prop: 1}
function updateObjectWithKeyAndValue(object, prop2, value){
  Object.assign({}, recipes, { ['prop2']: 2 })
  return recipes
}
