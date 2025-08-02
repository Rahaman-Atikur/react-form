import React, { useState } from 'react';
const ControlledField = () => {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleName = (e)=>{
        setName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form Submitted");
        setPassword(e.target.value);
        if (password.length < 6) {
            setError("Password should be 6 Character");
        }
        else {
            setError("");
        }
        console.log(email, password);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordOnChange = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleName} defaultValue={name} />
                <input type="text" />
                <input type="text" onChange={handleEmailChange} defaultValue={email} name='name' placeholder='name' required /> <br />
                <input type="text" name='password' onChange={handlePasswordOnChange} placeholder='password' required /><br />
                <input type="Submit" name='submit' />
            </form>
            <p>{error}</p>
        </div>
    );
};
export default ControlledField;