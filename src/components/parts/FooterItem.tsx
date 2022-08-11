type FooterItemProps = {
  children: React.ReactNode;
};

const FooterItem = (props: FooterItemProps) => {
  return <li className="footer-item">{props.children}</li>;
};

export default FooterItem;
