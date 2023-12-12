import styles from './SignUp.module.scss';

export function SignUp() {
  return (
    <div className={styles.sign_up__form}>
      <form>
        <h2>LogIN/SignUP</h2>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
