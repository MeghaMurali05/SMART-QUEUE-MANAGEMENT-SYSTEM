import React from 'react'

const SideBar = () => {
  return (
    <div className="sidebar">

      <div className="logo">
        <span>●</span> SMARTQUEUE
      </div>

      <div className="menu">

        <p className="menu-title">MAIN</p>

        <a href="/" className="active">🏠 Dashboard</a>
        <a href="/services">🏢 Services</a>
        <a href="/get-token">🎟️ Get Token</a>
        <a href="/my-token">📋 My Token</a>
        <a href="/queue">👥 Live Queue</a>

        <p className="menu-title">MANAGEMENT</p>

        <a href="/appointments">📅 Appointments</a>
        <a href="/reports">📊 Reports</a>

        <p className="menu-title">OTHERS</p>

        <a href="/settings">⚙️ Settings</a>

      </div>

    </div>
  )
}

export default SideBar