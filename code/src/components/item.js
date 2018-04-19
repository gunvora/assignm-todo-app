import React from "react"

class Item extends React.Component {

  handleCheckboxChange = () => {
    this.props.function(this.props.index)
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.handleCheckboxChange} />
        {this.props.text}
      </div>
    )
  }

}

export default Item
