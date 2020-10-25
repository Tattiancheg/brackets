module.exports = function check(str, bracketsConfig) {
if (str.length % 2 !== 0)  return false;

var arr = [];
for (var i = 0; i < str.length; i++) {
  for (var j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
          if (arr[arr.length - 1] !== bracketsConfig[j][0]) {
            arr.push(str[i]);
          } else {
            arr.pop();
          }   
      } else {
          if (str[i] === bracketsConfig[j][0]) {
            arr.push(str[i]);
          } else if (str[i] === bracketsConfig[j][1] && arr[arr.length - 1] === bracketsConfig[j][0]) {
            arr.pop();
          } else if (str[i] === bracketsConfig[j][1] && arr[arr.length - 1] !== bracketsConfig[j][0]) {
            arr.push(str[i]);
          }
      }
    }
}
if (arr.length) {
  return false
}
return true;
}

