// @flow
import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

// Image
import logo from './instahomelogo.svg';

// Theme
import { colors } from './../../theme/palette';

// Style
const Header = styled.header`
  background-color: ${colors.white} ;
  border-bottom: 6px solid ${colors.black};
  display: flex;
  padding: 1.25rem 1rem;
  width: 100%;
`;


export default () => (
  <Header>
    <Grid>
      <Row>
        <Col lg={8}>
          <img src={logo} alt="Instahome"  />
        </Col>
        <Col lg={4}>
          <ul className="menu-list">
            <li><a href="/">Home</a></li>
            <li><a href="?customerId=unilever">Unilever</a></li>
            <li><a href="?customerId=apple">Apple</a></li>
            <li><a href="?customerId=nike">Nike</a></li>
            <li><a href="?customerId=ford">Ford</a></li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </Header>
);
