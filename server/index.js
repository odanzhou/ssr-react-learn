import React from 'react'
import { renderToString } from 'react-dom/server'
import ToDoItem from '../src'
import app from './app'

app.get('/', (req, res) => {
  const toDoItemString = renderToString(<ToDoItem />)
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root">
        ${toDoItemString}
      </div>
      
    </body>
  </html>
  `)
})