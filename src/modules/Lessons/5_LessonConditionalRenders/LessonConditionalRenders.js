import React from 'react';
import PropTypes from 'prop-types';

import Intro from './components/ConditionalRenderIntro';
import ConditionalRenderPractice from './components/ConditionalRenderPractice';
import NavMenu from "../NavMenu";

const LessonConditionalRenders = ({title}) => {
  return (
      <div className="row">
          <div className="col-3.5">
              <NavMenu />
          </div>
          <div className="col">
              <Intro title={title} />
              <div className="lesson-parts">
                  <ConditionalRenderPractice />
              </div>
          </div>
      </div>
  );
};

LessonConditionalRenders.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonConditionalRenders;
