import React from 'react';

import './App.css';
import Greet from './components/Greet';
// import Person from './components/Person';
import PersonList from './components/PersonList';



function App() {
  const p={
    first:'totofirst',
    last:'titilast',
    age:40
  }

 const persons=[
   {first:'etaqi',last:'ahmed',age:32},
   {first:'etaqi2',last:'ahmed2',age:40}
   
 ] 

  return (
    <div className="App">
       <Greet name='taoufik' messageCount={4} isLogged={true} />
       {/* <Person name={p}  /> */}
       <PersonList persons={persons} />
    </div>
  );

}

export default App;
