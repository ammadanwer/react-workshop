import React from 'react';
import PropTypes from 'prop-types';

import Intro from './components/LessonContPresIntro';
import SearchResults from './components/SearchResults';
import NavMenu from "../NavMenu";

const LessonContainerPresentational = ({title}) => {
  return (
      <div className="row">
          <div className="col-3.5">
              <NavMenu />
          </div>
          <div className="col">
              <Intro title={title}/>
              <div className="lesson-parts">
                  <SearchResults />
              </div>
          </div>
      </div>
  );
};

LessonContainerPresentational.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonContainerPresentational;
