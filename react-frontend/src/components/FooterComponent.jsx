import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className="text-center text-white fixed-bottom" style={{backgroundColor: "black"}}>
                    <div className='container p-2'></div>
                    <div className="text-center p-2">All Rights Reserved 2022 Sparkathon GL-Sparks-58</div>
                    <div className='team'>
                        <div>Team Members:</div>
                        <ul><li>Tushyap Bari</li>
                        <li>Shubham Suthar</li>
                        <li>Ashutosh</li>
                        <li>Syed Aziz</li>
                        <li>Shivam Kumar Singh</li></ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
