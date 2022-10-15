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
  const { authenticated, handleShopping, handleCheckout, placeOrder, fetchDefaultAddress, handleAddress, getMyDetails, handleUserDetails } = props;
  const [options, updateOptions] = React.useState([]);
  const [selectedAddress, updateSelectedAddress] = React.useState("");
  const [phoneNumAdded, updatePhoneNumAdd] = React.useState(false);

  React.useEffect(()=>{
    const fetchAddresses = async ()=>{
      let data = await fetchDefaultAddress();
      let res = await getMyDetails();
    
      if(res.user.phoneNumber){
        updatePhoneNumAdd(true);
      }else{
        updatePhoneNumAdd(false);
      }
      let arr = [{label:" -- select an option -- ", value:{}}];
      data.addresses.map(addr => {
        arr.push({label: addr.address, value: addr});
      })
      updateOptions(arr);
    };
    fetchAddresses();
  }, [])

  const AddAddressAndNumber = async () =>{
      let data = placeOrder(selectedAddress);
  }

  const changeSelectedAddress = (id) => {
    updateSelectedAddress(id);
  }

  return (
    <div className='easy-checkout'>
      <div className='checkout-actions' style={{display: "flex", flexDirection: "column"}}>
        <h4>Select Address</h4>

        <select style={{ width:"100%", height:"2% !important", marginRight:"24px", marginDown:"15px !important"}}
                value={selectedAddress}
                onChange={(e) => changeSelectedAddress(e.target.value)}
              >
                {options.map(option=>{
                  return <option value={option.value._id}>{option.label}</option>
                })}
              </select>
        {authenticated ? (
          selectedAddress && selectedAddress !== "-- select an option --" ?
          (phoneNumAdded? <Button
            variant='primary'
            text='Place Order'
            onClick={() => AddAddressAndNumber()}
          />: <Button
          variant='primary'
          text='Add Phone Number'
          onClick={() => handleUserDetails()}
        />) : <Button
          text="Add New Address"
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
