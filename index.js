var recipes= {prop: 1}
function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, recipes, { [key]: 'value' })
  return recipes
}
