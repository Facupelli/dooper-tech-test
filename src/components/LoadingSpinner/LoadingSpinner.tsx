import s from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={s.container}>
      <div className={s.spinner}></div>
    </div>
  );
}
