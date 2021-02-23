import React from 'react';

import { fireEvent, render, waitFor } from '@testing-library/react'
import Input from '../../components/Input';


jest.mock('@unform/core', () => {
    return {
        useField() {
            return {
                fieldName: 'email',
                defaultValue: '',
                error: '',
                registerField: jest.fn()
            }
        }
    }
})


describe('Input component', () => {

    it('should ne able to render an input', () => {
        const { getByPlaceholderText } = render(
            <Input name="email" placeholder="E-Mail" />
        )

        expect(getByPlaceholderText('E-Mail')).toBeTruthy()
    })


    it('should render hihlight on input focus', async () => {
        const { getByPlaceholderText, getByTestId } = render(
            <Input name="email" placeholder="E-Mail" />
        )

        const inputElement = getByPlaceholderText('E-Mail')
        const containerElement = getByTestId('input-container');

        fireEvent.focus(inputElement);

        await waitFor(() => {
            //  expect(containerElement).toHaveStyle('borde-color:#989FDB')
            expect(containerElement).toHaveStyle('color:#989FDB ')
        })


    })

})

