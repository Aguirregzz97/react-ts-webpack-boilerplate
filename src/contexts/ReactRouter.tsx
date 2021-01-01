import * as React from 'react'
import { HashRouter as Router } from 'react-router-dom'

const ReactRouter: React.FC = ({children}) => {
    return (
        <Router>
            {children}
        </Router>
    )
}

export default ReactRouter
