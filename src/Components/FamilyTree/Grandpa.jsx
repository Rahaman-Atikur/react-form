import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunty from './Aunty';
import './FamilyTree.css'

const Grandpa = () => {
   
    return (
        <div >
            <h2>Grandpa</h2>
            <div className='family-tree flex'>
                <Dad power={power}></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </div>


        </div>
    );
};

export default Grandpa;