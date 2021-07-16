import './App.css';
import Fields from './Components/Fields'

function App() {
  
  return (
    <div className="App">
      <div style={{paddingTop:'10px',paddingBottom:'120px',backgroundImage:'url(/Images/blur-background-1187974.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',height:'623px'}}>
        <h1 style={{textAlign:'center',fontWeight:'bold',color:'white',marginTop:'50px',marginBottom:'50px'}}>Live Weather</h1> 
        <Fields/>
      </div>
    </div>
  );
}

export default App;
