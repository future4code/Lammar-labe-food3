import { useState } from 'react'

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);
    const [isNameValid, setIsNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isCpfValid, setIsCpfValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [isPassword2Valid, setIsPassword2Valid] = useState(true)

    const onChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });

        setIsNameValid(/^.{3,}$/.test(form.name))
        setIsEmailValid(/[a-zA-Z0-9]+@[a-z]+\.[a-z]{3}/.test(form.email))
        setIsCpfValid(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/.test(form.cpf))
        setIsPasswordValid(/^.{6,}$/.test(form.password))
        setIsPassword2Valid(/^.{6,}$/.test(form.password2))
    };

    const clear = () => {
        setForm(initialState);
    };
    return [
        form,
        onChange,
        clear,
        isNameValid,
        isEmailValid,
        isCpfValid,
        isPasswordValid,
        isPassword2Valid];
};