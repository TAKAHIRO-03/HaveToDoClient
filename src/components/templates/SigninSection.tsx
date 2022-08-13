import React from "react";
import { Link } from "react-router-dom";

const SigninSection = () => {
  return (
    <main className="signin">
      <p>テストテキストテストテキストテストテキスト</p>
      <ul>
        <li>
          <Link to="/login">メールアドレスでログイン</Link>
        </li>
        <li>
          <Link to="/signup">アカウント作成</Link>
        </li>
        <li>
          <Link to="/">戻る</Link>
        </li>
      </ul>
    </main>
  );
};

export default SigninSection;
