
import { Link } from 'react-router-dom';
import './App.css'
import  HelloWorld from './components/HelloWorld'
import React, {useState} from 'react';


function App() {
  const [count, setCount] = useState<number>(0);
  let isValid: boolean = true;
  return (
    <>
    <header><Link to="/userList">Go to user</Link></header>
      <section id="center">
        <div>
          {isValid && <HelloWorld name="Ytasty Crousty"/>}
          {
               count > 3 ?
               <div>Important things</div>
               :
               <div>Sile things</div>
            }
            {
              ["Loise", "Jean-Michel", "Marie", "Pierre"]
              .map((el) => <HelloWorld name={el} />)
            }²
            

        </div>
          <button onClick={() => setCount(count + 1)}>Bouton ({count})</button>
      </section>
      </>
  )
}  

export default App
