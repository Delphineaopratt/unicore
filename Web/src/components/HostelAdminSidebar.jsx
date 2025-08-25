// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../styles.css'; 

// export default function HostelAdminSidebar ({ onNavigate, activeSection }){
//   return (
//     <div className="sidebar">
//       <div className="sidebar-logo">
//         <img src="/public/images/unicorelogo.png" alt="Unicore" />
//       </div>
//       <ul className="sidebar-menu">
//         <li
//           className={activeSection === 'dashboard' ? 'active' : ''}
//           onClick={() => onNavigate('dashboard')}
//         >
//           <i className="fas fa-building"></i> Add Hostels
//         </li>
//         <li
//           className={activeSection === 'hostelListings' ? 'active' : ''}
//           onClick={() => onNavigate('hostelListings')}
//         >
//           <i className="fas fa-list"></i> Hostel Listings
//         </li>
//         <li
//           className={activeSection === 'notifications' ? 'active' : ''}
//           onClick={() => onNavigate('notifications')}
//         >
//           <i className="fas fa-bell"></i> Notifications
//         </li>
//       </ul>
//     </div>
//   );
// };









import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';

export default function HostelAdminSidebar({ activeSection }) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/images/unicorelogo.png" alt="Unicore" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/AddHostels" className={activeSection === 'addHostels' ? 'active' : ''}>
            <i className="fas fa-building"></i> Add Hostels
          </NavLink>
        </li>
        <li>
          <NavLink to="/HostelListings" className={activeSection === 'hostelListings' ? 'active' : ''}>
            <i className="fas fa-list"></i> Hostel Listings
          </NavLink>
        </li>
        <li>
          <NavLink to="/Notifications" className={activeSection === 'notifications' ? 'active' : ''}>
            <i className="fas fa-bell"></i> Notifications
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
