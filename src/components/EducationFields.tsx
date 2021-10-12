import * as React from "react";
import { Field, WrappedFieldArrayProps } from "redux-form";
import { FieldArrayCustom, renderField } from "./FieldArray";

export default function EducationFields() {
  return (
    <>
      <h3>Education</h3>
      <FieldArrayCustom name="education" component={Fields} />
    </>
  );
}

function Fields({
  fields,
  meta: { error, submitFailed },
}: WrappedFieldArrayProps<{
  institute: string;
  yearOfGraduation: number;
  degree: string;
}>) {
  return (
    <>
      {fields.map((field) => (
        <>
          <div className="row mb-2">
            <div className="col">
              <label htmlFor="institute">Institute</label>
              <Field
                className="form-control"
                name={`${field}.institute`}
                component={renderField}
                placeholder="University of Joe"
              />
            </div>
            <div className="col row">
              <div className="col-3">
                <label htmlFor="yearOfGraduation">Year</label>
                <Field
                  component={renderField}
                  type="number"
                  className="form-control"
                  name={`${field}.yearOfGraduation`}
                  placeholder="2019"
                />
              </div>
              <div className="col">
                <label htmlFor="degree">Degree</label>
                <Field
                  component={renderField}
                  className="form-control"
                  name={`${field}.degree`}
                  placeholder="B.Tech (CSE)"
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
            institute: "",
            yearOfGraduation: 2020,
            degree: "",
          })
        }
      >
        {fields.length === 0 ? "Add education qualification" : "Add another"}
      </button>
    </>
  );
}
