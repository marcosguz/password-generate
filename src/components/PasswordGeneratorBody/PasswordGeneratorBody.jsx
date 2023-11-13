import { generatePassword } from "../../lib/password";
import s from './style.module.css';

export function PasswordGeneratorBody(props) {
    const submit = (e) => {
        e.preventDefault();
        const formData = {};
        const form = new FormData(e.currentTarget).forEach((value, key) => {
            formData[key] = value;
        });

        props.onSubmit(generatePassword(formData));
    }

    return (
        <form onSubmit={submit} className={s.root}>
            <div className={s.grid_container}>
                <div className={s.grid_item}>
                    <label htmlFor="sizes">Size</label>
                    <select name="size" id="sizes" defaultValue={15}>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                </div>
                <div className={s.grid_item}>
                    <label htmlFor="uppercase">Upercase</label>
                    <input name="uppercase" type="checkbox" id='uppercase' defaultChecked />
                </div>
                <div className={s.grid_item}>
                    <label htmlFor="numbers">Numbers</label>
                    <input name="number" type="checkbox" id='numbers' defaultChecked />
                </div>
                <div className={s.grid_item}>
                    <label htmlFor="specials">Specials</label>
                    <input name="special" type="checkbox" id='specials' defaultChecked />
                </div>
            </div>

            <div className={s.btn_container}>
                <button type='submit' className={s.btn_generate}>Generate</button>
            </div>
        </form>
    );
}