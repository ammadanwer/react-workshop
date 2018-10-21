import {Component} from "react";
import classnames from "classnames";
import React from "react";
import {Link} from 'react-router-dom';
import './Lessons.css';
const LESSON_TYPES = {
    JSX: 'Introduction to JSX',
    REACT_ELEMENTS: 'React Elements',
    COMP_PROPS: 'Components and Props',
    STATE_LIFEHOOKS: 'State & Lifecycle Hooks',
    CONDITIONAL_RENDERS: 'Conditional Rendering',
    STATE_LIFTUP: 'State Lift-up',
    CONTAINER_PRESENT: 'Container vs. Presentational',
    USER_DATA: 'Handling User Data',
    API_INTEGRATION: 'API Integration',
};
const LESSON_LINKS = {
    JSX: '/lesson/jsx',
    REACT_ELEMENTS: '/lesson/elements',
    COMP_PROPS: '/lesson/components-props',
    STATE_LIFEHOOKS: '/lesson/state-lifecycle-hooks',
    CONDITIONAL_RENDERS: '/lesson/conditional-rendering',
    STATE_LIFTUP: '/lesson/state-liftup',
    CONTAINER_PRESENT: '/lesson/container-vs-presentational',
    USER_DATA: '/lesson/handling-user-data',
    API_INTEGRATION: '/lesson/api-integration',
};
class NavMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="lessons">
                <aside>
                    <ul className="lessons-list">
                        {Object.keys(LESSON_TYPES).map((aLesson) =>
                            <li key={aLesson}>
                                <Link to={LESSON_LINKS[aLesson]}>
                                <div
                                    className={classnames({
                                        'lesson-item': true,
                                        active: false
                                    })}
                                    href="javascript:void(0);">
                                    {LESSON_TYPES[aLesson]}
                                </div>
                                </Link>
                            </li>)
                        }
                    </ul>
                </aside>
            </div>);
    }
}

export default NavMenu;