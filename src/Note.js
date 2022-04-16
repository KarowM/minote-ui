import './Note.css';
import {Card} from 'react-bootstrap';

function Note() {
    return (
      <div className='note'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Note Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default Note;