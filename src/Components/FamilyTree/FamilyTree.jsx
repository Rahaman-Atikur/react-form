import React, { createContext } from 'react';
import Grandpa from './Grandpa';

const FamilyTree = () => {
    const power = '60000 GBP';
    const morePower = '80000 GBP';
    export const AssestsContext = createContext('');
    return (
        <div>
            <h2>Family Tree</h2>
            <AssestsContext.Provider value={morePower }>
                <Grandpa power={power} ></Grandpa>
            </AssestsContext.Provider>

        </div>
    );
};

export default FamilyTree;