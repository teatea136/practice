fetch('https://opentdb.com/api.php?amount=10&category=23&type=multiple')

const decodeHtmlCharCodes = str => 
str.replace(/(&#(\d+);)/g, (match, capture, charCode) => 
String.fromCharCode(charCode))