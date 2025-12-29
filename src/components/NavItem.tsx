import Nav from 'react-bootstrap/Nav';

interface NavItemProps {
  icon: string;
  label?: string;
  href?: string;
  className?: string;
  iconClassName?: string;
}

export default function NavItem({
  icon,
  label,
  href,
  className = 'text-dark',
  iconClassName = 'fs-4',
}: NavItemProps) {
  return (
    <Nav.Link href={href} className={className}>
      <i className={`bi bi-${icon} me-3 ${iconClassName}`} />
      {label}
    </Nav.Link>
  );
}
