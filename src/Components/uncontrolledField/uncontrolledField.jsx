import React from 'react';

const uncontrolledField = () => {
    return (
        <div>
            <form action="">
                <input type="text" placeholder='Enter your Name' />
                <input type="email" placeholder='Enter your Email Address' />
                <input type="submit" text="submit" />
            </form>
        </div>
    );
};

export default uncontrolledField;