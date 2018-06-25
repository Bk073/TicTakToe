import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    return (
      <div>
        <input
          type="button"
          onClick={() => {
            this.setState({
              value: "x"
            });
          }}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default Square;
