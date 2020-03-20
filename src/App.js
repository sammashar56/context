import React from 'react';
import {Home} from './components/home';
import {AddEmployee} from './components/Addemployees';
import {EditEmployee} from './components/EditEmployees';
import {Route, Switch} from 'react-router-dom';
import 'stylesheet/style.css';

 import {GlobalState} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <switch>
        <Route path="/" component={Home} exact />
        <Route path="add" component={AddEmployee} exact />
        <Route path="/edit/:id" component={EditEmployee} />
        
      </switch>
    </GlobalProvider>
    
  );
}

export default App;
