/**
 *
 * Checkout
 *
 */

import React from 'react';
import { Input } from 'reactstrap';

import Button from '../../Common/Button';
import SelectOption from '../../Common/SelectOption';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Link } from 'react-router-dom';
import { handleAddressSelect } from '../../../containers/Address/actions';

const Checkout = props => {
  const { authenticated, handleShopping, handleCheckout, placeOrder, fetchDefaultAddress, handleAddress } = props;
  const [options, updateOptions] = React.useState([]);
  const [selectedAddress, updateSelectedAddress] = React.useState("");

  React.useEffect(()=>{
    const fetchAddresses = async ()=>{
      let data = await fetchDefaultAddress();
      let arr = [];
      data.addresses.map(addr => {
        arr.push({label: addr.address, value: addr});
      })
      updateOptions(arr);
    };
    fetchAddresses();
  }, [])

  const AddAddressAndNumber = async () =>{
      let data = placeOrder(selectedAddress.value._id);
  }

  return (
    <div className='easy-checkout'>
      <div className='checkout-actions'>
        <SelectOption
                label={'Select Address'}
                name={'taxable'}
                options={options}
                value={selectedAddress}
                handleSelectChange={value => {
                  updateSelectedAddress(value)
                }}
              />
        {authenticated ? (
          selectedAddress ?
          <Button
            variant='primary'
            text='Place Order'
            onClick={() => AddAddressAndNumber()}
          /> : <Button
          text="Add Address"
          onClick={()=> handleAddress()}
            />
        ) : (
          <Button
            variant='primary'
            text='Proceed To Checkout'
            onClick={() => handleCheckout()}
          />
        )}
        <Button
          variant='primary'
          text='Continue shopping'
          onClick={() => handleShopping()}
        />
      </div>
    </div>
  );
};

export default Checkout;
