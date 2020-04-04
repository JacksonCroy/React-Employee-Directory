import React from "react"
import "./styles.css";

function EmployeeSearch(props) {

    return (
        <div className="container-fluid">
            <header className=" col" >
                <div className="row">
                    <div className="col ">

                        <h3 className="header">Employee Directory</h3>

                    </div>
                    <div className="col s6 ">

                        <div className="col s6 input right-align ">

                            <input
                                onChange={props.handleInputChange}
                                value={props.value}
                                id="employees"
                                type="text"
                                name="search"
                                list="employee"
                                className=" inputBox  "
                                placeholder="Search by name" />
                        </div>
                        
                    </div>
                </div>
            </header>
        </div >
    )
}

export default EmployeeSearch