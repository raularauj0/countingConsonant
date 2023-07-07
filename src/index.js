function consonantCount(str) {
   
  let newStr = str.replaceAll('a','');
   newStr = newStr.replaceAll('e','');
   newStr = newStr.replaceAll('i','');
   newStr = newStr.replaceAll('o','');
   newStr = newStr.replaceAll('u','');
   
 return newStr.length
}

  module.exports = consonantCount