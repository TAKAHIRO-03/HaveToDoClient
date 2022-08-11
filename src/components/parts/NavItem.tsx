type NavItemProps = {
  children: React.ReactNode;
};

const NavItem = (props: NavItemProps) => {
  return <li className="nav-item">{props.children}</li>;
};

export default NavItem;
