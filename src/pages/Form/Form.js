import React from "react";
import "./Form.css";
import "/Users/janelleghanem/react-website/src/App.css";

export default function Form() {
  return (
    <div id="form">
      <div className="form-container">
        <div className="form-style-2">
          <div className="form-style-2-heading">How can we help?</div>
          <form action="" method="post">
            <label htmlFor="field1">
              <span>
                Name <span className="required">*</span>
              </span>
              <input
                type="text"
                className="input-field"
                name="field1"
                defaultValue=""
              />
            </label>
            <label htmlFor="field2">
              <span>
                Email <span className="required">*</span>
              </span>
              <input
                type="text"
                className="input-field"
                name="field2"
                defaultValue=""
              />
            </label>
            <label>
              <span>Phone</span>
              <input
                type="text"
                className="tel-number-field"
                name="tel_no_1"
                defaultValue=""
                maxLength="4"
              />
              -
              <input
                type="text"
                className="tel-number-field"
                name="tel_no_2"
                defaultValue=""
                maxLength="4"
              />
              -
              <input
                type="text"
                className="tel-number-field"
                name="tel_no_3"
                defaultValue=""
                maxLength="10"
              />
            </label>
            <label htmlFor="field4">
              <span>Category</span>
              <select name="field4" className="select-field">
                <option defaultValue="General Question">General</option>
                <option defaultValue="Advertise">Issue</option>
                <option defaultValue="Partnership">Partnership</option>
              </select>
            </label>
            <label htmlFor="field5">
              <span>
                Message <span className="required">*</span>
              </span>
              <textarea name="field5" className="textarea-field"></textarea>
            </label>

            <label>
              <span> </span>
              <input type="submit" defaultValue="Submit" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
