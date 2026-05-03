import React from 'react'
import './GitHubProfile.css'

const GitHubProfile = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="profile-container">
        <div className="skeleton"></div>
      </div>
    )
  }

  if (!data) {
    return <div className="profile-container">No data available</div>
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={data.avatar_url} alt={data.name} className="avatar" />
        
        <h1 className="name">{data.name}</h1>
        <p className="username">@{data.login}</p>
        
        {data.bio && <p className="bio">{data.bio}</p>}
        
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{data.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-value">{data.following}</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat">
            <span className="stat-value">{data.public_repos}</span>
            <span className="stat-label">Repos</span>
          </div>
        </div>

        {data.location && (
          <p className="location">📍 {data.location}</p>
        )}

        <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="github-btn">
          Visit Profile
        </a>
      </div>
    </div>
  )
}

export default GitHubProfile


// make me a basic github profile section in dark mode with yellow theme make sure to keep the ui as minimal as possible but that looks modern