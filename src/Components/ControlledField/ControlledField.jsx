import React, { useState } from 'react';
const ControlledField = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
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
        console.log(e.target.value);
    }
    const handlePasswordOnChange = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='name' required /> <br />
                <input type="text" name='password' onChange={handlePasswordOnChange} placeholder='password' required /><br />
                <input type="Submit" name='submit' />
            </form>
            <p>{error}</p>
        </div>
    );
};
export default ControlledField;