import styled from '@emotion/styled';
import Nav from 'react-bootstrap/Nav';

interface NavItemProps {
  icon: string;
  label?: string;
  href?: string;
  className?: string;
  iconClassName?: string;
}

const NavLinkStyled = styled(Nav.Link)(
  {
    borderRadius: '800px',
    color: 'rgb(33,37,41)',
    paddingRight: '48px',
    '&:hover': {
      backgroundColor: 'rgb(248,249,250)',
      color: 'rgb(33,37,41)',
    },
  },
  ({ active }) => ({
    fontWeight: active ? 'bold' : 'normal',
  }),
);

export default function NavItem({
  icon,
  label,
  href,
  className = 'text-dark',
  iconClassName = 'fs-4',
}: NavItemProps) {
  return (
    <NavLinkStyled href={href} className={className}>
      <i className={`bi bi-${icon} me-3 ${iconClassName}`} />
      {label}
    </NavLinkStyled>
  );
}
