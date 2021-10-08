const os =require('os')

//info about current user
const user=os.userInfo();
console.log(user)
console.log(`the system uptime is ${os.uptime}`)
const cuurentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:`${os.totalmem()/Math.pow(2,30)}`,
    freemem:`${os.freemem()/Math.pow(2,30)}`
}
console.log(cuurentOS)