import * as React from "react";
import { Field, WrappedFieldArrayProps } from "redux-form";
import { FieldArrayCustom as FieldArray, renderField } from "./FieldArray";
import * as validation from "../utils/validation";

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
      {fields.map((field, index) => (
        <>
          <div className="row mb-2">
            <div className="col">
              <label htmlFor="institution">Company</label>
              <Field
                className="form-control"
                name={`${field}.company`}
                component={renderField}
                validate={[validation.required]}
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
                  validate={[
                    validation.required,
                    validation.minValue(1970),
                    validation.maxValue(2021),
                  ]}
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
                  validate={[
                    validation.required,
                    validation.minValue(1970),
                    validation.maxValue(2021),
                  ]}
                  placeholder="2021"
                />
              </div>
              <div className="col-5">
                <label htmlFor="degree">Designation</label>
                <Field
                  component={renderField}
                  className="form-control"
                  name={`${field}.designation`}
                  validate={[validation.required]}
                  placeholder="SSE"
                />
              </div>
              <div className="col-1 d-flex align-items-end">
                {fields.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => fields.remove(index)}
                  >
                    X
                  </button>
                )}
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
