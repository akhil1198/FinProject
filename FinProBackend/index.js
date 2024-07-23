import express from 'express'
import bodyParser from 'body-parser'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import kpiRoutes from './routes/kpi.js'
import productRoutes from './routes/product.js'
import transactionRoutes from './routes/transaction.js'
import KPI from './models/KPI.js'
import Product from './models/Product.js'
import Transaction from './models/Transaction.js'
import { kpis, products, transactions } from './data/data.js'

// configs
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// routes
app.use('/kpi', kpiRoutes)
app.use('/product', productRoutes)
app.use('/transaction', transactionRoutes)

// mongoose setup
const PORT = process.env.PORT || 9000
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(async () => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

        // add data one time only
        // await mongoose.connection.db.dropDatabase()
        // KPI.insertMany(kpis)
        // Product.insertMany(products)
        // Transaction.insertMany(transactions)

    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });
