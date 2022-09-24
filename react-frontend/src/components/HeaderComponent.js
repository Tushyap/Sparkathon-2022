import React, { Component } from 'react'
import logo from './logo2.png'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar">
                    <div>
                        <img src={logo} style={{borderRadius:"40%",width:"40px", height:"40px", margin:"12px"}} alt="logo" />
                        <a href="https://www.globallogic.com/in/" className="navbar-title">Employee Management App</a>
                    </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
