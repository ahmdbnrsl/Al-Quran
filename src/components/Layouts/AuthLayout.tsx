import Input from '.././Elements/Input.tsx';
import Button from '.././Elements/Button.tsx';
import Label from '.././Elements/Label.tsx';
import { FaUserCheck } from 'react-icons/fa6';
import { MdLogin } from "react-icons/md";
import { Link } from 'react-router-dom';

export default ({type}: {type?: string}) => {
    return (
        <form className="auth-box">
            <h1 className="title">القرآن الكريم</h1>
            <p className="sub-title mb-5">Alquranqu</p>
            <Title type={type}/>
            <NameInput type={type}/>
            <div className="input-group">
                <Input 
                text="name"
                identify="username"
                />
                <Label
                inputFor="username"
                >masukan nama pengguna</Label>
            </div>
            <div className="input-group">
                <Input
                text="name"
                type="password"
                identify="password"
                />
                <Label
                inputFor="password"
                >masukan password</Label>
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
        return (
            <div className="input-group">
                <Input 
                text="name"
                identify="fullname"
                />
                <Label
                inputFor="fullname"
                >masukan nama lengkap</Label>
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