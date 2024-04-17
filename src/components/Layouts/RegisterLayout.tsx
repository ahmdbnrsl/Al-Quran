import Input from '.././Elements/Input.tsx';
import Button from '.././Elements/Button.tsx';
import Label from '.././Elements/Label.tsx';
import { FaUserCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <form className="auth-box">
            <h1 className="title">القرآن الكريم</h1>
            <p className="sub-title mb-5">Alquranqu</p>
            <h1 className="auth-title flex"><FaUserCheck className="mr-2 mt-3"/> Daftar</h1>
            <div className="input-group">
                <Input text="name"/>
                <Label
                inputFor="fullname"
                >masukan nama lengkap</Label>
            </div>
            <div className="input-group">
                <Input text="name"/>
                <Label
                inputFor="username"
                >masukan nama pengguna</Label>
            </div>
            <div className="input-group">
                <Input
                text="name"
                type="password"
                />
                <Label
                inputFor="password"
                >masukan password</Label>
            </div>
            <div className="px-5 w-full">
                <Button>Daftar</Button>
            </div>
            <p className="foot-auth">Sudah punya akun? <Link className="navigate-auth" to="/masuk">Masuk</Link></p>
        </form>
    )
}