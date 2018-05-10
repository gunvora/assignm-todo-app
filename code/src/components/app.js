import React from "react"
import Form from "./form"
import Item from "./item"
import "./app.css"

class App extends React.Component {

  constructor(props) {
    super(props)
    const toDoList = JSON.parse(localStorage.getItem("saveItems"))
    if (toDoList) {
      this.state = { items: toDoList }
    } else {
      this.state = {
        items: [
          { id: 1, done: false, text: "wash" },
          { id: 2, done: false, text: "clean" }
        ]
      }
    }
  }

  handleNewListItem = (text) => {
    const toDos = this.state.items
    toDos.push({ id: Date.now(), done: false, text: text })
    localStorage.setItem("saveItems", JSON.stringify(toDos))
    // to restart:  localStorage.removeItem("saveItems", JSON.stringify(toDos));
    this.setState({
      items: toDos
    })
  }

   handleChecking = (index) => {
     const toDos = this.state.items
     const toDoItemUpdate = toDos[index]
     toDoItemUpdate.done = !toDoItemUpdate.done
     toDos[index] = toDoItemUpdate
     this.setState({ items: toDos })
     console.log(this.state)
   }

   render() {
     return (

       <div className="app-container">

         <div className="app-list">
           <Form addToList={this.handleNewListItem} />

           {this.state.items.map((listItem, index) => (
             <Item
               index={index}
               key={listItem.id}
               text={listItem.text}
               done={listItem.done}
               function={this.handleChecking} />
           ))}
         </div>
       </div>

     )
   }
}

export default App
