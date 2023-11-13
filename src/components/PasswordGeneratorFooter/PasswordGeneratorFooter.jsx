import s from './style.module.css';
import copyPaste from '../../assets/copy-paste.svg';
import { useState } from 'react';

export function PasswordGeneratorFooter(props) {
    const [isClipboardCopied, setClipboardCopied] = useState(false);

    function saveInClipboard() {
        navigator.clipboard.writeText(props.password);
        setClipboardCopied(true);
        setTimeout(() => {
            setClipboardCopied(false);
        }, 5000);
    }

    return (
        <div className={s.root} onClick={saveInClipboard}>
            <div className={s.copy}>
                <div className={s.text}>
                    {props.password}
                </div>
                <img src={copyPaste} alt="Copy paste Icon" className={s.icon} />
            </div>
            <div className={s.copied}>{isClipboardCopied ? 'Copied..!' : null}</div>
        </div>
    );
}