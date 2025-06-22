import React from 'react'
import PracticalItem from './PracticalItem';

function PracticalExperience({practicalExperience, onChange, onAdd, onDelete}) {
  return (
   
    <div style={{display:'flex', flexDirection:'column' }}>
      {practicalExperience.map((practical) => {
        return (
          <PracticalItem
            key={practical.id}
            practical={practical}
            onChange={(event) => onChange(practical.id, event)}
            onDelete={() => onDelete(practical.id)}
          ></PracticalItem>
        );
      })}
      <button type="button" onClick={onAdd}>
        Add Practical Experience
      </button>
    </div>
  )
}

export default PracticalExperience