import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuote from './pages/AllQuote';
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact >
          <AllQuote />
        </Route>
        <Route path="/quotes/:quotesID">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote/">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
