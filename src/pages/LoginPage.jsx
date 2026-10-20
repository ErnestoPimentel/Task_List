import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function LoginPage(){
    const {login,loading} = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        setError('');

        try{
            await login(username, password);
            navigate('/');
        }
        catch(loginError){
            setError(loginError.message);
        }
    };

    return(
        <main className="login-page">
            <section className="login-card">
                <div className="login-brand">
                    <div className="brand-icon">
                        ✓
                    </div>
                    <span>TaskFlow</span>
                </div>
                <div className="login-header">
                    <span className="page-eyebrow">
                        Bienvenido
                    </span>
                    <h1>
                        Inicar sesión
                    </h1>
                    <p>
                        Accede a tu espacio de trabajo.
                    </p>
                </div>
                {
                    error && (
                        <div className="alert alert-danger" role = "alert">
                            {error}
                        </div>
                    )
                }
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Usuario
                        </label>
                        <input id="username" type="text" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">
                            Contraseña
                        </label>
                        <input id="password" type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? 'Iniciando sesión' : 'Iniciar sesión'}
                    </button>
                </form>
            </section>
        </main>
    );
}

export default LoginPage;