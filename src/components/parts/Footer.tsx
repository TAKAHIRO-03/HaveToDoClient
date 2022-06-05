import React, { Component } from "react";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-a">
          <div className="footer-ab">
            <div className="footer-aba">
              <ul>
                <li>
                  © 2022 GoodHabits Inc.
                </li>
                <li>
                  <Link to="/company">運営</Link>
                </li>
                <li>
                  <Link to="/terms">利用規約</Link>
                </li>
                <li>
                  <Link to="/pp">プライバシーポリシー</Link>
                </li>
                <li>
                  <Link to="/asct">特定商取引法に基づく表記</Link>
                </li>
                <li>
                  <a href="mailto:info@example.com"><span>お問い合わせ</span></a>
                </li>
                <li>
                  <Link to="/signin">はじめる</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
