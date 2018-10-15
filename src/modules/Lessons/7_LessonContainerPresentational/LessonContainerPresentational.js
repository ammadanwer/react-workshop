import React from 'react';
import PropTypes from 'prop-types';

import Intro from './components/LessonContPresIntro';
//import SearchResults from './components/SearchResults';
import Card from './components/Card'
const LessonContainerPresentational = ({title}) => {
  return (
      <div className="lesson-container">
        <Intro title={title}/>
        <div className="lesson-parts">
          <Card img_path={"https://upload.wikimedia.org/wikipedia/en/d/d2/PIA_new_logo.jpg"}
          departure={"KHI"}
          arrival={"LHR"}
          duration_h={2}
          duration_m={30}
                stops={"NonStop"}
          />
        </div>
      </div>
  );
};

LessonContainerPresentational.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonContainerPresentational;
