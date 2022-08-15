import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./css/HaveToDoNavbar.css";

const HaveToDoNavbar = () => {
  return (
    <Menu right>
      <Link to="/">HaveTodoとは</Link>
      <Link to="/">履歴</Link>
      <Link to="/">パスワード変更</Link>
      <Link to="/">決済方法</Link>
      <Link to="/">ログアウト</Link>
      <Link to="/">退会</Link>
      <Link to="/">利用規約</Link>
      <Link to="/">プライバシーポリシー</Link>
      <Link to="/">特定商取引法に基づく表記</Link>
      <Link to="/">お問い合わせ</Link>
    </Menu>
  );
};

export default HaveToDoNavbar;
