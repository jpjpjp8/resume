import React, { useState } from 'react';
import './App.css';
import picture from './picture.jpg';

function ResumeHeader({ name, title, address }) {
  return (
    <div className="ResumeHeader">
      <img src={picture} alt="Profile" className="profile-picture" /> 
      <div>
        <h1>{name}</h1>
        <p>{title}</p>
        <p>{address}</p>
      </div>
    </div>
  );
}

function ResumeSection({ title, content }) {
  return (
    <div className="ResumeSection">
      <h3>{title}</h3>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <div className="SkillList">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ContactInfo({ email, phone }) {
  return (
    <div className="ContactInfo">
      <h3>Contact</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default function App() {
  const [resume, setResume] = useState({
    name: "Jose Paulo  Mendoza",
    title: "Computer Engineering Student",
    address: "Dizon Estate, San Agustin, San Fernando, Pampanga",
    cp: "09452102607",
    education: [
      "Elementary - St Francis Academy of Pampanga",
      "Junior High School - University of the Assumption",
      "Senior High School - University of the Assumption",
      "College - University of the Assumption"
    ],
    experience: [ 
      "Virtual Assistant - Social Rhino Media",
      "Manager - Pelayo’s Sisig & Crispy Pata",
      "Manager - Luxe Supply",        
      "Manager - SHIFT Autotrade",
      "On the Job Training - Social Rhino Media",
      "On the Job Training - St Ferdinand Construction and Design"
    ],
    skills: ["JavaScript", "React", "HTML/CSS", "Node.js"],
    contact: {
      email: "mendozapaulo89@gmail.com",
      phone: "09452102607"
    }
  });

  return (
    <div className="App">
      <ResumeHeader name={resume.name} title={resume.title} address={resume.address} />
      <div className="ResumeContent">
        <ResumeSection title="Education" content={resume.education} />
        <ResumeSection title="Experience" content={resume.experience} />
        <SkillList skills={resume.skills} />
        <ContactInfo email={resume.contact.email} phone={resume.contact.phone} />
      </div>
    </div>
  );
}
