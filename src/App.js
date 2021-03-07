import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { useFetchItemList } from './hooks/useFetch';

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

    const [selectedItem, setSelectedItem] = useState(null);
    
    const {status, error, items} = useFetchItemList();

    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <ContentArea>
                        {
                            status === 'fetched' && 
                            <>
                                <Route exact path="/" >
                                    <Home items={items} setSelectedItem={setSelectedItem} />
                                </Route>
                                <Route path="/deals" >
                                    <Deals items={items} setSelectedItem={setSelectedItem} />
                                </Route>
                                <Route path="/cart" >
                                    <Cart />
                                </Route>
                                <Route path="/item/:id" >
                                    <ItemDetails selectedItem={selectedItem} />
                                </Route>
                            </>
                        }
                        {
                            status === 'fetching' && <p>LOADING ITEMS...</p>   
                        }
                        {
                            error && <p>ERROR LOADING ITEMS!</p>   
                        }
                    </ContentArea>
                </Switch>
            </Router>
        </>
    );
}

export default App;
