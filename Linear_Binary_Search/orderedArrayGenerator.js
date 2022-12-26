function orderedArrayGenerator(x, y) {
  const orderedArray = [];

  let smallNum, bigNum;
  if (x > y) {
    smallNum = y;
    bigNum = x;
  } else {
    smallNum = x;
    bigNum = y;
  }

  for (let i = smallNum; i <= bigNum; i++) {
    orderedArray.push(i);
  }
  return orderedArray;
}

export default orderedArrayGenerator;
