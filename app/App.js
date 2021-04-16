import React from 'react';
import Navigation from './componenets/Navigation/Navigation.jsx'
import  {BrowserRouter} from 'react-router-dom'
export default function(){
    return (
    <div>
        <BrowserRouter>
            <Navigation/>
        </BrowserRouter>
    </div>);
}