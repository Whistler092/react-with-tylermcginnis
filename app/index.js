import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Component 
// State
// LifeCycle
// UI

class App extends React.Component {
    render(){
        return (
            <div>
                Hola Mundo!!
            </div>
        )
    }
}

ReactDOM.render(
    <App /> , document.getElementById('app')
)