import './App.css';
import Home from './components/HomePage/Home';
import HeroSectionTwo from "./components/HeroSections/HeroSectionTwo"
import Pictures from "./components/Pictures/Pictures"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import People from './components/People/People';
import InputField from './components/Input/InputField';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
     <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/explore' component={HeroSectionTwo} />
        <Route path='/XD' component={Pictures} />
        <Route path='/blog' component={People} />
        <Route path='/contact' component={InputField} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;