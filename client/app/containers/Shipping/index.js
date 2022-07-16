/*
 *
 * Contact
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import Select from "react-select";

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

const styles = {
    select: {
      width: "100%",
      maxWidth: 150
    }
  };

function Shipping() {

    const [selectedOption,updateSelectedOption] = React.useState({value : "Select"});

    const options = [
        { label: 'Agra', value: 'Agra' },
        { label: 'Ahmedabad', value: 'Ahmedabad' },
        { label: 'Nellore', value: 'Nellore' },
        { label: 'Ajmer', value: 'Ajmer' },
        { label: 'Akola', value: 'Akola' },
        { label: 'Alappey', value: 'Alappey' },
        { label: 'Aligarh', value: 'Aligarh' },
        { label: 'Allahabad', value: 'Allahabad' },
        { label: 'Alwar', value: 'Alwar' },
        { label: 'Amaravati', value: 'Amaravati' },
        { label: 'Ambala', value: 'Ambala' },
        { label: 'Amritsar', value: 'Amritsar' },
        { label: 'Angul', value: 'Angul' },
        { label: 'Ankleshwar', value: 'Ankleshwar' },
        { label: 'Araria', value: 'Araria' },
        { label: 'Asansol', value: 'Asansol' },
        { label: 'Aurangabad', value: 'Aurangabad' },
        { label: 'Baddi', value: 'Baddi' },
        { label: 'Baharampore', value: 'Baharampore' },
        { label: 'Balasore', value: 'Balasore' },
        { label: 'Bangalore', value: 'Bangalore' },
        { label: 'Bankura', value: 'Bankura' },
        { label: 'Barasat', value: 'Barasat' },
        { label: 'Bareilly', value: 'Bareilly' },
        { label: 'Baroda', value: 'Baroda' },
        { label: 'Bathinda', value: 'Bathinda' },
        { label: 'Bawal', value: 'Bawal' },
        { label: 'Berhampore', value: 'Berhampore' },
        { label: 'Betul', value: 'Betul' },
        { label: 'Bhadrak', value: 'Bhadrak' },
        { label: 'Bhagalpur', value: 'Bhagalpur' },
        { label: 'Bhavnagar', value: 'Bhavnagar' },
        { label: 'Bhilwara', value: 'Bhilwara' },
        { label: 'Bhiwadi', value: 'Bhiwadi' },
        { label: 'Bhopal', value: 'Bhopal' },
        { label: 'Bhubaneswar', value: 'Bhubaneswar' },
        { label: 'Bijnor', value: 'Bijnor' },
        { label: 'Bikaner', value: 'Bikaner' },
        { label: 'Bilaspur', value: 'Bilaspur' },
        { label: 'Bokaro', value: 'Bokaro' },
        { label: 'Bolangir', value: 'Bolangir' },
        { label: 'Bolpur', value: 'Bolpur' },
        { label: 'Burdwan', value: 'Burdwan' },
        { label: 'Calicut', value: 'Calicut' },
        { label: 'Chandigarh', value: 'Chandigarh' },
        { label: 'Chandrapur', value: 'Chandrapur' },
        { label: 'Chennai', value: 'Chennai' },
        { label: 'Cochin', value: 'Cochin' },
        { label: 'Coimbatore', value: 'Coimbatore' },
        { label: 'Cooch-Behar', value: 'Cooch Behar' },
        { label: 'Cuttack', value: 'Cuttack' },
        { label: 'Darbhanga', value: 'Darbhanga' },
        { label: 'Dehradun', value: 'Dehradun' },
        { label: 'Dhanbad', value: 'Dhanbad' },
        { label: 'Durgapur', value: 'Durgapur' },
        { label: 'Erode', value: 'Erode' },
        { label: 'Faizabad', value: 'Faizabad' },
        { label: 'Gaya', value: 'Gaya' },
        { label: 'Gobichettypalyam', value: 'Gobichettypalyam' },
        { label: 'Gonda', value: 'Gonda' },
        { label: 'Gorakhpur', value: 'Gorakhpur' },
        { label: 'Guntur', value: 'Guntur' },
        { label: 'Gurgaon', value: 'Gurgaon' },
        { label: 'Guwahati', value: 'Guwahati' },
        { label: 'Gwalior', value: 'Gwalior' },
        { label: 'Haldia', value: 'Haldia' },
        { label: 'Hardwar', value: 'Hardwar' },
        { label: 'Hassan', value: 'Hassan' },
        { label: 'Hazaribagh', value: 'Hazaribagh' },
        { label: 'Hyderabad', value: 'Hyderabad' },
        { label: 'Indore', value: 'Indore' },
        { label: 'Jabalpur', value: 'Jabalpur' },
        { label: 'Jaipur', value: 'Jaipur' },
        { label: 'Jalandhar', value: 'Jalandhar' },
        { label: 'Jamalpur', value: 'Jamalpur' },
        { label: 'Jamnagar', value: 'Jamnagar' },
        { label: 'Jeypore', value: 'Jeypore' },
        { label: 'Jhansi', value: 'Jhansi' },
        { label: 'Jharsuguda', value: 'Jharsuguda' },
        { label: 'Jodhpur', value: 'Jodhpur' },
        { label: 'Kanpur', value: 'Kanpur' },
        { label: 'Karad', value: 'Karad' },
        { label: 'Karur', value: 'Karur' },
        { label: 'Katihar', value: 'Katihar' },
        { label: 'Kharagpur', value: 'Kharagpur' },
        { label: 'Kolhapur', value: 'Kolhapur' },
        { label: 'Kolkata', value: 'Kolkata' },
        { label: 'Kollam', value: 'Kollam' },
        { label: 'Kona', value: 'Kona' },
        { label: 'Kota', value: 'Kota' },
        { label: 'Kottayam', value: 'Kottayam' },
        { label: 'Krishnagiri', value: 'Krishnagiri' },
        { label: 'Kundli', value: 'Kundli' },
        { label: 'Kutch', value: 'Kutch' },
        { label: 'Latur', value: 'Latur' },
        { label: 'Lucknow', value: 'Lucknow' },
        { label: 'Ludhiana', value: 'Ludhiana' },
        { label: 'Malda', value: 'Malda' },
        { label: 'Mathura', value: 'Mathura' },
        { label: 'Mecheda', value: 'Mecheda' },
        { label: 'Meerut', value: 'Meerut' },
        { label: 'Mehsana', value: 'Mehsana' },
        { label: 'Moga', value: 'Moga' },
        { label: 'Mohali', value: 'Mohali' },
        { label: 'Moradabad', value: 'Moradabad' },
        { label: 'Motihari', value: 'Motihari' },
        { label: 'Mumbai', value: 'Mumbai' },
        { label: 'Muzaffarpur', value: 'Muzaffarpur' },
        { label: 'Mysore', value: 'Mysore' },
        { label: 'Nagpur', value: 'Nagpur' },
        { label: 'Nasik', value: 'Nasik' },
        { label: 'Noida', value: 'Noida' },
        { label: 'Ongole', value: 'Ongole' },
        { label: 'Palghat', value: 'Palghat' },
        { label: 'Panchkula', value: 'Panchkula' },
        { label: 'Panipat', value: 'Panipat' },
        { label: 'Panjim', value: 'Panjim' },
        { label: 'Pathankot', value: 'Pathankot' },
        { label: 'Patiala', value: 'Patiala' },
        { label: 'Patna', value: 'Patna' },
        { label: 'Phagwara', value: 'Phagwara' },
        { label: 'Pondicherry', value: 'Pondicherry' },
        { label: 'Pune', value: 'Pune' },
        { label: 'Puri', value: 'Puri' },
        { label: 'Purnea', value: 'Purnea' },
        { label: 'Raipur', value: 'Raipur' },
        { label: 'Rajkot', value: 'Rajkot' },
        { label: 'Rajpura', value: 'Rajpura' },
        { label: 'Ranchi', value: 'Ranchi' },
        { label: 'Rayagada', value: 'Rayagada' },
        { label: 'Rishikesh', value: 'Rishikesh' },
        { label: 'Roorke', value: 'Roorke' },
        { label: 'Rourkela', value: 'Rourkela' },
        { label: 'Rudrapur', value: 'Rudrapur' },
        { label: 'Saharanpur', value: 'Saharanpur' },
        { label: 'Saharsa', value: 'Saharsa' },
        { label: 'Sahibabad', value: 'Sahibabad' },
        { label: 'Salem', value: 'Salem' },
        { label: 'Sambalpur', value: 'Sambalpur' },
        { label: 'Sangli', value: 'Sangli' },
        { label: 'Satara', value: 'Satara' },
        { label: 'Serampore', value: 'Serampore' },
        { label: 'Siliguri', value: 'Siliguri' },
        { label: 'Solan', value: 'Solan' },
        { label: 'Solapur', value: 'Solapur' },
        { label: 'Sultanpur', value: 'Sultanpur' },
        { label: 'Surat', value: 'Surat' },
        { label: 'Surendranagar', value: 'Surendranagar' },
        { label: 'Thandalam', value: 'Thandalam' },
        { label: 'Thanjavur', value: 'Thanjavur' },
        { label: 'Tirupati', value: 'Tirupati' },
        { label: 'Tirupur', value: 'Tirupur' },
        { label: 'Tiruvalla', value: 'Tiruvalla' },
        { label: 'Trichur', value: 'Trichur' },
        { label: 'Trichy', value: 'Trichy' },
        { label: 'Trivandrum', value: 'Trivandrum' },
        { label: 'Udaipur', value: 'Udaipur' },
        { label: 'Varanasi', value: 'Varanasi' },
        { label: 'Vijayawada', value: 'Vijayawada' },
        { label: 'Vishakapatnam', value: 'Vishakapatnam' },
        { label: 'Yamuna-Nagar', value: 'Yamuna Nagar' }
      ]

      const handleChange = (selectedOption) => {
        console.log(selectedOption)
        updateSelectedOption(selectedOption)
        
      };
    

    return (
      <div className='shipping'>
        <h2>Shipping, Returns and Refunds Information</h2>
        <hr />
        <div className="marketing-block marketing-block--light marketing-block--padded">
            <h3>Shipping policy</h3>
            <p>All orders are processed within 2 to 5 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.&nbsp;</p>
            <p><strong><em>Potential delays can occur sometimes due to a high volume of orders or postal service problems that are outside of your control.</em></strong></p>
            <h3>Domestic Shipping Rates and Estimates</h3>
            <p><strong><em>For&nbsp;calculated shipping rates:&nbsp;</em></strong>Shipping charges for your order will be calculated and displayed at checkout.&nbsp;</p>
            <p><strong><em>For&nbsp;simple flat rate shipping:</em></strong><em>&nbsp;</em>We add ₹200 flat rate for shipping order. All product prices are inclusive of shipping rate.&nbsp;</p>
            <p><strong><em>Free shipping for orders above ₹1000</em></strong><strong></strong></p>
            
            <h3>How do I check the status of my order?</h3>
            <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.&nbsp;</p>
            <p>If you haven’t received your order within 2 - 5 days of receiving your shipping confirmation email, please contact us at kanhacollections66@gmail.com with your name and order number, and we will look into it for you.</p>
            <p><strong><em>Include a link for customers to track their order if available.</em></strong></p>
            
            <h3>Refunds, returns, and exchanges</h3>
            <p>We accept returns up to 4 days after delivery, if the item is unused and in its original condition, and we will refund the full order amount minus the shipping costs for the return.&nbsp;</p>
            <p>In the event that your order arrives damaged in any way, please email us as soon as possible at kanhacollections66@gmail with your order number and a photo/video of the item’s condition. We address these on a case-by-case basis but will try our best to work towards a satisfactory solution.</p>
            <p>If you have any further questions, please don't hesitate to contact us at kanhacollections66@gmail.</p>
        </div>
        <h3>We deliver to the following cities in the list:</h3>
        <div className="ship-cities">
      <Select
        style={styles.select}
        isDisabled={false}
        className='select-ship-container'
        classNamePrefix='select-option'
        options={options}
        defaultValue={"Select"}
        value={selectedOption.value}
        onChange={(e) => handleChange(e)}
      />
      <p>If your city/district is not in the above list dont hesitate to order. We can still try to ship it for you :)</p>
    </div>
      </div>
    );
  }

const mapStateToProps = state => {
  return {
    contactFormData: state.contact.contactFormData,
    formErrors: state.contact.formErrors
  };
};

export default connect(mapStateToProps, actions)(Shipping);
