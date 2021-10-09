const eventEmitter = require('events')
const customEmitter = new eventEmitter()

customEmitter.on('response',()=>{
    console.log('data reccieved')
})

customEmitter.emit('response')
console.log('******************')
customEmitter.on('response1',(str1,str2)=>{
    console.log('data reccieved '+`${str1+' '+str2}`)
    const arr= [...arguments]
    console.log(arr[0])
})

customEmitter.emit('response1','hare','rama')