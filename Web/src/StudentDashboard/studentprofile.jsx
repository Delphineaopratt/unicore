//  import React from 'react';
// import './studentprofile.css';
// import Layout from '../components/Layout';
// import { NavLink } from 'react-router-dom';

// export default function StudentProfile({ userData }) {
//   return (
//    <Layout>
//    <div className="profile-page">
//         <h1>Your Profile</h1>
//         <div className="profile-section">
//           <p><strong>Program:</strong> {userData.program}</p>
//           <p><strong>CGPA:</strong> {userData.cgpa}</p>
//           <p><strong>Ideal Job:</strong> {userData.jobType}</p>
//           <p><strong>Skills:</strong> {userData.skills}</p>
//           <p><strong>Transcript:</strong> <a href={URL.createObjectURL(userData.transcript)} download>Download</a></p>
//         </div>
//       </div>
//    </Layout>

   
  
//   );
// }


import React from 'react';
import './studentprofile.css';
import Layout from '../components/Studentsidebar'; 

export default function StudentProfile({ userData }) {
  // Dummy data for testing
  const dummyData = {
    program: 'Information Technology',
    cgpa: '3.6',
    jobType: 'Frontend Intern',
    skills: 'HTML, CSS, React',
    transcript: new Blob(['Dummy transcript'], { type: 'application/pdf' })
  };

  const data = userData || dummyData;

  return (
    <Layout>
      <div className="profile-page">
        <h1>Your Profile</h1>
        <div className="profile-section">
          <p><strong>Program:</strong> {data.program}</p>
          <p><strong>CGPA:</strong> {data.cgpa}</p>
          <p><strong>Ideal Job:</strong> {data.jobType}</p>
          <p><strong>Skills:</strong> {data.skills}</p>
          <p>
            <strong>Transcript:</strong>{' '}
            <a href={URL.createObjectURL(data.transcript)} download>
              Download
            </a>
            {/* Add code to enable user update their profile  */}

          </p>
        </div>
      </div>
    </Layout>
  );
}
