/* eslint-disable react/prop-types */
import style from "./Posts.module.scss";
export default function Posts({ onClick }) {
  return (
    <div>
      <h1>Posts</h1>
      <button className={style.btn}>Xem chi tiết</button>
      <button onClick={onClick}>Change Color</button>
    </div>
  );
}
