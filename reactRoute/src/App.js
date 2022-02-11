import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import MainHeader from './components/mainHeader';
import ProductDetails from './productDetails';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"/>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
