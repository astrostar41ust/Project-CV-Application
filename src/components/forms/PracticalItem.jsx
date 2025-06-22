import React from "react";

function PracticalItem({ practical, onChange, onDelete }) {
  return (
    <form>
      <fieldset>
        <legend>Practical Experience</legend>
        <label htmlFor={`${'companyName'}-${practical.id}`}>Company name : </label>
        <input type="text" id={`${'companyName'}-${practical.id}`} name="companyName" value={practical.companyName} onChange={onChange}></input>
        <label htmlFor={`${'positionTitle'}-${practical.id}`}>Position title : </label>
        <input type="text" id={`${'positionTitle'}-${practical.id}`} name="positionTitle" value={practical.positionTitle} onChange={onChange}></input>
        <label htmlFor={`${'mainResponsibilities'}-${practical.id}`}>
          Main responsibilities of your jobs :
        </label>
        <input
          type="text"
          id={`${'mainResponsibilities'}-${practical.id}`}
          name="mainResponsibilities"
          value={practical.mainResponsibilities}
          onChange={onChange}
        ></input>
        <label htmlFor={`${'startDate'}-${practical.id}`}>Start date : </label>
        <input type="date" id={`${'startDate'}-${practical.id}`} name="startDate" value={practical.startDate} onChange={onChange}></input>
        <label htmlFor={`${'endDate'}-${practical.id}`}>End date : </label>
        <input type="date" id={`${'endDate'}-${practical.id}`} name="endDate" value={practical.endDate} onChange={onChange}></input>
        <button type="button" onClick={onDelete}>Delete</button>
      </fieldset>
    </form>
  );
}

export default PracticalItem;
