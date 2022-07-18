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
import { ROLE_ADMIN } from '../../../../../server/constants';

const OrderDetails = props => {
  const { order, user, cancelOrder, makePayment, addresses, updateOrderItemStatus, onBack } = props;
  

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
        </Col>
        <Col xs='12' lg='4' className='mt-5 mt-lg-0'>
        <>
          <h3>Order Updates</h3>
          <textarea style={{height:"118%", width:"118%", resize:"none"}} 
          value={order.updates ? order.updates : "Thanks for the payment!! \n We'll post your order updates here as well as on your email."} disabled>
          </textarea></>
        </Col>
        <Col xs='12' md='12' className="addressWarning" style={{marginTop: "5%"}}>
          <h3>{addresses.length === 0 ? <><>Looks like you haven't added any address.</><br/> <>Please add an address from your profile.</> <br/><>We cannot process your order until you update your address from your profile.</> </>: ""}</h3>
        </Col>
      </Row>
      
    </div>
  );
};

export default OrderDetails;
