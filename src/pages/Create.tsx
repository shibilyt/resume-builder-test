import * as React from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import { useSelector } from "react-redux";
import BasicInfoFields from "../components/BasicInfoFields";
import { RootState } from "../store";
import EducationFields from "../components/EducationFields";

function Create(props: InjectedFormProps) {
  const formState = useSelector((state: RootState) => state.form.create);
  console.log(formState?.values);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit}>
      <BasicInfoFields />
      <hr />
      <EducationFields />
    </form>
  );
}

export default reduxForm({
  form: "create",
})(Create);
