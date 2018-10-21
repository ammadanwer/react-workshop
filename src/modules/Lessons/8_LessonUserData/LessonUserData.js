import React from 'react';
import PropTypes from "prop-types";

import Intro from './components/UserDataIntro';
import PracticeUserData from './components/PracticeUserData';
import NavMenu from "../NavMenu";

const LessonUserData = ({title}) => {
  return (
      <div className="row">
          <div className="col-3.5">
              <NavMenu />
          </div>
          <div className="col">
              <Intro title={title}/>
              <div className="lesson-parts">
                  <PracticeUserData />
              </div>
          </div>
      </div>
  );
};

LessonUserData.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonUserData;
