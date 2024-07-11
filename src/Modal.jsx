import React, { useState } from 'react';

const Modal = ({ setModalIsOpen, addModal, setAddModal, setEditModal, editModal , todo , MyTodo , editItem , setEditItem }) => {

  const [data, setData] = useState('')
  const [editData, setEditData] = useState(editItem)
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setAddModal(false);
    setEditModal(false);
    
  };

  const handleAddTodo = () => {
    setModalIsOpen(false);
    setAddModal(false);
    setEditModal(false);
    MyTodo([...todo, data]);
  }

  const handleEditTodo = () => {
    setModalIsOpen(false);
    setAddModal(false);
    setEditModal(false);
    MyTodo([...todo, editItem]);
    setEditItem(null);
  }

  return (
    <>
      {addModal && (
        <div className="modal bg-gray-400 opacity-75 h-screen w-screen absolute top-0 flex flex-col justify-center items-center">
          <div className="card bg-white rounded w-2/3 h-52 flex flex-col justify-center items-center">
            <h3 className="my-2"  >Add Todo</h3>
            <input
              className="bg-purple-200 px-4 py-2 rounded"
              type="text"
              placeholder="Todo"
              onChange={(e) => setData(e.target.value)}
            />
            <div className="btns flex justify-around my-4">
              <button
                className="bg-purple-700 px-4 py-2 rounded mx-4 text-white"
                onClick={handleAddTodo}
              >
                Add Todo
              </button>
              <button
                className="bg-red-700 px-4 py-2 rounded text-white"
                onClick={handleCloseModal}
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
      {editModal && (
        <div className="modal bg-gray-400 opacity-75 h-screen w-screen absolute top-0 flex flex-col justify-center items-center">
          <div className="card bg-white rounded w-2/3 h-52 flex flex-col justify-center items-center">
            <h3 className="my-2">Edit Todo</h3>
            <input
              className="bg-purple-200 px-4 py-2 rounded"
              type="text"
              value={editItem}
              onChange={(e) => setEditItem(e.target.value)}
            />
            <div className="btns flex justify-around my-4">
              <button
                className="bg-purple-700 px-4 py-2 rounded mx-4 text-white"
                onClick={handleEditTodo}
              >
                Edit Todo
              </button>
              <button
                className="bg-red-700 px-4 py-2 rounded text-white"
                onClick={handleCloseModal}
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;