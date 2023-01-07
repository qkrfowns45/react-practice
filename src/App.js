import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './page/HomePage';
import { Route } from 'react-router-dom';
import LoginPage from './page/LoginPage';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login/:id" exact={true} component={LoginPage} />
      <Footer />
    </div>
  );
}

export default App;
