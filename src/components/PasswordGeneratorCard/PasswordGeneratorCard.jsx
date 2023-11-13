import { PasswordGeneratorHeader } from '../PasswordGeneratorHeader/PasswordGeneratorHeader';
import { PasswordGeneratorBody } from '../PasswordGeneratorBody/PasswordGeneratorBody';
import { PasswordGeneratorFooter } from '../PasswordGeneratorFooter/PasswordGeneratorFooter';
import s from './style.module.css';
import { useState } from 'react';

export function PasswordGeneratorCard() {
    const [password, setPassword] = useState("Amazing Password");

    return (
        <div className={s.root}>
            <div className={s.main}>
                <PasswordGeneratorHeader />
                <PasswordGeneratorBody onSubmit={setPassword} />
            </div>
            <PasswordGeneratorFooter password={password} />
        </div>
    );
}