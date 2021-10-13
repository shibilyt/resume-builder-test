import * as React from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import { createResumeInitialState, ResumeFormType, RootState } from "../store";

import BasicInfoFields from "../components/BasicInfoFields";
import EducationFields from "../components/EducationFields";
import JobExperienceFields from "../components/JobExperienceFields";
import SkillsFields from "../components/SkillFields";

function Create({
  handleSubmit,
  error,
  submitting,
}: InjectedFormProps<ResumeFormType, {}, string>) {
  const formState = useSelector((state: RootState) => state.form.create);
  const onSubmit = (values: ResumeFormType) => {
    // persist the data
    localStorage.setItem("resumeData", JSON.stringify(formState.values));
    toast.success("Successfully created Resume. You can edit now", {
      duration: 3000,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BasicInfoFields />
      <hr />

      <EducationFields />
      <hr />

      <JobExperienceFields />
      <hr />

      <SkillsFields />
      <hr />

      {error && <div>{error}</div>}
      <button className="btn btn-primary" type="submit" disabled={submitting}>
        Create Resume
      </button>
    </form>
  );
}

export default reduxForm({
  form: "create",
  initialValues: createResumeInitialState,
})(Create);
