import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { QuickContext } from '../../context/Context';

const Navbar = () => {
  const { notes, setNotes, allNotes, setAllNotes, isSearching, setIsSearching } = useContext(QuickContext);
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState("");

  const searchNote = () => {
    if (searchValue === "") {
      setAllNotes(notes);
      setIsSearching(false);
      return;
    }

    const filterBySearch = allNotes.filter((item) =>{
      setIsSearching(true);

      if(item.title.toLowerCase().includes(searchValue.toLowerCase())){
        return item;
      }
    }
      );
  

    setAllNotes(filterBySearch);
  };

  useEffect(() => {
    searchNote();
  }, [searchValue, notes]);

  return (
    <>
      <div className='flex w-[100%] items-center justify-evenly h-[70px] bg-[#ffffff]'>
        <div className='flex gap-8 items-center justify-center'>
          <h2 className='text-4xl font-serif font-bold text-[#5333ec]'>
            <a href="/">Quick Note</a>
          </h2>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `${isActive ? "text-[#5333ec]" : "text-black"} font-serif`
            }
          >
            Home
          </NavLink>
        </div>
        <div>
          <input
            type="text"
            placeholder='Search Notes'
            className='w-[20vw] border-2 border-solid border-[#5333ec] text-[#5333ec] py-1 px-2 rounded-md outline-none'
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
        <div>
          <button className='border-2 border-solid border-[#5333ec] text-[#5333ec] py-1 px-3 hover:bg-[#5333ec] hover:text-white transition-all rounded-md' onClick={()=>navigate('login')}>Sign in</button>
        </div>
      </div>
      <hr className='bg-[#5333ec] h-1 my-2' />
    </>
  );
};

export default Navbar;
