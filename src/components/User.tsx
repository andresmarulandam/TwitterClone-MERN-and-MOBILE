import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import UserContext from '../containers/UserContext';

interface UserProps {
  className?: string;
  children?: React.ReactNode;
}

export default function User({ children, className = '' }: UserProps) {
  const { user } = useContext(UserContext);
  return (
    user && (
      <div
        className={`d-flex bg-light justify-content-between align-items-center px-3 py-2 rounded-pill ${className}`}
      >
        <div>
          <Image src={user.photo} roundedCircle />
        </div>
        <div className="d-flex flex-column">
          <strong>{user.name}</strong>
          <span>@{user.username}</span>
        </div>
        {children}
      </div>
    )
  );
}
