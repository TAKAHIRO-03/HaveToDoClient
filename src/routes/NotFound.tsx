import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <h2>ページが見つからねえよ。こんちきしょー。</h2>
      <p>テストテキストテストテキストテストテキスト</p>
      <Link to="/">戻る</Link>
    </main>
  );
}