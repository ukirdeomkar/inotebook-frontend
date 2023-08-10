import Notes from "./Notes";
import CreateNote from "./CreateNote";

const Home = () => {
  return (
    <div className='container my-3'>
      <h2 className='text-center'>Add a Note</h2>
      <CreateNote />
      
      <h2 className='text-center my-3'>Your Notes</h2>
      <Notes />
    </div>
  );
};

export default Home;
