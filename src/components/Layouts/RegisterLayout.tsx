import Input from '.././Elements/Input.tsx';
import Button from '.././Elements/Button.tsx';

export default () => {
    return (
        <form className="auth-box">
            <h1 className="title">القرآن الكريم</h1>
            <p className="sub-title mb-5">Daftar</p>
            <div className="input-group">
                <label
                htmlFor="fullname"
                className="input-label"
                >masukan nama lengkap</label>
                <Input/>
            </div>
            <div className="input-group">
                <label
                htmlFor="username"
                className="input-label"
                >masukan nama pengguna</label>
                <Input/>
            </div>
            <div className="input-group">
                <label
                htmlFor="username"
                className="input-label"
                >masukan password</label>
                <Input
                type="password"
                />
            </div>
            <Button>Daftar</Button>
        </form>
    )
}