import * as React from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import BasicInfoFields from "../components/BasicInfoFields";
import EducationFields from "../components/EducationFields";
import JobExperienceFields from "../components/JobExperienceFields";
import SkillsFields from "../components/SkillFields";

function Create(props: InjectedFormProps) {
  const formState = useSelector((state: RootState) => state.form.create);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // persist the data
    localStorage.setItem("resumeData", JSON.stringify(formState.values));
  };
  return (
    <form onSubmit={handleSubmit}>
      <BasicInfoFields />
      <hr />
      <EducationFields />
      <hr />
      <JobExperienceFields />
      <hr />
      <SkillsFields />
      <hr />
      <button className="btn btn-primary" type="submit">
        Create Resume
      </button>
    </form>
  );
}

export default reduxForm({
  form: "create",
})(Create);
