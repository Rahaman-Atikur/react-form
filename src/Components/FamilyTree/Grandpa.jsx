import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunty from './Aunty';
import './FamilyTree.css'

const Grandpa = () => {
    return (
        <div className='family-tree flex'>
            <h2>Grandpa</h2>
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
        </div>
    );
};

export default Grandpa;