import { useForm } from 'react-hook-form';
import './register.css';
import { Link } from 'react-router-dom';
import { ConnectServer } from '../../server/connectServer';


export default function Register() {

    const {register, handleSubmit} = useForm();

    const createUser = async ({name,lastName, email, password}: {
        name: string,
        lastName: string,
        email: string,
        password: string
    
    }) =>{

        const data = await ConnectServer().create({name, lastName, email, password})
        
        if(data.status === 201){
            window.location.href = '/'
        }
    }
    

    return (
        <main id="register">

            <section>

             
               <div id='FormPage'>
                    <div>
                        <h1>Register</h1>
                        <p>Make your registration now</p>
                    </div>

                    <form onSubmit={handleSubmit(createUser)}>
                        <div className='nameAndLats'>
                            <div >
                                <label htmlFor="name">Nome</label>
                                <input type="name" id="name" {...register('name')} />
                            </div>
                            <div>
                                <label htmlFor="lastName">LastName</label>
                                <input type="lastName" id="lastName" {...register('lastName')} />
                            </div>
                        </div>
                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" {...register('email')} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" {...register('password')} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="password">Confrim Password</label>
                            <input type="password" id="password" {...register('password')} />
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>

                    <div className='links'>
                        <p>Return to

                            <Link to="/"> login</Link>
                        </p>
                    </div>
               </div>

               <img src="/images2.jpg" alt="" />

            </section>

        </main>
    );
}