import React from 'react';

import Intro from './components/APIIntegrationIntro';
import PracticeAPIIntegration from './components/PracticeAPIIntegration';
import NavMenu from "../NavMenu";
import '../Lessons.css';
const LessonAPIIntegration = ({title, match}) => {
    console.log(match);
  return (
      <div className="row">
          <div className="col-3.5">
              <NavMenu />
          </div>
          <div className="col">
              <Intro title={title} />
              <div className="lesson-parts">
                  <PracticeAPIIntegration match={match}/>
              </div>
          </div>
      </div>
  );
};

export default LessonAPIIntegration;
