import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './styles/animateBorder.css'
import './styles/main-styles.scss';
import './App.css';
import './styles/Preloader.scss'
import './bootstrap.min.css';
import {HomePage} from "./client/pages/HomePage/HomePage";
import {AdminPage} from "./client/components/Products";
import {Provider} from "react-redux";
import {store} from "./store/store";


function App() {

    return (
        <Router>
            <Provider store={store}>
                <Route exact path='/'><HomePage/></Route>
                <Route exact path='/AdminPage'><AdminPage/></Route>
                {/*<HomeHoc>*/}
                {/*<div className='my-example position-absolute w-100'>*/}
                {/*    <div className='qwe1 p-1 position-relative border d-inline-flex'>main style.sass</div>*/}
                {/*    <div className='qwe2 position-relative border d-inline-flex'>main style.sass</div>*/}
                {/*    <div className='qwe3 p-1 position-relative border d-inline-flex'>main style.sass</div>*/}
                {/*    <div className='qwe4 position-relative border d-inline-flex'>main style.sass</div>*/}
                {/*    <SwitchBox name='Any name'/>*/}
                {/*</div>*/}
                {/*<Switch>*/}
                {/*    <Route exact path='/AdminPage'><AdminPage/></Route>*/}
                {/*    <Route path='/ProductWindow'/>*/}
                {/*    <Route exact path='/Cart'/>*/}
                {/*    <Route path='*'/>*/}
                {/*</Switch>*/}
                {/*</HomeHoc>*/}
            </Provider>
        </Router>
    )
}

export default App;
