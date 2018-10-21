import React from 'react';
import PropTypes from "prop-types";

import Intro from './components/StateLiftupIntro';
import TemperatureCalculator from './components/tempCalculators/part1/TemperatureCalculator';

import './LessonStateLiftup.css';
import NavMenu from "../NavMenu";

const LessonStateLiftup = ({title}) => {
  return (
      <div className="row">
          <div className="col-3.5">
              <NavMenu />
          </div>
          <div className="col">
              <Intro title={title}/>
              <div className="lesson-parts">
                  <TemperatureCalculator />
              </div>
          </div>
      </div>
  );
};

LessonStateLiftup.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonStateLiftup;
