import React, { Component } from 'react';
import './App.sass';
import './Modal.sass';
import './style.sass';

class Modal extends Component {
  render() {
    return (

        <div className="container">

      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content-clean">
            <div className="modal-header-clean">
              <h2 className="header3 centered">Lorem Ipsum</h2>

            </div>
            <div className="modal-body">
              <form>

                <label for="your-name" className="col-full">Your Name</label>
                <input name="your-name"type="text" aria-label="your-name" className="col-full" /><br />


                    <label for="email" >Your Email</label>
                    <input className="col-half" name="email"  type="email" aria-label="your-email" required/>

                    <label for="phone">Phone Number</label>
                    <input className="col-half" name="phone" type="text" aria-label="your-phone" />


                <label for="message">Message</label><br />
                <textarea name="message" aria-label="your-message" cols="30" rows="10" />

                <button className="centered" type="submit">Button</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

export default Modal;
