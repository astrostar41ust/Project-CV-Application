import React from "react";
import EducationalItem from "./EducationalItem";
function EducationalExperience({
  educationalExperience,
  onChange,
  onAdd,
  onDelete,
}) {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      {educationalExperience.map((school) => (
        <div key={school.id} style={{display:'flex', flexDirection:'column', gap:'4px', marginBottom:'12px'}}>
          <EducationalItem
            school={school}
            onChange={(event) => onChange(school.id, event)}
            onDelete={() => onDelete(school.id)}
          />
          
        </div>
      ))}
      <button type="button" onClick={onAdd} style={{marginBottom: '40px', alignSelf:'flex-end'}}>Add Education</button>
    </div>
  );
}

export default EducationalExperience;
