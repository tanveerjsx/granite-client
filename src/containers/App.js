import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import PrivateRoute from '../PrivateRoute';
import Shop from './Shop';
import ForgetPassword from './ForgetPassword';
import ControlPanel from './ControlPanel';
import authReducers from '../store/reducers/authReducers';
import productReducers from '../store/reducers/productReducers';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import cartReducers from '../store/reducers/cartReducers';
import PlaceOrder from './PlaceOrder';
import ThankYou from './ThankYou';
import Orders from './Orders';
import ProductsStore from '../components/ProductsStore/ProductStore';
import VendorRegistration from '../components/VendorRegistration/VendorRegistration';
import DesignTrends from '../components/DesignTrends/DesignTrends';
import Blog from '../components/Blog/Blog';
import ProductClick from '../components/ProductInformationHome/ProductInformationHome';
import SideBar from '../components/SideBar/SideBar';
import AboutMain from '../components/AboutUs/AboutMain';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = lazy(() => import('./Login'))
const Signup = lazy(() => import('./Signup'))

const rootReducers = combineReducers({
  auth: authReducers,
  products: productReducers,
  cart: cartReducers
});
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducers);

let enhancer;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(thunk)
  );
} else {
  enhancer = compose(applyMiddleware(thunk));
}

const store = createStore(persistedReducer, enhancer);
let persistor = persistStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
              <SideBar/>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forget-password" component={ForgetPassword} />
                <Route path="/cpanel" component={ControlPanel} />
                <Route path="/store" component={ProductsStore} />
                <Route path="/blog/products" component={Blog} />
                <Route path="/category/design-trends" component={DesignTrends} />
                <Route path="/vendorregistration" component={VendorRegistration} />
                <Route path="/productinformationhome" component={ProductClick} />
                <Route path="/AboutUs" component={AboutMain} />
                <Route path="/products/:category/:slug" component={ProductDetails} />
                <Route path="/products" component={Shop} />
                <PrivateRoute path="/cart" component={Cart} />
                <PrivateRoute path="/place-order" component={PlaceOrder} />
                <PrivateRoute path="/thank-you" component={ThankYou} />
                <PrivateRoute path="/orders" component={Orders} />
                <Route path="/" component={Shop} />
              </Switch>
            </Suspense>
          </div>
        </Router>
      </PersistGate>
    </Provider >
  );
}

export default App;