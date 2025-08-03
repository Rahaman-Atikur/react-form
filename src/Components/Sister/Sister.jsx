import React, { useContext } from 'react';
import { AssestsContext } from '../FamilyTree/FamilyTree';
const Sister = ({power,new}) => {
    const morePower = useContext(AssestsContext);
    console.log('More Power',morePower);
    return (
        <div>
            <h2>Sister</h2>
            <h1>{power}</h1>
            <h1>{morePower}</h1>
        </div>
    );
};
export default Sister;