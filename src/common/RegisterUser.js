import React, { useState } from "react";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import './RegisterUser.css';
import Button from "@material-ui/core/Button";


const RegisterUser = function (params) {

    const [user, setUser] = useState(
        {
            "email_address": "",
            "first_name": "",
            "last_name": "",
            "mobile_number": "",
            "password": ""
        }
    )

    const{email, fName, lName,mobileNumber,password} = user;

    function inputChangedHandler(e){
        const state = user;
        state[e.target.name] = e.target.value;
        setUser({...state});
    }


    return (
        <div>
            
            <ValidatorForm className="registerForm" >
                <TextValidator
                    id="first_name"
                    label="First Name*"
                    type="text"
                    name="first_name"
                    onChange={inputChangedHandler}
                    value={fName}
                    validators={['required']}
                    errorMessages={['required']}
                />
                <br /><br />
                <TextValidator
                    id="last_name"
                    label="Last Name*"
                    type="text"
                    name="last_name"
                    onChange={inputChangedHandler}
                    value={lName}
                    validators={['required']}
                    errorMessages={['required']}
                />
                <br /><br />
                <TextValidator
                    id="email_address"
                    label="Email*"
                    type="text"
                    name="email_address"
                    onChange={inputChangedHandler}
                    value={email}
                    validators={['required']}
                    errorMessages={['required']}
                />
                <br /><br />
                <TextValidator
                    id="password"
                    label="Password*"
                    type="password"
                    name="password"
                    onChange={inputChangedHandler}
                    value={password}
                    validators={['required']}
                    errorMessages={['required']}
                />
                <br /><br />
                <TextValidator
                    id="mobile_number"
                    label="Contact No.*"
                    type="number"
                    name="text"
                    onChange={inputChangedHandler}
                    value={mobileNumber}
                    validators={['required']}
                    errorMessages={['required']}
                />
                <br /><br />
                <Button type="submit" variant="contained" color="default" size="small">
                    REGISTER
                </Button>
            </ValidatorForm>
        </div>
    )

}

export default RegisterUser;

