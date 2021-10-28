import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from './components/Layout'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import Pricing from './components/Pricing';


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      <Layout />
      <Router>
        <Footer />
        <Switch>
          <Route path='/pricing' />
          <Route path='/about' />
          <Route path='/contact' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
