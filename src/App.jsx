import "./App.css";
import PersonalInfomation from "./components/forms/PersonalInfomation";
import EducationalExperience from "./components/forms/EducationalExperience";
import PracticalExperience from "./components/forms/PracticalExperience";
import CvPaper from "./components/CvPaper";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({ fname: "", lname: "" , email: "", phone: ''});
  const [educationalExperience, setEducationalExperience] = useState([{id: crypto.randomUUID(), schoolName: '', titleOfstudy: '', dateOfStudy:''}])
  const [practicalExperience, setPracticalExperience] = useState([{id: crypto.randomUUID(), companyName: '', positionTitle: '', mainResponsibilities:'', startDate: '', endDate: ''}])
  

  const handlePersonalInfoChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setPersonalInfo({...personalInfo, [name]: value})
  }

  const handleEducationalExperienceChange = (id, event) => {
    const name = event.target.name
    const value = event.target.value
    
    const newSchoolArray = educationalExperience.map(school => 
    {
      if(school.id === id) {
        return {...school, [name]: value}
      }
      else {
        return school
      }
    }
    )

    setEducationalExperience(newSchoolArray)
  }

  const handleAddEducation = () => {
    setEducationalExperience([...educationalExperience, {id: crypto.randomUUID(), schoolName: '', titleOfstudy: '', dateOfStudy:''}])
  }

  const handleDeleteEducation = (id) => {

    const newSchoolArray = educationalExperience.filter(school => school.id !== id)
    setEducationalExperience(newSchoolArray)
  }



  
  const handlePracticalExperienceChange = (id, event) => {
    const name = event.target.name
    const value = event.target.value
    
    const newPracticalArray = practicalExperience.map(practical => 
    {
      if(practical.id === id) {
        return {...practical, [name]: value}
      }
      else {
        return practical
      }
    }
    )

    setPracticalExperience(newPracticalArray)
  }

  const handleAddPractice = () => {
    setPracticalExperience([...practicalExperience, {id: crypto.randomUUID(), companyName: '', positionTitle: '', mainResponsibilities:'', startDate: '', endDate: ''}])
  }

  const handleDeletePractice = (id) => {

    const newPracticalArray = practicalExperience.filter(practical => practical.id !== id)
    setPracticalExperience(newPracticalArray)
  }
  return (
    <div>
      <main>
        <PersonalInfomation personalInfo={personalInfo} handlePersonalInfoChange={handlePersonalInfoChange}></PersonalInfomation>
        <EducationalExperience educationalExperience={educationalExperience} onChange={handleEducationalExperienceChange} onAdd={handleAddEducation} onDelete={handleDeleteEducation}></EducationalExperience>
        <PracticalExperience practicalExperience={practicalExperience} onChange={handlePracticalExperienceChange} onAdd={handleAddPractice} onDelete={handleDeletePractice}></PracticalExperience>
      </main>
      <aside>
        <CvPaper></CvPaper>
      </aside>
    </div>
  );
}

export default App;
