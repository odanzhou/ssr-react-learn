import express from 'express'
const app = express()

const PORT = 3000

app.listen(PORT, () => console.log(`listening on ${PORT}`))

app.use(express.static('public'))

export default app
