import React, { useEffect, useState } from 'react'
import Modal from './Modal'

const App = () => {

  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [ todo, MyTodo ] = useState([]); // [todo ]
  const [ addModal , setAddModal ] = useState(false);
  const [ editModal , setEditModal ] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
    setAddModal(true);
  }

  const showEditModal = (id) => {
    setEditItem(id)
    MyTodo(todo.filter((item) => item !== id))
    setEditModal(true);
  }



  return (
    <div>
      <header>
        <h3>Todo</h3>
        <button className="bg-purple-700 px-4 py-2 rounded text-white" onClick={ showModal }>Add Todo</button>
        
      </header>

      <Modal
        setModalIsOpen={ setModalIsOpen }
        addModal={ addModal }
        setAddModal={ setAddModal }
        editModal={ editModal }
        setEditModal={ setEditModal }
        todo={ todo }
        MyTodo={ MyTodo }
        editItem={ editItem }
        setEditItem={ setEditItem }
      />
      
      { todo.length > 0 ? todo.map((item) => (
        <div key={ item }>
          <p>{ item }</p>
          <button className="bg-red-700 px-4 py-2 rounded text-white" onClick={ () => showEditModal(item) }>Edit Todo</button>
        </div>
      )) : <p>No items</p> }

    </div>
  )
}

export default App