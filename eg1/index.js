const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');
const fs = require('fs');

function downLoad(imgUrl){
    console.log(`imgUrl: ${imgUrl}`);
    //let ext = imgUrl.split('.').pop();
    var options = {
        uri: imgUrl,
        headers: {
          'Referer': 'http://www.baidu.com'
        }
  };
    request(options).pipe(fs.createWriteStream(path.join(config.imgDir,imgUrl.split('/').pop()),{
        'encoding':'utf8'
    }))
    //console.log(i);
}

function strat(){
    for(i=1;i<=43;i++){
        console.log(`url: ${config.url+'/'+i}`);
        request(config.url+'/'+i, function(err, res, body){
            console.log('start');
            if (!err && res) {
                console.log('calling findImg');
                analyze.findImg(body, i, downLoad);
            }
        });
    }
}

strat();