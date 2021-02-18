// @flow
import { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import { OrderState, OrderAction } from './order';
import { ProductState, ProductAction } from './product';
import { PricingRuleState, PricingRuleAction } from './pricingRule';

export type ReduxInitAction = { type: '@@INIT' };

export type State = OrderState & ProductState & PricingRuleState;

export type Action =
  | ReduxInitAction
  | OrderAction
  | ProductAction
  | PricingRuleAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
