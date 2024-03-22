
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Head from './component/Head';
import Home from './component/Home';
import RestaurentView from './component/RestaurentView';

function App() {
  return (
    <div >
     <Head/>
     <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/view/:id" element={<RestaurentView/>}/>
    </Routes>
     <Footer/>
    </div>
  );
}

export default App;
