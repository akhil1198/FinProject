# FinPro - Financial Analytics Dashboard

A comprehensive full-stack financial analytics platform built with the MERN stack (MongoDB, Express, React, Node.js) to visualize and analyze key financial metrics, KPIs, and business data.

![FinPro Dashboard]([https://raw.githubusercontent.com/username/FinPro/main/screenshot.png](https://github.com/akhil1198/FinProject/blob/main/ss.png))

## 📊 Features

- **Interactive Dashboard**: Responsive layout with detailed financial visualizations
- **Financial Analytics**: Track revenue, expenses, profit margins, and operational costs
- **Data Visualization**: Rich, interactive charts and graphs using Recharts
- **Product & Transaction Management**: View product performance and transaction history
- **RESTful API**: Robust backend API for financial data retrieval
- **Responsive Design**: Optimized for desktop and mobile devices

## 🚀 Tech Stack

### Frontend
- **React**: ^18.3.1
- **TypeScript**: ^5.2.2
- **Redux**: @reduxjs/toolkit ^2.2.6
- **Material UI**: ^5.16.1
- **Recharts**: ^2.12.7
- **React Router**: ^6.24.1
- **Vite**: ^5.3.1

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **mongoose-currency**: For handling monetary values
- **Helmet**: Security middleware
- **CORS**: Cross-Origin Resource Sharing middleware
- **dotenv**: Environment variable management
- **Morgan**: HTTP request logger

## 🏗️ Architecture

### Frontend
The frontend follows a modular architecture with:
- Grid-based responsive dashboard layout
- Redux state management with RTK Query for API integration
- Material UI components with custom theming
- Recharts for data visualization

### Backend
The backend provides a RESTful API with:
- Three primary data models: KPIs, Products, and Transactions
- Express routes for data retrieval
- MongoDB integration with Mongoose
- Security middleware implementation

### Data Flow
1. Financial data is stored in MongoDB
2. Express API endpoints expose this data
3. Frontend fetches data using RTK Query
4. Data is visualized through various chart components

## 📝 Data Models

### KPI (Key Performance Indicators)
Stores financial metrics including:
- Total profit, revenue, and expenses
- Monthly data (revenue, expenses, operational and non-operational expenses)
- Daily data (date, revenue, expenses)
- Expenses by category

### Product
Stores product information:
- Price
- Expense (cost)
- Associated transactions

### Transaction
Stores transaction details:
- Buyer information
- Transaction amount
- Associated product references

