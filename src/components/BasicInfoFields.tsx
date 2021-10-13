import * as React from "react";
import { Field } from "redux-form";
import * as validation from "../utils/validation";
import { renderField } from "./FieldArray";
export default function BasicInfoFields() {
  return (
    <>
      <h3>Info</h3>
      <div className="row">
        <div className="col">
          <label htmlFor="fullName">Full name</label>
          <Field
            className="form-control"
            name="fullName"
            component={renderField}
            placeholder="Full Name"
            validate={validation.required}
          />
        </div>
        <div className="col">
          <label htmlFor="email">Email</label>
          <Field
            className="form-control"
            name="email"
            component={renderField}
            type="email"
            validate={[validation.required, validation.email]}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <label htmlFor="phone">Phone</label>
          <Field
            className="form-control"
            name="phone"
            component={renderField}
            type="tel"
            validate={[validation.required, validation.phoneNumber]}
            placeholder="9999999999"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <Field
          className="form-control"
          name="address"
          component="textarea"
          placeholder="Address"
          rows={3}
        />
      </div>
    </>
  );
}
