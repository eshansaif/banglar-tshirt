import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <div>This is Home</div>
            <div>Total Tshirts: {data.length}</div>
        </div>
    );
};

export default Home;