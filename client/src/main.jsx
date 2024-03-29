import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'

import reducers from './reducers'

import { GOOGLE_CLIENT_ID } from '../config.js'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Provider store={store}>
            <App />
        </Provider>,
    </GoogleOAuthProvider>
)