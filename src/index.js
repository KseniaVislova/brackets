module.exports = function check(str, bracketsConfig) {
  let acc = 0;
  let brackets = {};
  bracketsConfig.forEach(item => brackets[item[0]] = item[1]);
  let arr = [];

  for (let i = 0; i < str.length; i += 1) {
    acc = str[i] === arr[arr.length - 1] ? acc - 1 : acc + 1;
    str[i] === arr[arr.length - 1] ? arr.pop() : arr.push(brackets[str[i]]);
  }
  
  console.log(arr)
  
  return acc === 0;
};
