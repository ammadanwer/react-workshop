import React from 'react';
import PropTypes from "prop-types";

import Intro from './components/UserDataIntro';
import PracticeUserData from './components/PracticeUserData';
import Countries from "../../../util/countries";

class LessonUserData extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            countries: Countries
        };

    }
    render(props)
    {
        return (
            <div className="lesson-container">
                <Intro title={this.state.title}/>
                <div className="lesson-parts">
                    <PracticeUserData countries={this.state.countries.map(((countries, index) =>
                            countries.label
                    ))}/>
                </div>
            </div>
        );
    }
}

LessonUserData.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonUserData;
