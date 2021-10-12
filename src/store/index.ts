import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;

export type RootState = ReturnType<typeof rootReducer>;

export const createResumeInitialState = {
  fullName: "",
  email: "",
  address: "",
  phone: "",
  education: [
    {
      institution: "",
      yearOfGraduation: 2020,
      degree: "",
    },
  ],
  jobExperience: [
    {
      company: "",
      startYear: 2019,
      endYear: 2021,
      designation: "",
    },
  ],
  skills: [],
};

export type ResumeFormType = {
  fullName: string;
  email: string;
  address: string;
  phone: string;
  education: {
    institution: string;
    yearOfGraduation: number;
    degree: string;
  }[];
  jobExperience: {
    company: string;
    startYear: number;
    endYear: number;
    designation: string;
  }[];
  skills: never[];
};
