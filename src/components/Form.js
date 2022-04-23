import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form-container">
      <div class="form-style-2">
        <div class="form-style-2-heading">How can we help?</div>
        <form action="" method="post">
          <label for="field1">
            <span>
              Name <span class="required">*</span>
            </span>
            <input type="text" class="input-field" name="field1" value="" />
          </label>
          <label for="field2">
            <span>
              Email <span class="required">*</span>
            </span>
            <input type="text" class="input-field" name="field2" value="" />
          </label>
          <label>
            <span>Phone</span>
            <input
              type="text"
              class="tel-number-field"
              name="tel_no_1"
              value=""
              maxlength="4"
            />
            -
            <input
              type="text"
              class="tel-number-field"
              name="tel_no_2"
              value=""
              maxlength="4"
            />
            -
            <input
              type="text"
              class="tel-number-field"
              name="tel_no_3"
              value=""
              maxlength="10"
            />
          </label>
          <label for="field4">
            <span>Category</span>
            <select name="field4" class="select-field">
              <option value="General Question">General</option>
              <option value="Advertise">Issue</option>
              <option value="Partnership">Partnership</option>
            </select>
          </label>
          <label for="field5">
            <span>
              Message <span class="required">*</span>
            </span>
            <textarea name="field5" class="textarea-field"></textarea>
          </label>

          <label>
            <span> </span>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    </div>
  );
}
export default Form;
