import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../hooks/AuthContext';
import MockAdapter from 'axios-mock-adapter';
import api from '../../service/api';

const apiMock = new MockAdapter(api);


describe('Auth hook', () => {
    
    it('should ne able to sign in', async () => {

        apiMock.onGet('/88181dce-95dc-49fe-982e-607d43126294').reply(200, {
            "email": "gui@hotmail.com",
            "password": "1234567"
        })

        const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
            wrapper: AuthProvider
        });


        result.current.signIn({
            email: 'gui@hotmail.com',
            password: '1234567'
        })

        await waitForNextUpdate();

        expect(result.current.user).toEqual({
            email: 'gui@hotmail.com',
            password: '1234567'
        });
        
    })


})