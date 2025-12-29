import { Image } from 'react-bootstrap';

export default function User() {
  return (
    <div className="d-flex bg-light justify-content-between align-items-center mx-3 px-3 py-2 rounded-pill">
      <div>
        <Image src="https://placehold.co/50x50" roundedCircle />
      </div>
      <div className="d-flex flex-column">
        <strong>Andrés Marulanda</strong>
        <span>@andresmarulandam</span>
      </div>
      <div>
        <i className="bi bi-three-dots"></i>
      </div>
    </div>
  );
}
