import React from 'react';
import CompanyInfo from '../Pages/CompanyInfo';
import Summary from '../Pages/Summary';
import Carosol from './Carosol';
import Prosucts from './Prosucts';
import Warinty from './Warinty';

const Home = () => {
    return (
        <div>
            <Carosol></Carosol>
            <Prosucts></Prosucts>
            <CompanyInfo></CompanyInfo>
            <Summary></Summary>
            <Warinty></Warinty>
        </div>
    );
};

export default Home;