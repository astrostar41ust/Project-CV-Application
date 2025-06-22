import React from "react";

function EducationalItem({school, onChange, onDelete}) {
  return (
    <form>
      <fieldset>
        <legend>Educational Experience</legend>
        <label htmlFor={`${'schoolName'}-${school.id}`}>School name : </label>
        <input type="text" id={`${'schoolName'}-${school.id}`} name="schoolName" value={school.schoolName} onChange={onChange}></input>
        <label htmlFor={`${'titleOfStudy'}-${school.id}`}>Title of study : </label>
        <input type="text" id={`${'titleOfStudy'}-${school.id}`} name="titleOfStudy" value={school.titleOfStudy} onChange={onChange}></input>
        <label htmlFor={`${'dateOfStudy'}-${school.id}`}>Date of study : </label>
        <input type="date" id={`${'dateOfStudy'}-${school.id}`} name="dateOfStudy" value={school.dateOfStudy} onChange={onChange}></input>
        <button type="button" onClick={onDelete}>Delete</button>
      </fieldset>
    </form>
  );
}

export default EducationalItem;
