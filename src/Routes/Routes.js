import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Test from '../Pages/Test';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }, 
            {
                path:'/test',
                element:<Test></Test>
            }, {
                path:'/products',
                element:<Products></Products>
            }
        ]
    }
])