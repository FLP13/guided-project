import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Header from './components/header/header';

const ContentArea = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  max-width: ${props => props.theme.maxWidth};
`

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/deals" >
            <ContentArea>
              Deals
            </ContentArea>
          </Route>
          <Route path="/cart" >
            <ContentArea>
              Cart
            </ContentArea>
          </Route>
          <Route path="/" >
            <ContentArea>
              Home
            </ContentArea>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
