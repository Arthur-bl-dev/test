import Main from "./pages/Main";
import styles from './assets/styles/global.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Main />
      </div>
    </div>
  );
}

export default App;
