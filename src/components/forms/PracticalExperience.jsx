import React from 'react'
import PracticalItem from './PracticalItem';

function PracticalExperience({practicalExperience, onChange, onAdd, onDelete}) {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      {practicalExperience.map((practical) => (
        <div key={practical.id} style={{display:'flex', flexDirection:'column', gap:'4px', marginBottom:'12px'}}>
          <PracticalItem
            practical={practical}
            onChange={(event) => onChange(practical.id, event)}
            onDelete={() => onDelete(practical.id)}
          />
          
        </div>
      ))}
      <button type="button" onClick={onAdd} style={{marginBottom: '40px', alignSelf:'flex-end'}}>Add Practical</button>
    </div>
  )
}

export default PracticalExperience