import * as React from "react";
import {
  FieldArray,
  GenericFieldArray,
  Field,
  WrappedFieldProps,
} from "redux-form";

export const FieldArrayCustom = FieldArray as new () => GenericFieldArray<
  Field,
  any
>;

export const renderField = (
  props: WrappedFieldProps & {
    type?: string;
    placeholder?: string;
  }
) => {
  const { touched, error } = props.meta;
  const { input, type, placeholder } = props;

  return (
    <>
      <input
        {...input}
        className="form-control"
        type={type}
        placeholder={placeholder}
      />
      {touched && error && <span>{error}</span>}
    </>
  );
};
