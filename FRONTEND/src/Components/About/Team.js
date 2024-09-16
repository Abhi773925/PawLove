import React from 'react';
import './Team.css';
import ansh from '../../assets/ansh.png';
import pawas from '../../assets/pawas.jpg';
import abhishek from "../../assets/abhishek.JPG";
import abhinay from '../../assets/abhinay.jpg';

const teamMembers = [
  {
    name: "Abhishek Kumar",
    imgSrc: abhishek,
    profile: "Lead Developer with 5 years of experience in React and Node.js.",
    job: "Lead Developer",
    email: "rockabhisheksingh778189@gmail.com",
    call: "+917739254874"
  },
  {
    name: "Ansh Kumar",
    imgSrc: ansh,
    profile: "UI/UX Designer specializing in creating user-friendly interfaces.",
    job: "UI/UX Designer",
    email: "anshkmr991@gmail.com",
    call: "+919693137775"
  },
  {
    name: "Pawas Ranjan",
    imgSrc:pawas,
    profile: "Project Manager who excels at team coordination and project execution.",
    job: "Project Manager",
    email: "pawasranjan5@gmail.com",
    call: "+916299179010"
  },
  {
    name: "Abhinay Yadav",
    imgSrc:abhinay,
    profile: "Backend Engineer with expertise in database management.",
    job: "System Administration",
    email: "david@example.com",
    call: "+919035571022"
  },
  {
    name: "Aakash Kumar Singh",
    imgSrc: "https://via.placeholder.com/150",
    profile: "Backend Engineer with expertise in database management server-side logic.",
    job: "Backend Engineer",
    email: "david@example.com",
    call: "+919835381345"
  }
];

const Team = () => {
  return (
    <div className='team-section'>
      <h1 className="text-gray-900 font-[900] text-[4rem]">Meet Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img-container">
              <img src={member.imgSrc} alt={member.name} className="team-img" />
              <div className="team-hover-info">
                <p>{member.profile}</p>
              </div>
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="job-title">{member.job}</p>
              <div className="contact-buttons">
                <a href={`mailto:${member.email}`} className="contact-button">Email</a>
                <a href={`tel:${member.call}`} className="contact-button">Call</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
