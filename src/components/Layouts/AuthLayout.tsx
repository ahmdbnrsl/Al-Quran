import Input from '.././Elements/Input.tsx';
import Button from '.././Elements/Button.tsx';
import Label from '.././Elements/Label.tsx';
import { validate } from '../.././service/Validation/EventChange.ts';
import { submitValidate } from '../.././service/Validation/EventSubmit.ts';
import { login } from '../.././service/Auth/Login.ts';
import { register } from '../.././service/Auth/Register.ts';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaUserCheck } from 'react-icons/fa6';
import { MdLogin } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ZodError } from 'zod';

export default ({type}: {type?: string}) => {
    
    const [username, setUsername] = useState<string>("Masukan nama pengguna");
    const [password, setPassword] = useState<string>("Masukan kata sandi");
    
    const usernameChange = (e: ChangeEvent<HTMLInputElement>): void => validate(e, "username", (msg: string): void => setUsername(msg));
    const passwordChange = (e: ChangeEvent<HTMLInputElement>): void => validate(e, "password", (msg: string): void => setPassword(msg));
    
    const HandleSubmit = (e: FormEvent<HTMLInputElement | HTMLFormElement>): void => {
        e.preventDefault();
        const isValidate = submitValidate(e, type);
        if(isValidate) {
            if(type === "daftar") {
                register(e);
            } else {
                login();
            }
        }
    }
    
    return (
        <form className="auth-box" onSubmit={HandleSubmit}>
            <h1 className="title">القرآن الكريم</h1>
            <p className="sub-title mb-5">Alquranqu</p>
            <Title type={type}/>
            <NameInput type={type}/>
            <div className="input-group">
                <Input 
                text="name"
                identify="username"
                onChanges={usernameChange}
                />
                <Label
                inputFor="username"
                >{username}</Label>
            </div>
            <div className="input-group">
                <Input
                text="name"
                type="password"
                identify="password"
                onChanges={passwordChange}
                />
                <Label
                inputFor="password"
                >{password}</Label>
            </div>
            <ButtonType type={type}/>
            <Footer type={type}/>
        </form>
    )
}

function ButtonType({type}: {type?: string}) {
    if(type === "daftar") {
        return (
            <div className="px-5 w-full">
                <Button>Daftar</Button>
            </div>
        )
    } else {
        return (
            <div className="px-5 w-full">
                <Button>Masuk</Button>
            </div>
        )
    }
}

function Title({type}: {type?: string}) {
    if(type === "daftar") {
        return (
            <h1 className="auth-title ml-6 flex">
                <FaUserCheck className="mr-2 mt-4 text-2xl"/>
                Daftar
            </h1>
        )
    } else {
        return (
            <h1 className="auth-title ml-6 flex">
                <MdLogin className="mr-2 mt-4 text-2xl"/>
                Masuk
            </h1>
        )
    }
}

function NameInput({type}: {type?: string}) {
    if(type === "daftar") {
        const [name, setName] = useState<string>("Masukan nama lengkap");
        const nameChange = (e: ChangeEvent<HTMLInputElement>): void => validate(e, "name", (msg: string): void => setName(msg));
        return (
            <div className="input-group">
                <Input 
                text="name"
                identify="fullname"
                onChanges={nameChange}
                />
                <Label
                inputFor="fullname"
                >{name}</Label>
            </div>
        )
    } else {
        return <></>
    }
}

function Footer({type}: {type?: string}) {
    if(type === "daftar") {
        return (
            <p className="foot-auth">Sudah punya akun? <Link className="navigate-auth" to="/masuk">Masuk</Link></p>
        )
    } else {
        return (
            <p className="foot-auth">Belum punya akun? <Link className="navigate-auth" to="/daftar">Daftar</Link></p>
        )
    }
}