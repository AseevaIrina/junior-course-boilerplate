import React from 'react';
import { toInt } from 'csssr-school-utils';

export default function InputHandler(HocedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          value: ''
        }
    }

    handleChange = (event) => {
      const { value, name } = event.target;
      const filteredValue = toInt(value);
      this.props.onChange(name, filteredValue)
      return (
        this.setState({value:filteredValue})
      )
    }

    render() {
      return (
        <>
        <HocedComponent {...this.props} handleChange={this.handleChange} />
        </>
      )
    }
  }
}
