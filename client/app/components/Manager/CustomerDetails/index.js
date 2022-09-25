/**
 *
 * OrderSummary
 *
 */

 import React from 'react';

 import { Col } from 'reactstrap';
 
 const CustomerDetails = props => {
   const { order, getUserDetails, getOrderAddress } = props;
   const [userDetails, updateUserDetails] = React.useState({});

   React.useEffect(()=>{
    console.log(order.selectedAddress);

    const getUserDetailss = async () => {
        let data = await getUserDetails(order.userId);
        let addressData = await getOrderAddress(order.selectedAddress);
        console.log( addressData)
        data.user.address = addressData.address.address + ", " + addressData.address.city + " ("+ addressData.address.zipCode+ "), " + addressData.address.state + ", " + addressData.address.country
        updateUserDetails(data.user);
    }
    getUserDetailss()

    return ()=>{
      
    }
   }, [])
 
   return (
     <Col className='order-summary pt-3'>
       <h2>Customer Details</h2>
       <div className='d-flex align-items-center summary-item'>
         <p className='summary-label'>Name</p>
         <p className='summary-value ml-auto'> {userDetails.firstName + " " + (userDetails.lastName ? userDetails.lastName : "")}</p>
       </div>
       <div className='d-flex align-items-center summary-item'>
         <p className='summary-label'>Email</p>
         <p className='summary-value ml-auto'>{userDetails.email}</p>
       </div>
        {
            userDetails.address?<>       
            <p style={{color: "black"}}>Address</p>
            <p className='summary-value ml-auto'>{userDetails.address}</p></> : <></>
        }

        {
            userDetails.phoneNumber?<><div className='d-flex align-items-center summary-item'>
            <p className='summary-label'>Phone Number</p>
            <p className='summary-value ml-auto'>{userDetails.phoneNumber}</p>
          </div></>:<></>
        }
       <hr />
       <div className='d-flex align-items-center summary-item'>
         <p className='summary-label'>Total</p>
         <p className='summary-value ml-auto'>₹{order.totalWithTax}</p>
       </div>
     </Col>
   );
 };
 
 export default CustomerDetails;
 