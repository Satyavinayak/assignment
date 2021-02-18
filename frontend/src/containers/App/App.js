import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

// Components
import Header from './../../components/Header/Header';
import OrderList from './../../components/Order/OrderList';

// Containers
import ProductContainer from './../../containers/ProductContainer/ProductContainer';

// Style
const Root = styled.div`
  background: linear-gradient(241.94deg, rgb(252, 72, 8) 0.27%, rgb(253, 127, 8) 66.99%);
  width: 100%;
  height:100%;
`;

const Background = styled.div`
  background-color: none;
  
`;

class App extends Component {
  render() {
    return (
      <Root>
        <Header />
        <Grid>
          <Row reverse>  
          <Col xs={12} md={4}>
              <OrderList />
            </Col>
          <Col xs={12} md={8}>
             <Background><ProductContainer /></Background> 
            </Col>
            
            
          </Row>
        </Grid>
      </Root>
    );
  }
}

export default App;
