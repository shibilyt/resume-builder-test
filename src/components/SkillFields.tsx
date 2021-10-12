import * as React from "react";
import { Field, WrappedFieldProps } from "redux-form";
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
      <Field name="skills" component={renderAutoCompleteTagInput} />
    </>
  );
}

function renderAutoCompleteTagInput({
  input: { onChange },
}: WrappedFieldProps) {
  return (
    <AutoCompleteTagInput
      items={skillItems}
      label="Select your skills"
      placeholder="select"
      onChange={(items) => onChange(items)}
    />
  );
}
