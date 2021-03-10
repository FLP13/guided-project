import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Header from './components/header/header';
import Home from './pages/home';
import Deals from './pages/deals';
import Cart from './pages/cart';
import ItemDetails from './pages/itemDetails';

const ContentArea = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
`;

function App() {

    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <ContentArea>
                        <>
                            <Route exact path="/" >
                                <Home />
                            </Route>
                            <Route path="/deals" >
                                <Deals />
                            </Route>
                            <Route path="/cart" >
                                <Cart />
                            </Route>
                            <Route path="/item/:id" >
                                <ItemDetails />
                            </Route>
                        </>
                    </ContentArea>
                </Switch>
            </Router>
        </>
    );
}

export default App;
