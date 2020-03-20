import React from 'react';
import {Home} from './components/home';
import {AddEmployee} from './components/Addemployees';
import {EditEmployee} from './components/Editemployees';
import {Route, Switch} from 'react-router-dom';
import 'stylesheet/style.css';

 import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <switch>
        <Route path="/" component={Home} exact />
        <Route path="add" component={AddEmployee} exact />
        <Route path="/edit/:id" component={EditEmployee} exact />

      </switch>
    </GlobalProvider>
    
  );
}

export default App;
