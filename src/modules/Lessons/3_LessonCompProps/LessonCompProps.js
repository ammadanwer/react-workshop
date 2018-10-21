import React from 'react';
import PropTypes from 'prop-types';

import Intro from './CompPropsIntro';
import Account from './Account/Account';
import NavMenu from "../NavMenu";

const LessonCompProps = ({title}) => {
  return (
      <div className="row">
          <div className="col-3.5">
              <NavMenu />
          </div>
          <div className="col">
              <Intro title={title}/>
              <div className="lesson-parts">
                  <Account />
              </div>
          </div>
      </div>
  );
};

LessonCompProps.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonCompProps;
