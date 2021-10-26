const jsonfile = require('jsonfile')
const moment = require('moment')
const FILE_PATH = './data.json'
let simpleGit  =require('simple-git')
const random = require('random')

const makeCommit  =(n)=>{
  if(n == 0){
    simpleGit().push()
    return
  }
    
  const x = random.int(0,54)
  const y = random.int(0,6)
  const DATE = moment().subtract(2, 'y').subtract(13, 'd').add(x, 'w').add(y, 'd').format()
  const data  = {
    data:DATE
  }
  console.log(data, n)
  jsonfile.writeFile(FILE_PATH, data, ()=>{
    simpleGit().add(FILE_PATH).commit(DATE, {'--date': DATE}, makeCommit.bind(this, n-1))
  })
}



makeCommit(600)