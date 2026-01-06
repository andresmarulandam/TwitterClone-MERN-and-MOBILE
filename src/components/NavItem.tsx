import styled from '@emotion/styled';
import Nav from 'react-bootstrap/Nav';

interface NavItemProps {
  icon: string;
  label?: string;
  href?: string;
  className?: string;
  iconClassName?: string;
}

const NavLinkStyled = styled(Nav.Link)(({ theme }) => {
  const color = theme.colors['gray-900'];
  const backgroundColor = theme.colors['gray-200'];

  return {
    borderRadius: theme.border.radius.pill,
    color,
    paddingRight: theme.space[4],
    '&:hover': {
      backgroundColor,
      color,
    },
  };
});

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
