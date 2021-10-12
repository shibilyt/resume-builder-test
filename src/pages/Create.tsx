import * as React from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import BasicInfoFields from "../components/BasicInfoFields";

function Create(props: InjectedFormProps) {
  return (
    <form>
      <BasicInfoFields />
    </form>
  );
}

export default reduxForm({
  form: "create",
})(Create);
