import React, { useState } from 'react';
import CourseCardPopup from './Components/CourseCardPopup';
import './Modal.css';




function Modal() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(true);

  return (
    <div>
      { show ? <div></div> :
      <ModalContainer close={closeModalHandler} />}
    </div>
  );
}




export const ModalContainer = ({ close }) => {
  return (
    <div className="modal-wrapper"
   
    >
      <div className="modal-header">
        <p>Welcome to Sandhan Learning</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
            <div  className="popup">
                 
                 <CourseCardPopup/>
                 <div/>
                 <div>
                  <CourseCardPopup/>
            </div>
            <div>
                  <CourseCardPopup/>

            </div>
          
            </div>
           
        </div>
        
      </div>
    </div>
  )
};

export default Modal;