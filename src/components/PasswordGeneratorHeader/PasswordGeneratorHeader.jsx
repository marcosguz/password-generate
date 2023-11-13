import s from './style.module.css';
import lockIcon from '../../assets/lock.svg';

export function PasswordGeneratorHeader() {
    return (
        <div className={s.root}>
            <div className={s.title}>Password Generator</div>
            <img src={lockIcon} alt="Lock icon" className={s.icon}/>
        </div>
    );
}