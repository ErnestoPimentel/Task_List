import { createContext, useContext, useState } from "react";
import { login as loginService } from '../services/authService';
import { clearAuth, getStoreAuth, saveAuth } from '../store/authStorage';

const AuthContext = createContext(null);
debugger

export function AuthProvider({children}){
    const [user, setUser] = useState(() => getStoreAuth());
    const [loading, setLoading] = useState(false);

    const login = async(username, password) => {
        setLoading(true);

        try{
            const authenticatedUser = await loginService (username, password);

            saveAuth(authenticatedUser);
            setUser(authenticatedUser);

            return authenticatedUser;
        }
        finally{
            setLoading(false);
        }
    };

    const logout = () => {
        clearAuth();
        setUser(null);
    };

    const value = {
        user,
        loading,
        isAuthenticated: Boolean(user),
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);

    if(!context)
        throw new Error('useAuth debe utilizarse dentro de AuthProvider.');

    return context;
}