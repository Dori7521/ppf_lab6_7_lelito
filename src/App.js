import './App.css';
import {CFooter} from './components/CFooter'
import CHeader from './components/CHeader'
// import CContents from './components/CContents'
import COuter from './components/COuter'

function App() {
  return (
    <div className="App">
      <CHeader aName = "Dorota" aFamily = "Lelito"/>
      {/* <CHeader aName = "Jan" aFamily = "Kowalski"/> */}

      {/* <CContents/> */}
      <COuter/>

      <CFooter weather = "słoneczna" temp = "25">
        <p>Niebo jest bezchmurne, wiatr słaby.</p>  
      </CFooter>
      {/* <CFooter weather = "deszczowa" temp = "13"/>
      <CFooter weather = "śnieżna" temp = "-6"/> */}
      
    </div>
  );
}



export default App;
