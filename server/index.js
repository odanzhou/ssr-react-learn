import React from 'react'
import { renderToString } from 'react-dom/server'
import APP from '../src'
import app from './app'
import { fetchData } from '../mock'

app.get('/', async (req, res) => {
  const data = await fetchData(); // 获取数据
  const APPString = renderToString(<APP defaultToDoList={data} />)
  // <div id="root">${APPString}</div> 这段注入代码要紧凑，换行会提示错误
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
      <div id="root">${APPString}</div>
      <!--注水-->
      <script>window.data=${JSON.stringify(data)}</script>
      <script src="/index.js"></script>
    </body>
  </html>
  `)
})