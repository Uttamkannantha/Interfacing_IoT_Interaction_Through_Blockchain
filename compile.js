const path  = require('path');
const fs = require('fs');
const solc = require('solc');

const lotterypath = path.resolve(__dirname,'contracts','iot.sol');
const source = fs.readFileSync(lotterypath,'utf8');

module.exports = solc.compile(source,1).contracts[':iot'];
