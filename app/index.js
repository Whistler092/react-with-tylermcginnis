import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Battle from './components/Battle';
import Popular from './components/Popular';
/* import Popular from './components/Popular'; */

// Component 
// State
// LifeCycle
// UI

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <Popular />  
                {/* <Battle></Battle>  */}
            </div>
        )
    }
}

ReactDOM.render( 
    <App /> , document.getElementById('app')
)