import classes from './App.module.css';
import Header from './components/Header';
import RecommendedVideos from './components/RecommendedVideos';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './components/Search';

function App() {
  return (
    <div className={classes.app}>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <div className={classes.app_page}>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className={classes.app_page}>
              <Sidebar />
              <Search />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
