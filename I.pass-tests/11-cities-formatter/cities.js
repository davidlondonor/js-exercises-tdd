function cities(citys) {
  const newArr = [];
  citys.forEach(element =>
    newArr.push(`${element.city} is the capital of ${element.country}`)
  );
  return newArr;
}

module.exports = cities;
