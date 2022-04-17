import './Note.css';
import {Card} from 'react-bootstrap';

function Note(props) {
    return (
      <div className='note'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.body}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default Note;