const consonantCount = require('../src/index.js');

test('should return 2 if the string is hello', () => {
    const str = 'hello' 
    expect(consonantCount(str)).toBe(3)
 })
 test('should return the string if the parameter exists', () => {
    const str = 'apple'
    expect(consonantCount(str)).toBe(3)
 })
 test('should return 0 if string dont contain a consonat', () => {
    const str = 'aeiou'
    expect(consonantCount(str)).toBe(0)
 })

 test('should return 0 when string is empty', () => {
    const str = ''
    expect(consonantCount(str)).toBe(0)
 })
 test('should return 2 if string is car', () => {
    const str = 'car'
    expect(consonantCount(str)).toBe(2)
 })
 test('should return 2 if string is car', () => {
   const str = 'car'
   expect(consonantCount(str)).toBe(2)
})
test('should return 2 if string is car', () => {
   const str = 'CAR'
   expect(consonantCount(str)).toBe(2)
})
test('should return 0 if str is diferent of string', () => {
  const str = 2131131
  expect(consonantCount(str)).toBe(0)
})
test('should return 0 if string is a number', () => {
   const str = "2131131" 
   expect(consonantCount(str)).toBe(0)
 })
 test('should return 0 if str contais special charaters', () => {
   const str = "2131131_"
   expect(consonantCount(str)).toBe(0)
 })