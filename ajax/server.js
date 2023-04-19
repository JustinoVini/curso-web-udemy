const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, res, callback) {
        callback(null, './upload')
    },
    filename: function (req, res, callback) {
        callback(null, `${Date.now()}_${file.originalName}`)
    }
})

const upload = multer ({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }
        
        res.end('Concluido com sucesso!')
    })
})

app.listen(8080, () => console.log('executando!'))
