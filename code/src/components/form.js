import React from "react"
import "./form.css"

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      newToDo: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      newToDo: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    // to avoid re-load
    event.preventDefault()
    this.props.addToList(this.state.newToDo)
    this.setState({
      newToDo: ""
    })
  }

  // cons handleNewToDo = (event) => {
  //   cons itemText = (event.target.text)
  // }

  render() {
    return (

      <div className="form-container">

        <form onSubmit={this.handleOnSubmit}>
          <label className="form-input">
            <input
              type="text"
              placeholder="New todo.."
              name="toDo"
              value={this.state.newToDo}
              onChange={this.handleOnChange} />
          </label>

          <button>Add</button>

        </form>

      </div>

    )
  }
}

export default Form
