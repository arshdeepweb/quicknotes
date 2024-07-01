import React, { useContext, useState } from 'react';
import { QuickContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

const AddNote = () => {
  const { notes, setNotes, data, setData,isEditing,editingId } = useContext(QuickContext);
  const navigate = useNavigate()
  // const [data, setData] = useState({ title: '', note: '' });

  const addNote = (event) => {
    
    event.preventDefault();
    const newID = Date.now();
    setNotes((prev) => [...prev, { _id: newID, title: data.title, note: data.note }]);
    console.log(notes);
    navigate("/")
  };

  const onChangehandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const updateNote = (event) => {
    event.preventDefault();
    setNotes((prev) =>
      prev.map((note) =>
        note._id === editingId ? { ...note, title: data.title, note: data.note } : note
      )
    );
    console.log(notes);
    navigate("/")
  }

  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='border-2 border-solid border-[#5333ec] rounded-md py-8 px-6 my-4'>
        <h2 className='text-4xl my-4 font-bold text-[#5333ec]'>{isEditing?"Update Note":"Add Note"}</h2>
        <div>
          <form onSubmit={isEditing?updateNote:addNote} className='flex flex-col gap-4'>
            <div className='flex gap-4'>
              <p className='text-xl'>Title: </p>
              <input
                type='text'
                placeholder='Enter the Title'
                value={data.title}
                name='title'
                id='title'
                onChange={onChangehandler}
                className='border-2 border-solid border-[#5333ec] outline-none rounded-md px-1 py-2'
              />
            </div>
            <div className='flex gap-4'>
              <p className='text-xl'>Note: </p>
              <textarea
                name='note'
                id='note'
                rows='10'
                cols='30'
                onChange={onChangehandler}
                value={data.note}
                className='border-2 border-solid border-[#5333ec] outline-none rounded-md'
              ></textarea>
            </div>
            <button
              className='border-2 border-solid w-[50%] m-auto border-[#5333ec] text-[#5333ec] py-1 px-3 hover:bg-[#5333ec] hover:text-white transition-all rounded-md outline-none'
              type='submit'
            >
              {isEditing ? "Update Note":"Add Note"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
