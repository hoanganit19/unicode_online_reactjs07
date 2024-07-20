import style from "./Products.module.scss";
console.log(style);
export default function Products() {
  return (
    <div className="products">
      <h1>Products</h1>
      <button className={style.btn}>Xem chi tiết</button>
      <div className={`${style.btn}`}>
        <button className={`${style["btn-primary"]}`}>Click me</button>
      </div>
    </div>
  );
}
