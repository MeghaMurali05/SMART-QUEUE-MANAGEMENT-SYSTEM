
import React from "react";

function Settings({ onBack }) {
  return (
    <div className="admin-page">
      <h2>Settings</h2>
      <p>Manage your SmartQueue account settings.</p>

      <div className="admin-section">
        <h2>Account Settings</h2>

        <div className="admin-actions">
          <button>Profile Settings</button>
          <button>Password Settings</button>
          <button>Notification Settings</button>
        </div>
      </div>

      <div className="admin-page-footer">
        <button className="admin-back-button" onClick={onBack}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Settings;