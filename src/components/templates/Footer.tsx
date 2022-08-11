import { Link } from "react-router-dom";
import FooterItem from "../parts/FooterItem";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <ul className="footer-items">
          <FooterItem>© 2022 GoodHabits Inc.</FooterItem>
          <FooterItem>
            <Link to="/company">運営</Link>
          </FooterItem>
          <FooterItem>
            <Link to="/terms">利用規約</Link>
          </FooterItem>
          <FooterItem>
            <Link to="/pp">プライバシーポリシー</Link>
          </FooterItem>
          <FooterItem>
            <Link to="/asct">特定商取引法に基づく表記</Link>
          </FooterItem>
          <FooterItem>
            <a href="mailto:info@example.com">
              <span>お問い合わせ</span>
            </a>
          </FooterItem>
          <FooterItem>
            <Link to="/signin">はじめる</Link>
          </FooterItem>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
