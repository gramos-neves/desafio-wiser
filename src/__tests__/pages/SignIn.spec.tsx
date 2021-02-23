import { fireEvent, render, wait, waitFor } from '@testing-library/react';
import SignIn from '../../pages/SignIn';
import React from 'react';

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();
const mockedAddToast = jest.fn()

jest.mock('react-router-dom', () => {
   return {
      useHistory: () => ({
         push: mockedHistoryPush
      }),
      Link: ({ children }: { children: React.ReactNode }) => children
   }
})


jest.mock('../../hooks/AuthContext', () => {
   return {
      useAuth: () => ({
         signIn: mockedSignIn
      })
   }
})


jest.mock('../../hooks/ToastContext', () => {
   return {
      useToast: () => ({
         addToast: mockedAddToast
      })
   }
})

describe('SignIn Page', () => {

   beforeEach(() => {
      mockedHistoryPush.mockClear()
   })

   it('should be able to sign', async () => {
      const { getByPlaceholderText, getByText } = render(<SignIn />);

      const emailField = getByPlaceholderText('E-Mail');
      const passworField = getByPlaceholderText('Password');
      const buttonElement = getByText('ENTRAR');

      fireEvent.change(emailField, { target: { value: 'gui@hotmail.com' } });
      fireEvent.change(passworField, { target: { value: '1234567' } });
      
      fireEvent.click(buttonElement);

      await waitFor(() => {
         expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard')
      })
   })


   it('should not be able to sign in with invalid credentials', async () => {
      const { getByPlaceholderText, getByText } = render(<SignIn />);

      const emailField = getByPlaceholderText('E-Mail');
      const passworField = getByPlaceholderText('Password');
      const buttonElement = getByText('ENTRAR');

      fireEvent.change(emailField, { target: { value: 'not-valid0email' } });
      fireEvent.change(passworField, { target: { value: '1234567' } });
      fireEvent.click(buttonElement);

      await waitFor(() => {
         expect(mockedHistoryPush).not.toHaveBeenCalled()
      })
   })



   it('should display an error if login fails', async () => {

      mockedSignIn.mockImplementation(() => {
         throw new Error()
      })


      const { getByPlaceholderText, getByText } = render(<SignIn />);

      const emailField = getByPlaceholderText('E-Mail');
      const passworField = getByPlaceholderText('Password');
      const buttonElement = getByText('ENTRAR');

      fireEvent.change(emailField, { target: { value: 'gui@gui.com.br' } });
      fireEvent.change(passworField, { target: { value: '1234567' } });
      fireEvent.click(buttonElement);

      await waitFor(() => {
         expect(mockedAddToast).toHaveBeenCalledWith(
            expect.objectContaining({
               type: 'error'
            })
         )
      })
   })



})
