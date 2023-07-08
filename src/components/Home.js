import Notes from "./Notes";
import AddNote from "./addNote"
const Home = () => {
  return (
    <div className='container my-3'>
      <h2 className='text-center'>Add a Note</h2>
        <AddNote/>
      <h2 className='text-center my-3'>Your Notes</h2>
      <Notes/>
    </div>
  );
};

export default Home;
