import React, { useState } from 'react';
import Button from '../stories/Button/Button.tsx';  
import Dropdown from '../stories/DropDown/DropDown.tsx';  
import StyledLabel from '../stories/Label/Label.tsx';  
import Text from '../stories/Text/Text.tsx'; 
import CustomRadioButton from '../stories/RadioButton/RadioButton.tsx';  


function Contact() {
 


    return (
        <div className="contact-page">
            <Text text="Contact Us" fontSize="24px" fontWeight="bold" />
            <StyledLabel text="Your Email:" />
            <input

        
                style={{ width: '10%', height: '10px', padding: '10px', marginTop: '5px', marginBottom: '20px' }}
            />
            <Text text="Use the form below to send us a message." fontSize="16px" />
            <Dropdown
                options={['General Inquiry', 'Support', 'Feedback']}
                placeholder="Select Subject"

            />
            <StyledLabel text="Your Message:" />
            <textarea
 
                style={{ width: '100%', height: '100px', padding: '10px', marginTop: '5px', marginBottom: '20px' }}
            />
            <CustomRadioButton
                options={[{ label: 'Subscribe to newsletter', value: 'yes' }, { label: 'No, thanks', value: 'no' }]}
                name="newsletter"
      
                selectedColor="#007bff"
                hoverColor="#0056b3"
            />
            <Button
                label="Send Message"
                variant="default"
                size="medium"
   
            />
        </div>
    );
}

export default Contact;
