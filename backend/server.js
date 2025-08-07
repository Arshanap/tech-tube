import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()


const app = express()
const port = process.env.PORT || 3020
connectDB();

app.get('/', (req, res) => (res.send('server is ready')))


app.listen(port, ()=>{
    console.log('#########################')
    console.log(`http://localhost${port}`)
    console.log('#########################')
});