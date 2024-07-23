import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from "@/state/api"

// setting up reducer store and listener
export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware)
})
setupListeners(store.dispatch)

ReactDOM.createRoot(document.getElementById('root')!).render(
  // wrapping our app with the provider and sending our store to the app
  <Provider store={store}>
    <App />
  </Provider>
)
