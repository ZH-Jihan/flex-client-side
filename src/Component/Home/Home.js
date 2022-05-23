import React from 'react';
import Banar from './Banar';
import Carosol from './Carosol';
import Info from './Info';
import Prosucts from './Prosucts';

const Home = () => {
    return (
        <div>
            <Carosol></Carosol>
            <Prosucts></Prosucts>
            <Banar></Banar>
            <Info></Info>
        </div>
    );
};

export default Home;