import styles from "./index.module.css";

const Home: React.FC = () => {
  function jump(url: string) {
    window.open(url);
  }
  return (
    <div className="w-screen h-screen bg-slate-900 relative">
      <div className={styles["home-bg"]}>
        <div className="w-1/2 h-full flex flex-col justify-center items-center z-10 relative">
          <div className="text-4xl text-white font-mono font-bold my-4 mx-32 text-center leading-tight">
            Quickly build <span className="text-blue-400">React</span> APP with{" "}
            <span className="text-blue-400">Vite</span>
          </div>
          <div className="text-sm text-stone-300 font-mono mx-40">
            This template uses Vite to build React applications.
            <br />
            Use TailwindCss to process css, RTK as state manager.
          </div>
          <div className="w-4/6 mx-40 flex justify-between items-center my-4 font-mono">
            <button
              onClick={() => {
                jump("https://reactjs.org/");
              }}
              className={styles["associated-btn"]}
            >
              <div>
                <img
                  alt="React Logo"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                />{" "}
                React
              </div>
            </button>
            <button
              onClick={() => {
                jump("https://vitejs.dev/");
              }}
              className={styles["associated-btn"]}
            >
              <div>
                <img alt="Vit Logo" src="https://vitejs.dev/logo.svg" /> Vite
              </div>
            </button>
            <button
              onClick={() => {
                jump("https://tailwindcss.com/");
              }}
              className={styles["associated-btn"]}
            >
              <div>
                <img
                  alt="Tailwind Logo"
                  src="https://tailwindcss.com/favicons/favicon-32x32.png?v=3"
                />{" "}
                Tailwind CSS
              </div>
            </button>
            <button
              onClick={() => {
                jump("https://redux-toolkit.js.org/");
              }}
              className={styles["associated-btn"]}
            >
              <div>
                <img
                  alt="RTK Logo"
                  src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                />{" "}
                Redux Toolkit
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
