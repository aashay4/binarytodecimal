const BigNumber = require('bignumber.js');
module.exports.decimal = decimal =>
{
input = decimal;
var output;
//const b2t = require('b2tconverter')
var x = new BigNumber(input, 2)
const y = x.c;
var z = parseInt(y);
return z;
}
