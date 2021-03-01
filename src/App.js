import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Header from './components/header/header';
import Home from './components/home/home';
import Deals from './components/deals/deals';
import Cart from './components/cart/cart';

const ContentArea = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/deals" >
            <ContentArea>
              <Deals />
            </ContentArea>
          </Route>
          <Route path="/cart" >
            <ContentArea>
              <Cart />
            </ContentArea>
          </Route>
          <Route path="/" >
            <ContentArea>
              <Home />
            </ContentArea>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
