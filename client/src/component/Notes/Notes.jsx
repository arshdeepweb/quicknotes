import React, { useContext, useEffect, useState } from 'react'
import { QuickContext } from '../../context/Context'
import { useNavigate } from 'react-router-dom'

const Notes = () => {

  const {notes,setData,setIsEditing,setEditingId, deleteNote,isSearching,allNotes} = useContext(QuickContext)
  // const [showNotes, setShowNotes] = useState(!isSearching?notes:allNotes)
  const navigate = useNavigate()

  useEffect(() => {
    
    console.log(notes);
    
  }, [notes])


  const editHandler = (item) =>{
    setData({
      title:item.title,
      note:item.note
    })
    setIsEditing(true)
    setEditingId(item._id)
    navigate('addnote')
  }

  

  return (
    <>
      <div className='max-[330px, 23vw] w-[1024px] m-auto flex flex-col '>
        <h2 className='text-4xl font-bold text-[#5333ec]'>All Notes</h2>
        <hr className='bg-[#5333ec] h-1 w-[100%] my-2' />
        {notes.length==0?
        <div>
          <p>Please Write or Add your first Note...</p>
        </div>:
        <div className='flex flex-wrap gap-4 my-4'>
          {allNotes.map((item, index) => {
            return (
              <div key={index} className='border-2 border-solid border-[#5333ec] px-4 py-2 rounded-md'>
                <h3 className='text-2xl font-bold text-[#5333ec]'>{item.title}</h3>
                <p className=' inline-block w-[150px] overflow-hidden text-ellipsis whitespace-nowrap'>{item.note}</p>
                <div className='flex gap-4'>
                <button className='border-2 border-solid  border-[#5333ec] text-[#5333ec] py-1 px-3 hover:bg-[#5333ec] hover:text-white transition-all rounded-md' onClick={()=>editHandler(item)}>Edit</button>
                <button className='border-2 border-solid  border-[#ec3333] text-[#ec3333] py-1 px-3 hover:bg-[#ec3333] hover:text-white transition-all rounded-md' onClick={()=>{deleteNote(item._id)}}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      }
      </div>
    </>
  )
}

export default Notes