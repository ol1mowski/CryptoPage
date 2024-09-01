import s from './LogActions.module.scss';

function LogActions() {
  return (
    <ul className={s.logActionsList}>
      <li className={s.logActionsList__item}>Sign Up</li>
      <li
        className={`${s.logActionsList__item} ${s.logActionsList__item_login}`}
      >
        Log in
      </li>
    </ul>
  );
}

export default LogActions;
