import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './styles/main-styles.sass';
import './App.css';

import './bootstrap.min.css';
import {HomePage} from "./client/components/HomePage/HomePage";
import {AdminPage} from "./client/components/Products";
import {Provider} from "react-redux";
import {store} from "./store/store";


function App() {

  return (
      <Router>
        <Provider store={store}>
          <Route exact path='/'><HomePage/></Route>

          {/*<HomeHoc>*/}

          <Switch>

              <Route exact path='/AdminPage'><AdminPage/></Route>
            <Route path='/ProductWindow'/>
            <Route exact path='/Cart'/>
            <Route path='*'/>
          </Switch>

          {/*</HomeHoc>*/}
          <div className='qwe'>$main_color_light_green</div>
        </Provider>
      </Router>
  )
}

export default App;
