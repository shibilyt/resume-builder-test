import * as React from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import BasicInfoFields from "../components/BasicInfoFields";
import EducationFields from "../components/EducationFields";
import JobExperienceFields from "../components/JobExperienceFields";

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
      <hr />
      <JobExperienceFields />
    </form>
  );
}

export default reduxForm({
  form: "create",
})(Create);
