// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './Router';
import NavBar from './frontend/components/NavBar';
import Footer from './frontend/components/Footer';
import Header from './frontend/components/Header';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Header></Header>
      <Router></Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
