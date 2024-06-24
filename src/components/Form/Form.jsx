import React, { useState } from "react";
import "./Form.modul.css";

const Form = (props) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("physical");

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    };

    return (
        <div>
            <h3>Введите ваши данные</h3>
            <input
                className={"input"}
                type="text"
                placeholder={"Имя"}
                value={name}
                onChange={onChangeName}
            />
            <input
                className={"input"}
                type="number"
                placeholder={"Номер телефона"}
                value={phone}
                onChange={onChangePhone}
            />
            <select
                value={subject}
                onChange={onChangeSubject}
                className={"select"}
            >
                <option value={"physical"}>Физ. лицо</option>
                <option value={"legal"}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;
