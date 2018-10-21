import React from 'react';

import GitDashboard from './part6/GitDashboard';

import './PracticeAPIIntegration.css'

const PracticeAPIIntegration = ({match}) => {
    console.log("fddddddddd");
    console.log(match);
  return (
      <section className="lesson-api-integration info-panel">
        <h2>Practice API Integration</h2>
        <GitDashboard match={match}/>
      </section>
  );
};

export default PracticeAPIIntegration;
