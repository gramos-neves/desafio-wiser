import { ValidationError } from 'yup';

interface Errors {
    [key: string]: string;
}


export default function getValidationErrors(err: ValidationError): Errors {
    const validationErros: Errors = {};

    err.inner.forEach((error) => {
        let erro = error.path;
        validationErros[erro ?? 'Erro'] = error.message;
    });

    return validationErros;
}