import * as React from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import toast from "react-hot-toast";

import { createResumeInitialState, ResumeFormType } from "../store";

import BasicInfoFields from "../components/BasicInfoFields";
import EducationFields from "../components/EducationFields";
import JobExperienceFields from "../components/JobExperienceFields";
import SkillsFields from "../components/SkillFields";

function Edit({
  handleSubmit,
  submitting,
}: InjectedFormProps<ResumeFormType, {}, string>) {
  const onSubmit = (values: ResumeFormType) => {
    localStorage.setItem("resumeData", JSON.stringify(values));
    toast.success("Successfully updated Resume.", {
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

      <button className="btn btn-primary" type="submit">
        Update Resume
      </button>
    </form>
  );
}

let resumeData = localStorage.getItem("resumeData");
const resumeInitialData: ResumeFormType = resumeData
  ? JSON.parse(resumeData)
  : createResumeInitialState;
export default reduxForm({
  form: "edit",
  initialValues: resumeInitialData,
})(Edit);
