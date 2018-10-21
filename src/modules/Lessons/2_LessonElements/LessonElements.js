import React from 'react';
import PropTypes from 'prop-types';

import EleIntro from './components/EleIntro';
import SimpleElement from './components/SimpleReactEle';
import EleRender from './components/EleRender';
import EleUpdation from './components/EleUpdation';
import NavMenu from "../NavMenu";

const LessonElements = ({title}) => {
  return (

      <div className="row">
          <div className="col-3.5">
              <NavMenu />
          </div>
          <div className="col">
              <EleIntro title={title} />
              <div className="lesson-parts">
                  <SimpleElement />
                  <EleRender />
                  <EleUpdation />
              </div>
          </div>
      </div>
  );
};

LessonElements.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonElements;
