function randomArrayGenerator(x, y) {
  const numbers = [];
  const randomArr = [];

  let difference, smallNum, bigNum;
  if (x > y) {
    difference = x - y;
    smallNum = y;
    bigNum = x;
  } else {
    difference = y - x;
    smallNum = x;
    bigNum = y;
  }

  for (let i = smallNum; i <= bigNum; i++) {
    numbers.push(i);
  }

  for (let n = 0; n <= difference; n++) {
    const index = Math.floor(Math.random() * numbers.length); // 0 ~ 8까지의 인덱스 번호
    randomArr.push(numbers[index]);
    numbers.splice(index, 1);
  }
  return randomArr;
}

export default randomArrayGenerator;
