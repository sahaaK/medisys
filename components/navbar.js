class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          max-width: 64rem;
          width: 91.666%;
          border-radius: 1rem;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
          padding: 0.5rem 1rem;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #3b82f6;
          font-weight: bold;
        }
        
        .logo i {
          color: #3b82f6;
          stroke-width: 2;
          width: 1.5rem;
          height: 1.5rem;
        }
        
        .nav-tabs {
          display: flex;
          gap: 0.5rem;
          padding: 0.25rem;
        }
        
        .nav-tab {
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-decoration: none;
          color: inherit;
        }
        
        .nav-tab.active {
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
        }
        
        .nav-tab:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
        }
        
        .nav-tab i {
          width: 1.25rem;
          height: 1.25rem;
        }
        
        .nav-tab span {
          margin-left: 0.5rem;
          display: none;
        }
        
        @media (min-width: 768px) {
          .nav-tab span {
            display: inline;
          }
        }
        
        .user-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .notification {
          position: relative;
        }
        
        .notification-badge {
          position: absolute;
          top: 0;
          right: 0;
          width: 0.5rem;
          height: 0.5rem;
          background-color: #ef4444;
          border-radius: 50%;
        }
        
        .avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background-color: #bfdbfe;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .avatar i {
          width: 100%;
          height: 100%;
          padding: 0.375rem;
          color: #2563eb;
        }
      </style>
      
      <nav class="nav-glass">
        <div class="nav-container">
          <!-- Logo -->
          <div class="logo">
            <i data-feather="heart"></i>
            <span>MediCare</span>
          </div>
          
          <!-- Navigation Tabs -->
          <div class="nav-tabs">
            <a href="index.html" class="nav-tab" data-tab="dashboard">
              <i data-feather="grid"></i>
              <span>Dashboard</span>
            </a>
            <a href="patients.html" class="nav-tab" data-tab="patients">
              <i data-feather="users"></i>
              <span>Patients</span>
            </a>
            <a href="rooms.html" class="nav-tab" data-tab="rooms">
              <i data-feather="home"></i>
              <span>Rooms</span>
            </a>
            <a href="appointments.html" class="nav-tab" data-tab="appointments">
              <i data-feather="calendar"></i>
              <span>Appointments</span>
            </a>
            <a href="staff.html" class="nav-tab" data-tab="staff">
              <i data-feather="user-plus"></i>
              <span>Staff</span>
            </a>
          </div>
          
          <!-- User Profile -->
          <div class="user-actions">
            <div class="notification">
              <i data-feather="bell" class="text-gray-700"></i>
              <span class="notification-badge"></span>
            </div>
            <div class="avatar">
              <i data-feather="user"></i>
            </div>
          </div>
        </div>
      </nav>
    `;
    
    // Initialize feather icons
    this.shadowRoot.querySelectorAll('[data-feather]').forEach(icon => {
      feather.replace(icon);
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);