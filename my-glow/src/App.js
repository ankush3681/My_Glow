
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MainRoutes from './Pages/MainRoutes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/> 
      <Footer/>
    </div>
  );
}
//app.js

export default App;
