import { Image } from 'react-bootstrap';

interface UserProps {
  className?: string;
  children?: React.ReactNode;
}

export default function User({ children, className = '' }: UserProps) {
  return (
    <div
      className={`d-flex bg-light justify-content-between align-items-center px-3 py-2 rounded-pill ${className}`}
    >
      <div>
        <Image src="https://placehold.co/50x50" roundedCircle />
      </div>
      <div className="d-flex flex-column">
        <strong>Andrés Marulanda</strong>
        <span>@andresmarulandam</span>
      </div>
      {children}
    </div>
  );
}
