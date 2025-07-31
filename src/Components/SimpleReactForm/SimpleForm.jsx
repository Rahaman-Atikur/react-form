import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log("Form Submitted");
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="name" name='name' placeholder='Enter Your Name' />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;