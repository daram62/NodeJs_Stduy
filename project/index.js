const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine','ejs')
app.engine('html',require('ejs').renderFile)

app.get('/',(req,res) => {
    res.render(__dirname+'/test.ejs', {
        'data1' : 'hello',
        'data2' : 'I am ejs'
    })

})

app.get('/get/page',(req,res) => {
    res.render(__dirname+'/get.html')

})
app.listen(3000, _ => {
    console.log(`Listening on port ${PORT}`)
})
