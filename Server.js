const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const eventRouter = require('./Routes/Event')
const appRouter = require('./Routes/EventApplication')
const newsRouter = require('./Routes/News')


const app = express()
require('dotenv').config()

app.use(express.json())
ConnectDB()

app.use('/api/users', userRouter)
app.use('/api/events', eventRouter)
app.use('/api/applications', appRouter)
app.use('/api/news', newsRouter)







app.listen(process.env.port , console.log(`server is running on the port ${process.env.port}`))

