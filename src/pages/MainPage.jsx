import { Button } from 'react-bootstrap';
import React from 'react';
import CustomTable from '../components/CustomTable';
import { Link } from 'react-router-dom';

const MainPage = () => {

    return (
        <div>
            <h1>
                MAIN PAGE
            </h1>
            <Link to="/add">
                <Button> добавить</Button>
            </Link>
            <CustomTable />
        </div>
    );
};

export default MainPage;