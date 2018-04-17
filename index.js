var recipes= {prop: 1}
function updateObjectWithKeyAndValue(object, key2, value2){
  Object.assign({}, recipes, { ['key2']: 'value2' })
  return recipes
}
