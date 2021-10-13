import clsx from "clsx";
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

  const hasError = touched && error;
  return (
    <>
      <input
        {...input}
        className={clsx("form-control", hasError && "is-invalid")}
        type={type}
        placeholder={placeholder}
      />
      {hasError && <div className="invalid-feedback">{error}</div>}
    </>
  );
};
