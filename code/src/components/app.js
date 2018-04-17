import React from "react"
import Form from "./form"
import Item from "./item"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 1, done: false, text: "wash" },
        { id: 2, done: false, text: "clean" }
      ]
    }
  }

  handleNewListItem = (text) => {
    const toDos = this.state.items
    toDos.push({ id: Date.now(), done: false, text: text })
    this.setState({
      items: toDos

    })
  }

   handleChecking = () => {
     this.setState({
       done: !this.state.done
     })
   }

   render() {
     return (

       <div>
         {this.state.items.map(listItem => (
           <Item
             key={listItem.id}
             text={listItem.text}
             done={listItem.done}
             function={this.handleChecking} />
         ))}

         <Form addToList={this.handleNewListItem} />
       </div>

     )
   }
}

export default App
