import { history } from "@/router/history";
import { increment } from "@/store/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import styles from "./index.module.css";
const Main: React.FC = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      main
      <button
        onClick={() => {
          history.push("/home");
        }}
        className={styles.btn}
      >
        home
      </button>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        加一
      </button>
    </>
  );
};
export default Main;
