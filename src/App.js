import './App.css';
import Fields from './Components/Fields'
 
function App() {
  
  return (
    <div className="App">
      <div style={{paddingTop:'10px',paddingBottom:'120px',backgroundImage:'url(https://images.pexels.com/photos/1187974/pexels-photo-1187974.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',height:'623px'}}>
        <h1 style={{textAlign:'center',fontWeight:'bold',color:'white',marginTop:'50px',marginBottom:'50px'}}>Live Weather</h1> 
        <Fields/>
      </div>
    </div>
  );
}

export default App;
