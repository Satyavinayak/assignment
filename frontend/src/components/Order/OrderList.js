import React, { Component } from 'react';
import styled from 'styled-components';
import DeleteIcon from 'react-icons/lib/md/delete';
import { connect } from 'react-redux';
import _ from 'underscore';

// Actions
import { removeItem } from './../../actions/order';

// Components
import Card from './../Card/Card';
import List from './../List/List';
import Text from './../Text/Text';

// Service
import CheckoutService from './../../service/CheckoutService';
import DiscountService from './../../service/DiscountService';

// Types
import type { Node } from 'react';
import type { Dispatch } from '../../types/';
import type { Orders } from './../../types/orders';
import type { PricingRuleState } from './../../types/pricingRule';

// Theme
import { colors } from './../../theme/palette';

type OrderListProps = {
  orders: Orders,
  pricingRule: PricingRuleState,
  handleOnClick: (key: number) => Dispatch
};

// Styles
const CloseButton = styled.span`
  color: ${colors.tamota};
  cursor: pointer;
  font-size: 1.4rem;
  margin-left: 0.25rem;
  padding: 0.40rem;
  border-radius: 0.30rem;
`;

const mapStateToProps = state => {
  const { orders, pricingRule } = state;

  return {
    orders,
    pricingRule
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleOnClick: key => dispatch(removeItem(key))
});

class OrderList extends Component<OrderListProps> {
  renderTotal(checkoutService, orders) {
    const { pricingRule } = this.props;
    const discounts =
      'discounts' in pricingRule.payload ? pricingRule.payload.discounts : [];

    const discountService = new DiscountService(discounts);
    orders.forEach(order => discountService.add(order));

    return (checkoutService.getTotal() - discountService.getDiscount()).toFixed(
      2
    );
  }

  renderOrderItem = (): Node => {
    const { handleOnClick, orders } = this.props;
    const ordersIds = _.groupBy(orders, 'id');

    return Object.entries(ordersIds).map(item => {
      const orders = item[1];
      const order = orders.find((n, i) => i === 0);
      const amount = orders.length;
      const checkoutService = new CheckoutService(orders);

      return (
        <List.Item key={order.key}>
          <Text>
            {amount} - {order.name}
            <CloseButton onClick={() => handleOnClick(order.key)}>
              <DeleteIcon />
            </CloseButton>
          </Text>
          <Text>${this.renderTotal(checkoutService, orders)}</Text>
        </List.Item>
      );
    });
  };

  render() {
    const { orders } = this.props;
    const checkoutService = new CheckoutService(orders);

    return (
      <Card>
        <Text.Heading>Your order</Text.Heading>
        {orders.length === 0 ? (
          <Text>You have no orders</Text>
        ) : (
          <List
            items={orders}
            renderItem={() => this.renderOrderItem()}
            footer={
              <List.Item bordered>
                <Text>Total:</Text>
                <Text>${this.renderTotal(checkoutService, orders)}</Text>
              </List.Item>
            }
          />
        )}
      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
