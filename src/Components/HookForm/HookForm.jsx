import React from 'react';

const HookForm = () => {
    const handleSubmit = ()=>{
        e.preventDefault();
        console.log("Submit");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                

            </form>
        </div>
    );
};

export default HookForm;