import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Note from './Note';
import { useEffect, useMemo, useState } from 'react';


function App() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
    .then(response => response.json())
    .then(response => setNotes(response));
  }, []);

  const calcNotesToShow = (() => {
    if (notes.length) {
      return notes.map(n => <Note title={n.title} body={n.body} />);
    }
    return <Note title='No notes found!' body='' />;
  });

  return (
    <div>
    <div className='main-navbar main-title'>
      MiNote
    </div>
    {calcNotesToShow()}
    </div>
  );
}

export default App;
