import React, { useCallback, useRef } from 'react'
import { Container, Content, Background, AnimationContainer, Titles, LinkForgot } from './styles';
import { Form } from '@unform/web'
import { FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/ToastContext';
import { Link, useHistory } from 'react-router-dom';

interface SignInFormata {
   email: string;
   password: string;

}

const SignIn: React.FC = () => {
   const history = useHistory();
   const formRef = useRef<FormHandles>(null);
   // const { signIn } = useContext(AuthContext);
   const { signIn } = useAuth();
   const { addToast } = useToast();

   const handleSubmit = useCallback(async (data: SignInFormata) => {
      try {
         const schema = Yup.object().shape({
            email: Yup.string()
               .required('E-mail obrigatorio')
               .email('Digite um e-mail valido'),
            password: Yup.string()
               .min(6, 'No minimo 6 digitos')
         });
         await schema.validate(data, {
            abortEarly: false
         });
        
         await signIn({
            email: data.email,
            password: data.password,
         })
         
         history.push('/dashboard')

      } catch (error) {
         if (error instanceof Yup.ValidationError) {
            const errors = getValidationErrors(error);
            formRef.current?.setErrors(errors)
         }

         addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description: 'Ocorreu um erro ao fazer login, cheque as credenciais'
         })

      }

   },
      [signIn, addToast])
   return (
      <Container>
         <Background />
         <Content>
            <AnimationContainer>

               <Titles>
                  <strong>Olá, seja
                      bem-vindo!</strong>
                  <span>Para acessar a plataforma, faça seu login.</span>

               </Titles>

               <Form ref={formRef} onSubmit={handleSubmit}>
                  <strong className="title">E-Mail</strong>
                  <Input placeholder="E-Mail"
                     name="email"
                     icon={FiMail} />
                  <strong className="title">Password</strong>
                  <Input placeholder="Password"
                     type="password"
                     name="password"
                     icon={FiLock} />
                  <Button type="submit">ENTRAR</Button>

                  <LinkForgot >
                     <span className="">Esqueceu seu login ou senha? Clique</span>
                     <Link to="/"> aqui</Link>
                  </LinkForgot>
               </Form>
            </AnimationContainer>
         </Content>


      </Container>
   )

}



export default SignIn;