const {readFile,writeFile} = require ('fs')

// readFile('./content/first.txt','utf-8',(err,result)=>{

//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(result)
    //if weant to read another file then again
    //looking like a callback hell in making
    /*
    readFile('./content/second.txt','utf-8',(err,result)=>{

    if(err){
        console.log(err)
        return;
    }
    console.log(result)

})
    */

// })
readFile('./content/first.txt','utf-8',(err,result)=>{

    if(err){
        console.log(err)
        return;
    }
    console.log(result)

})