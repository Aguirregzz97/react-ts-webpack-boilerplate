import * as React from 'react'

import ReactRouter from './ReactRouter'


const ContextsProvider: React.FC = ({children}) => {
    return (
        <ReactRouter>
            {children}
        </ReactRouter>
    )
}

export default ContextsProvider
