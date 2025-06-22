import React from "react";
import EducationalItem from "./EducationalItem";
function EducationalExperience({
  educationalExperience,
  onChange,
  onAdd,
  onDelete,
}) {
  return (
    <div style={{display:'flex', flexDirection:'column' }}>
      {educationalExperience.map((school) => {
        return (
          <EducationalItem
            key={school.id}
            school={school}
            onChange={(event) => onChange(school.id, event)}
            onDelete={() => onDelete(school.id)}
          ></EducationalItem>
        );
      })}
      <button type="button" onClick={onAdd}>
        Add Education
      </button>
    </div>
  );
}

export default EducationalExperience;
