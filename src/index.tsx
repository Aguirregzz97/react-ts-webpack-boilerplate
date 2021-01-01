import * as React from 'react'
import { render } from 'react-dom'

import App from './App'
import ContextsProvider from './contexts/ContextsProvider'
import reportWebVitals from "./reportWebVitals"

render((
    <React.StrictMode>
        <ContextsProvider>
            <App />
        </ContextsProvider>
    </React.StrictMode>
), document.getElementById('root'))

reportWebVitals()
