import React from 'react';
import PropTypes from 'prop-types';

import Intro from './components/StateLifeHooksIntro';
import LessonState from './components/LessonState';
import LessonHooks from './components/LessonHooks';
import NavMenu from "../NavMenu";

const LessonStateLifeHooks = ({title}) => {
  return (
      <div className="row">
          <div className="col-3.5">
              <NavMenu />
          </div>
          <div className="col">
              <Intro title={title} />
              <div className="lesson-parts">
                  <LessonState />
                  <LessonHooks />
              </div>
          </div>
      </div>
  );
};

LessonStateLifeHooks.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonStateLifeHooks;
