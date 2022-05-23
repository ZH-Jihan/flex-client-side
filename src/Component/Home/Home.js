import React from 'react';
import Summary from '../Pages/Summary';
import Banar from './Banar';
import Carosol from './Carosol';
import Info from './Info';
import Prosucts from './Prosucts';

const Home = () => {
    return (
        <div>
            <Carosol></Carosol>
            <Prosucts></Prosucts>
            <Summary></Summary>
            <Banar></Banar>
            <Info></Info>
        </div>
    );
};

export default Home;