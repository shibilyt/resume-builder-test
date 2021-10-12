import * as React from "react";
import { Field, WrappedFieldArrayProps } from "redux-form";
import { FieldArrayCustom as FieldArray, renderField } from "./FieldArray";

export default function JobExperienceFields() {
  return (
    <>
      <h3>Job experience</h3>

      <FieldArray name="jobExperience" component={JobItemFields} />
    </>
  );
}

function JobItemFields({
  fields,
  meta: { error, submitFailed },
}: WrappedFieldArrayProps<{
  company: string;
  startYear: number;
  endYear: number;
  designation: string;
}>) {
  return (
    <>
      {fields.map((field) => (
        <>
          <div className="row mb-2">
            <div className="col">
              <label htmlFor="institute">Company</label>
              <Field
                className="form-control"
                name={`${field}.company`}
                component={renderField}
                placeholder="Acme inc"
              />
            </div>
            <div className="col row">
              <div className="col-3">
                <label htmlFor="yearOfGraduation">Start year</label>
                <Field
                  component={renderField}
                  type="number"
                  className="form-control"
                  name={`${field}.startYear`}
                  placeholder="2019"
                />
              </div>
              <div className="col-3">
                <label htmlFor="yearOfGraduation">End year</label>
                <Field
                  component={renderField}
                  type="number"
                  className="form-control"
                  name={`${field}.endYear`}
                  placeholder="2021"
                />
              </div>
              <div className="col">
                <label htmlFor="degree">Designation</label>
                <Field
                  component={renderField}
                  className="form-control"
                  name={`${field}.designation`}
                  placeholder="Senior Software Engineer"
                />
              </div>
            </div>
          </div>
        </>
      ))}
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() =>
          fields.push({
            company: "",
            startYear: 2019,
            endYear: 2021,
            designation: "",
          })
        }
      >
        {fields.length === 0 ? "Add job experience" : "Add another"}
      </button>
    </>
  );
}
