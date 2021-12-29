import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {RecoilRoot} from 'recoil';

// import RecoilizeDebugger from 'recoilize';


ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            {/* <RecoilizeDebugger /> */}
            <App />
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
)
