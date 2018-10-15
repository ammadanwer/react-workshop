import React from 'react';

import "./PracticeUserData.css";
import TextInput from "./TextInput";
import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";
import DropDown from "./DropDown";
class PracticeUserData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: props.countries,
            name: '',
            gender: '',
            education: [],
            country: '',
            error_message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        if(event.target.type == "checkbox")
        {
            if(event.target.checked)
            {
                this.setState({'education': [...this.state.education, event.target.value]},()=>{console.log(this.state);});
            }
            else
            {
                this.setState({'education': this.state.education.filter(e => e !== event.target.value)});
            }
        }
        else
        {
            this.setState({[event.target.name]: event.target.value},()=>{console.log(this.state);});
        }

    }
    onSubmit(event) {
        event.preventDefault();
        if(this.state.name == "" || this.state.gender == "" || this.state.country == "" || this.state.education.length == 0)
            this.setState({'error_message': "All Fields are Mandatory"});

    }

    render() {
        return(
        <section className="lesson-practice-user-data info-panel">
            <h2>User Signup Form</h2>
            <form>
                <strong>{this.state.error_message}</strong>
                <TextInput name="name" title="Name" placeholder="Enter your name" eventHandler={this.handleChange}/>
                <RadioButtons title="Gender" name="gender" radiob={["Male", "Female"]} eventHandler={this.handleChange}/>
                <Checkboxes title="Education" name="education" checkboxes={["Graduate", "Post Grad"]} eventHandler={this.handleChange}/>
                <DropDown title="Country" name="country" countries={this.state.countries} eventHandler={this.handleChange}/>
                <input type="submit" value="Sign Up" onClick={this.onSubmit}/>
            </form>
        </section>
        );
    }
}

export default PracticeUserData;
