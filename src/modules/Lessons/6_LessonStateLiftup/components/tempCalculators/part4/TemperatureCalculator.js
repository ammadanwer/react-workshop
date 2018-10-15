import React, { Component } from 'react';
import FormHolder from './FormHolder';
import BoilingNotice from './BoilingNotice';

class TemperatureCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
      f_temperature: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.f_handleChange = this.f_handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      temperature: event.target.value,
      f_temperature:  eval(event.target.value * 9/5 + 32)

    });
  }
  f_handleChange(event) {
        this.setState({
            f_temperature: event.target.value,
            temperature: eval((event.target.value - 32) * 5/9 ),
        });
    }

  render() {
    const { temperature, f_temperature } = this.state;

    return (
        <section className="lesson-calculator info-panel">
          <h2>Temperature Calculator</h2>

          <div className="form-holder calculator">
            <FormHolder label="Celsius" temp_value={temperature} handler={this.handleChange}/>
            <FormHolder label="Fahrenheit" temp_value={f_temperature} handler={this.f_handleChange}/>
            <BoilingNotice temperature={temperature}/>
          </div>
        </section>
    );
  }
}

export default TemperatureCalculator;
