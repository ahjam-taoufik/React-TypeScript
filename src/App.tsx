import  Children1  from './components/Children1';
import './App.css';
import Status from './components/Status';
import ReactNode from './components/ReactNode';
import Greet from './components/Greet';



function App() {
 
  return (
    <div className="App">
         <Status status='loading'  />

         <Children1 >this is a text</Children1> 

         <ReactNode>
               <Greet name='toto' /* messageCount={4} */ isLogged={true} />
         </ReactNode>
    </div>
  );

}

export default App;
