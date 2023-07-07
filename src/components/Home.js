import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
const Home = () => {
    const a = useContext(NoteContext);
    useEffect(() => {

      a.update();
      // eslint-disable-next-line
    }, []);
    
    
  return (
    <div>this is Home {a.state.name}
    </div>
  )
}

export default Home