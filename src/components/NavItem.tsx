import styled from '@emotion/styled';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router';

interface NavItemProps {
  icon: string;
  label?: string;
  to?: string;
  className?: string;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
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
  to,
  className = 'text-dark',
  iconClassName = 'fs-4',
  iconStyle,
}: NavItemProps) {
  return (
    <NavLinkStyled as={NavLink} to={to ?? ''} className={className}>
      <i className={`bi bi-${icon} me-3 ${iconClassName}`} style={iconStyle} />
      {label}
    </NavLinkStyled>
  );
}
