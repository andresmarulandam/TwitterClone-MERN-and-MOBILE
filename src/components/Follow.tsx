import { Button } from 'react-bootstrap';
import User from './User';

export default function Follow() {
  return (
    <User>
      <div className="m-1">
        <Button variant="dark"> Follow</Button>
      </div>
    </User>
  );
}
