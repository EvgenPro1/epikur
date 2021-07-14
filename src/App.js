import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './styles/animateBorder.css'
import './styles/main-styles.scss';
import './App.scss';
import './styles/Preloader.scss'
import './bootstrap.min.css';
import {HomePage} from "./client/pages/HomePage/HomePage";
import {AdminProducts} from "./client/components/AdminProducts";
import GoogleMapsAdminPage from "./client/components/GoogleMapsAdminPage/GoogleMapsAdminPage";
import {Provider} from "react-redux";
import {store} from "./store/store";
import "./styles/buttons-inputs-styles.css"
import './styles/benefits.scss'
import './styles/imgs.css'
import NewsAdminPage from "./client/components/NewsAdmin/NewsAdminPage";
import HeaderAdminHoc from "./HOC/HeaderAdminHOC/HeaderAdminHoc";
import HeaderClientHoc from "./HOC/HeaderClientHOC/HeaderClientHOC";
import News from "./client/components/News/News";
import ClientProducts from "./client/components/ClientProduct/ClientProducts";

function App() {

    return (
        <Router>
            <Provider store={store}>
                <Route exact path='/'><HomePage/></Route>
                <Route exact path='/Home'><HomePage/></Route>
                <Route exact path='/AdminProducts'><HeaderAdminHoc><AdminProducts/></HeaderAdminHoc></Route>
                <Route exact path='/NewsAdminPage'><HeaderAdminHoc><NewsAdminPage/></HeaderAdminHoc></Route>
                <Route exact path='/GoogleMapsAdminPage'><HeaderAdminHoc><GoogleMapsAdminPage/></HeaderAdminHoc></Route>

                <Route exact path='/News'><HeaderClientHoc><News/></HeaderClientHoc></Route>
                <Route exact path='/Our products'><HeaderClientHoc><ClientProducts/></HeaderClientHoc></Route>
            </Provider>
        </Router>
    )
}

export default App;






{/*google-maps-key: AIzaSyABwpKfqjcCgsGGcFY2dhpb02HUPt_U4vk*/}