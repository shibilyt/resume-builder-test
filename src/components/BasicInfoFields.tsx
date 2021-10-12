import * as React from "react";
import { Field } from "redux-form";

export default function BasicInfoFields() {
  return (
    <>
      <h3>Info</h3>
      <div className="form-row">
        <div className="col">
          <label htmlFor="fullName">Full name</label>
          <Field
            className="form-control"
            name="fullName"
            component="input"
            placeholder="Full Name"
          />
        </div>
        <div className="col">
          <label htmlFor="email">Email</label>
          <Field
            className="form-control"
            name="email"
            component="input"
            type="email"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="col-6">
          <label htmlFor="phone">Phone</label>
          <Field
            className="form-control"
            name="phone"
            component="input"
            type="tel"
            placeholder="+91-9999999999"
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
