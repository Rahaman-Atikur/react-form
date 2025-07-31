import React from 'react';
const FormData = () => {
    const handleSubmit = (FormData) => {
        // console.log(FormData);
        console.log(FormData.get('name'));
        console.log(FormData.get('email'));

    }
    return (
        <div>
            <form action={handleSubmit} >
                <input type="text" name='name' placeholder='Enter Name' />
                <br />
                <input type="text" name='email' placeholder='Enter Email' />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};
export default FormData;