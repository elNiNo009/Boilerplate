
import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import Expense from '../Components/Expense';
import AddExpense from '../Components/AddExpense';
import EditExpense from '../Components/EditExpense';
import NotFound from '../Components/NotFound';
import Header from '../Components/Header';
import HelpExpense from '../Components/HelpPage';


const AppRouter = ()=>(
    <Router>
    <div>
        <Header />
        <Routes>
        
            <Route path='/' element={<Expense />} />
            <Route path='/create' element={<AddExpense  />} />
            <Route path='/edit' element={<EditExpense  />} />
            <Route path='/help' element={<HelpExpense  />} />
            <Route   path='*' element={<NotFound  />} />
            
        </Routes>
    </div>
    </Router>

)



export default AppRouter

