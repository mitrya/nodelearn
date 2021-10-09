const { appendFile } = require('fs')
const _ =require ('lodash')
const items =[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems.join(' ')+" ->items")

/*
"dev" : 'nodemon app.js'
we need  npm run dev


npm uninstall bootstrap

or nuclear approach
delete node modules
delete package-lock
remove bootstrap from package.json
run npm install

npm install -g nodemon
*/