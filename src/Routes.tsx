import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Search from './pages/Search';
import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter>
      <Navbar />
          <Switch>
            
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/search">
                <Search />
            </Route>
                      
        </Switch>
    </BrowserRouter>
);

export default Routes;