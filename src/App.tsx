import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import { Header } from './components/header/Header';
import { Home } from './pages/Home';
import { Deals } from './pages/Deals';
import { Cart } from './pages/Cart';
import { Item } from './pages/Item';

export const App: React.FC = () => {
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
                                <Item />
                            </Route>
                        </>
                    </ContentArea>
                </Switch>
            </Router>
        </>
    );
};

const ContentArea = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
`;
