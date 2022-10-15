/**
 *
 * OrderDetails
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import OrderMeta from '../OrderMeta';
import OrderItems from '../OrderItems';
import OrderSummary from '../OrderSummary';
import CustomerDetails from '../CustomerDetails';
import { ROLE_ADMIN } from '../../../../../server/constants';

const OrderDetails = props => {
  const { order, user, cancelOrder, makePayment, addresses, updateOrderItemStatus, onBack, getUserDetails, getOrderAddress } = props;
  

  return (
    <div className='order-details'>
      <Row>
        <Col xs='12' md='12'>
          <OrderMeta order={order} cancelOrder={cancelOrder} makePayment={makePayment} onBack={onBack} />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col xs='12' lg='8'>
          <OrderItems
            order={order}
            user={user}
            updateOrderItemStatus={updateOrderItemStatus}
          />
        </Col>
        <Col xs='12' lg='4' className='mt-5 mt-lg-0'>
          <OrderSummary order={order} />
          <CustomerDetails order={order} getUserDetails={getUserDetails} getOrderAddress={getOrderAddress}  />
        </Col>
      </Row>
      
    </div>
  );
};

export default OrderDetails;
