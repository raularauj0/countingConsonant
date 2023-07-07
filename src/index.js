function consonantCount(str) {
 
   if (typeof(str) !== "string"){
      return 0
   }
   if (!isNaN(str)){
      return 0
   }
  let newStr = str.toLowerCase().replaceAll('a','');
   newStr = newStr.replaceAll('e','');
   newStr = newStr.replaceAll('i','');
   newStr = newStr.replaceAll('o','');
   newStr = newStr.replaceAll('u','');
   
   newStr = newStr.replaceAll('_',''),
   newStr = newStr.replaceAll('^',''),
   newStr = newStr.replaceAll('&',''),
   newStr = newStr.replaceAll('$',''),
   newStr = newStr.replaceAll('#','')

 return newStr.length
}

  module.exports = consonantCount