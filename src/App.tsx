import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Contacts from './components/Contacts';
import Favorites from './components/Favorites';
import NewContact from './components/NewContact';
import ImportCSV from './components/ImportCSV';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
<<<<<<< HEAD
      <NewContact />
=======
    <Header/>
>>>>>>> 09ca8de3432cebf5c6f62bc45edf4f80bf686ba0
      <Router>
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/newContact" component={NewContact} />
          <Route exact path="/importCSV" component={ImportCSV} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
