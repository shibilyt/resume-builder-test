import * as React from "react";
import { Field, WrappedFieldProps } from "redux-form";
import { notEmptySkills } from "../utils/validation";
import AutoCompleteTagInput from "./AutoCompleteTagInput";

const skillItems = [
  "javascript",
  "html",
  "css",
  "reactjs",
  "vuejs",
  "angularjs",
  "python",
  "django",
  "webpack",
  "typescript",
  "rust",
  "go",
  "sveltejs",
];

export default function SkillsFields() {
  return (
    <>
      <h3>Skills</h3>
      <Field
        name="skills"
        component={RenderAutoCompleteTagInput}
        validate={notEmptySkills}
      />
    </>
  );
}

function RenderAutoCompleteTagInput({
  input: { onChange, value },
  meta: { error, touched },
}: WrappedFieldProps) {
  const hasError = touched && error;
  return (
    <>
      <AutoCompleteTagInput
        items={skillItems}
        label="Select your skills"
        placeholder="select"
        onChange={(items) => onChange(items)}
        value={value}
        error={hasError ? error : undefined}
      />
    </>
  );
}
