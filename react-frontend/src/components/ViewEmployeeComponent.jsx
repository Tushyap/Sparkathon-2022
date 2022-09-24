import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "col-md-6 offset-md-3 form-container">
                    <h3 className = "text-center" style={{fontWeight:
            "bold", color:"#4E4C97"}}> View Employee Details</h3>
                    <div className = "card-body  align-items-center d-flex justify-content-center">
                        <div className="card-text">
                        <div className = "row">
                            <label> First Name : </label>
                            <div>{ this.state.employee.firstName }</div>
                        </div>
                        
                        <div className = "row">
                            <label> Last Name : </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Email ID : </label>
                            <div>{ this.state.employee.emailId }</div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
