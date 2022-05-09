import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from "react-router-dom";



const NotFound = () => (
    <div>
        <p>404 - <Link to="/">Go home</Link></p> 
    </div>
)
 export default NotFound

