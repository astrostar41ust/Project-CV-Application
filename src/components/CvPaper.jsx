import React from "react";
import "../styles/cvPaperStyle.css";
function CvPaper({ personalInfo, educationalExperience, practicalExperience }) {
  return (
    <div className="blankPage">
      <section className="cv-personal">
        <h1>{personalInfo.fname} {personalInfo.lname}</h1>
      </section>
      <section className="cv-contact">
        <h2>Contact</h2>
        <div className="cv-contact-content">
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.phone}</p>
        </div>
      </section>
      <section className="cv-education">
        <h2>Education</h2>
        <div className="cv-education-list">
        {educationalExperience && educationalExperience.map((school) => (
          <div key={school.id} className="cv-education-item">
            <h3>{school.schoolName === '' ? 'School name' : school.schoolName }</h3>
            <p>Title of Study: {school.titleOfStudy}</p>
            <p>Date of Study: {school.dateOfStudy}</p>
          </div>
        ))}
        </div>
      </section>
      <section className="cv-practical">
        <h2>Practical Experience</h2>
        <div className="cv-practical-list">
        {practicalExperience && practicalExperience.map((practical) => (
          <div key={practical.id} className="cv-practical-item">
            <h3>{practical.companyName}</h3>
            <p>Position: {practical.positionTitle}</p>
            <p>Main Responsibilities: {practical.mainResponsibilities}</p>
            <p>Start: {practical.startDate} - End: {practical.endDate}</p>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
}

export default CvPaper;
