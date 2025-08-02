import React from 'react';
import useInputField from '../../Hooks/useInputField';
const HookForm = () => {
    const [name, nameOnChange] = useInputField("");
    const [email, emailOnChange] = useInputField("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit", name, email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange} />
                <br />
                <input type="submit" value="submit" />
                <br />
                <input type="email" onChange={emailOnChange} defaultValue={email}
                />
            </form>
        </div>
    );
};
export default HookForm;