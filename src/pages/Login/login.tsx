import { useForm } from 'react-hook-form';
import './login.css';
import { Link } from 'react-router-dom';


export default function Login() {

    const {register, handleSubmit} = useForm();
    const authUser = (e: object) =>{
        console.log(e)
    }

    return (
        <main id='login'>

            <section>

                <img src="/images.jpeg" alt="" />
             
               <div id='FormPage'>
                    <div>
                        <h1>Sejá Bem Vindo!</h1>
                        <p>Enter your credentials to login</p>
                    </div>

                    <form onSubmit={handleSubmit(authUser)}>
                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" {...register('email')} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" {...register('password')} />
                        </div>
                        <button type="submit">Login</button>
                    </form>

                    <div className='links'>
                        
                        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                    </div>
               </div>
            </section>

        </main>
    );
}