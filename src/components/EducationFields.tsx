import * as React from "react";
import { Field, WrappedFieldArrayProps } from "redux-form";
import { FieldArrayCustom as FieldArray, renderField } from "./FieldArray";
import * as validation from "../utils/validation";

export default function EducationFields() {
  return (
    <>
      <h3>Education</h3>
      <FieldArray name="education" component={EducationItemFields} />
    </>
  );
}

function EducationItemFields({
  fields,
  meta: { error, submitFailed },
}: WrappedFieldArrayProps<{
  institution: string;
  yearOfGraduation: number;
  degree: string;
}>) {
  return (
    <>
      {fields.map((field, index) => (
        <>
          <div className="row mb-2">
            <div className="col">
              <label htmlFor="institution">Institute</label>
              <Field
                className="form-control"
                name={`${field}.institution`}
                component={renderField}
                validate={[validation.required]}
                placeholder="University of Joe"
              />
            </div>
            <div className="col row">
              <div className="col-2">
                <label htmlFor="yearOfGraduation">Year</label>
                <Field
                  component={renderField}
                  type="number"
                  className="form-control"
                  name={`${field}.yearOfGraduation`}
                  validate={[
                    validation.required,
                    validation.minValue(1970),
                    validation.maxValue(2021),
                  ]}
                  placeholder="2019"
                />
              </div>
              <div className="col-9">
                <label htmlFor="degree">Degree</label>
                <Field
                  component={renderField}
                  className="form-control"
                  name={`${field}.degree`}
                  validate={[validation.required]}
                  placeholder="B.Tech (CSE)"
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
            institution: "",
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
