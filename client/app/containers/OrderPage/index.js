/**
 *
 * OrderPage
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import OrderDetails from '../../components/Manager/OrderDetails';
import NotFound from '../../components/Common/NotFound';
import LoadingIndicator from '../../components/Common/LoadingIndicator';

class OrderPage extends React.PureComponent {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchOrder(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const id = this.props.match.params.id;
      this.props.fetchOrder(id);
    }
  }

  render() {
    const {
      history,
      order,
      user,
      isLoading,
      cancelOrder,
      updateOrderItemStatus,
      makePayment,
      addresses,
      getUserDetails,
      getOrderAddress
    } = this.props;

    return (
      <div className='order-page'>
        {isLoading ? (
          <LoadingIndicator backdrop />
        ) : order._id ? (
          <OrderDetails
            order={order}
            user={user}
            cancelOrder={cancelOrder}
            makePayment={makePayment}
            updateOrderItemStatus={updateOrderItemStatus}
            addresses={addresses}
            getUserDetails={getUserDetails}
            getOrderAddress={getOrderAddress}
            onBack={() => {
              if (window.location.toString().includes('success')) {
                history.push('/dashboard/orders');
              } else {
                history.goBack();
              }
            }}
          />
        ) : (
          <NotFound message='no order found.' />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.account.user,
    order: state.order.order,
    isLoading: state.order.isLoading,
    addresses: state.address.addresses
  };
};

export default connect(mapStateToProps, actions)(OrderPage);
