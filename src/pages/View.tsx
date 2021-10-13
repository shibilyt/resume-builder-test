import * as React from "react";
import { Link } from "react-router-dom";
import { ResumeFormType } from "../store";

export default function View() {
  const resumeDataString = localStorage.getItem("resumeData");
  const resumeData: ResumeFormType | null = resumeDataString
    ? JSON.parse(resumeDataString)
    : null;
  if (resumeData == null) {
    return (
      <>
        <div className="d-flex align-items-center">
          No data added. Please add your data.
          <Link className="btn btn-primary ml-4" to="/create">
            Create your resume
          </Link>
        </div>
      </>
    );
  }
  return (
    <div>
      <section>
        <h3>Basic information</h3>
        <div>
          <div>
            <span className="info-title">Full Name:</span> {resumeData.fullName}
          </div>
          <div>
            <span className="info-title">Email:</span> {resumeData.email}
          </div>
          <div>
            <span className="info-title">Phone:</span> {resumeData.phone}
          </div>
          <div>
            <span className="info-title">Address:</span> {resumeData.address}
          </div>
        </div>
      </section>

      <section>
        <h3>Education</h3>
        {resumeData.education.map((educationItem) => (
          <div className="d-flex">
            <div className="mr-5">
              <span className="info-title">Institution:</span>
              {educationItem.institution}
            </div>
            <div className="mr-5">
              <span className="info-title">Year of Graduation:</span>{" "}
              {educationItem.yearOfGraduation}
            </div>
            <div>
              <span className="info-title">Degree</span> {educationItem.degree}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3>Experience</h3>
        {resumeData.jobExperience.map((jobItem) => (
          <div className="d-flex">
            <div className="mr-5">
              <span className="info-title">Company:</span> {jobItem.company}
            </div>
            <div className="mr-5">
              <span className="info-title">Start Year:</span>{" "}
              {jobItem.startYear}
            </div>
            <div className="mr-5">
              <span className="info-title">End Year:</span> {jobItem.endYear}
            </div>
            <div className="mr-5">
              <span className="info-title">Designation:</span>{" "}
              {jobItem.designation}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3>Skills</h3>
        <div className="d-flex">
          {resumeData.skills.map((skill) => (
            <div
              key={`selected-item-${skill}`}
              className="border px-2 py-0 rounded bg-light text-info d-flex justify-content-center align-items-center mr-2"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <Link to="/edit" className="mt-4 btn btn-primary">
        Edit
      </Link>
    </div>
  );
}
