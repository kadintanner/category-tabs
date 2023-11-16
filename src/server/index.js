import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'

const app = express()


app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json()) 

import handlerFunctions from './controller.js'

// CATEGORY TABS
app.get('/categories', handlerFunctions.getCategories)
app.post('/addCategory', handlerFunctions.addCategory)
app.delete('/deleteCategory/:id', handlerFunctions.deleteCategory)
app.put('/editCategory/:id', handlerFunctions.editCategory)


ViteExpress.listen(app, 5173, () => console.log('bienvenidos a http://localhost:5173'))