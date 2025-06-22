import React from "react";
import "../../styles/forms/formStyle.css";

function PersonalInfomation({personalInfo, handlePersonalInfoChange}) {
  return (
    <form>
      <fieldset>
        <legend>Personal Infomation</legend>
        <label htmlFor="fname">First name : </label>
        <input type="text" id="fname" name="fname" value={personalInfo.fname} onChange={handlePersonalInfoChange}></input>
        <label htmlFor="lname">Last name : </label>
        <input type="text" id="lname" name="lname" value={personalInfo.lname}  onChange={handlePersonalInfoChange}></input>
        <label htmlFor="email">Email : </label>
        <input type="email" id="email" name="email" value={personalInfo.email}  onChange={handlePersonalInfoChange}></input>
        <label htmlFor="phone">Phone number : </label>
        <input type="tel" id="phone" name="phone" value={personalInfo.phone}  onChange={handlePersonalInfoChange}></input>
        <button type="button">Submit</button>
      </fieldset>
    </form>
  );
}

export default PersonalInfomation;
