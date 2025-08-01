import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('');
    const passRef = useRef("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        const pass = emailRef.current.value;

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" ref={emailRef} placeholder='Enter your Name' /> <br />
                <input type="email" ref={passRef} placeholder='Enter your Email Address' /> <br />
                <input type="submit" text="submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;