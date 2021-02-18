// @flow
import React, { Node } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  margin:10px 0;
  padding: 20px;
  position: relative;
  border-radius:6px;
`;

export let CardProps = {
  children: Node
};

export default ({ children }: CardProps) => <Card>{children}</Card>;
