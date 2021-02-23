import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../service/api';

interface AuthState {
    user: object;
}

interface SignInCredentials {
    email: string;
    password: string;
}


interface AuthContextData {
    user: object;
    signIn(credentiaçs: SignInCredentials): Promise<boolean>;
    signOut(): void
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const user = localStorage.getItem('@Wise:user');
        if (user) {
            return { user: JSON.parse(user) }
        }

        return {} as AuthState
    });


    const signIn = useCallback(async ({ email, password }) => {

        const response = await api.get('/88181dce-95dc-49fe-982e-607d43126294')
        const user = response.data;
        if (user.email !== email || user.password !== password) {
            throw new Error()
        }
        localStorage.setItem('@Wise:user', JSON.stringify(user));
        setData({ user })
        return false
    }, [])


    const signOut = useCallback(() => {
        localStorage.removeItem('@Wise:user');
        setData({} as AuthState)
    }, [])

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    /*
    if (!context) {
        throw new Error('useAuth must be used within an AuthPovider')
    }*/

    return context
}


export { AuthContext, AuthProvider, useAuth };