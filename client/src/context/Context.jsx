import { createContext, useContext, useState } from "react";

export const QuickContext = createContext()

const QuickContextProvider = (props) =>{

  const [notes, setNotes] = useState([{_id:156468412,title:"first Note",note:"I am Arshdeep Singh bdsuvbse jbvsdb vnesubv  vlesbruvb "}])

  const [data, setData] = useState({
    title:"",
    note:""
  })

  const [isEditing, setIsEditing] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [editingId,setEditingId] = useState(null)


  const deleteNote = (itemId) =>{
    const filterNotes = notes.filter((note)=>{
        if(note._id!=itemId){
          return note
        }
    })
    setNotes(filterNotes)
  }

 

  const [allNotes, setAllNotes] = useState([])
  const contextValue = {
    notes,
    setNotes,
    data,
    setData,
    isEditing,
    setIsEditing,
    editingId,
    setEditingId,
    deleteNote,
    isSearching,
    setIsSearching,
    allNotes,
    setAllNotes
  }
  return(
    <QuickContext.Provider value={contextValue}>
      {props.children}
    </QuickContext.Provider>
  )
}

export default QuickContextProvider