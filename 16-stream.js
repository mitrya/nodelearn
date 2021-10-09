const {createReadStream}=require('fs');

const stream =createReadStream('./content/big.txt',{
    highWaterMark:9000,
    encoding:'utf8'
})
/*
*
default 64kb
last buffer -remainder
highwaterMark-control Size

*/
stream.on('data',(result)=>{
    console.log(result)
})