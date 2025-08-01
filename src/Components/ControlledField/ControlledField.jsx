import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form Submitted");
        console.log(e.target.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='name' required /> <br />
                <input type="text" name='password' onChange={handleSubmit} defaultValue={password} placeholder='password' required /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ControlledField;