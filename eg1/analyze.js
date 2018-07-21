const cheerio = require('cheerio');
const request = require('request');
const config = require('./config');

function findImg(dom,count,callback){
    let $ = cheerio.load(dom);
    // var maxNum = $("#page a").eq(-2).text();
    // console.log(`maxNum: ${maxNum}`);
    var imgBaseUrl = $("#content img").attr("src").toString();
    callback(imgBaseUrl);
    // for(var i = 1;i <= maxNum;i++){
    //     callback(imgBaseUrl,i.toString);
    // }
}

module.exports.findImg = findImg;