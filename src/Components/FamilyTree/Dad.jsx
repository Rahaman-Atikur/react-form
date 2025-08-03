import React from 'react';
import Muself from './Muself';
import Brother from './Brother';
import Sister from '../Sister/Sister';
import './FamilyTree.css'

const Dad = ({power}) => {
    return (

        <div >
            <div className='family-tree'>
                <h2>Dad</h2>
                <Muself></Muself>
                <Brother></Brother>
                <Sister power={power}></Sister>
            </div>


        </div>
    );
};

export default Dad;