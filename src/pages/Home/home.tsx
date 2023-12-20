
import { useContextGlobas } from '../../context/contextpage';
import './home.css'
export default function Home() {

    const {user} = useContextGlobas()

    const {name,  email, password, lastName} = {
        name: user?.name,
        email: user?.email,
        lastName: user?.lastName,
        password: user?.password
    }

    return (
        <main id='Home'>
            <nav className="navBar">

                <strong>Logo da empresa</strong>

                <ul>
                    <a href="">Home</a>
                    <a href="">Sobre</a>
                    <a href="">Parcerias</a>
                    <a href="">Contato</a>
                    <a onClick={()=> window.location.href="/"} href='#'>Sair</a>

                    <div className="user">
                        <span >{`${name} ${lastName}`}</span>
                    </div>

                </ul>
            </nav>

            <article>

                <div>
                    <h1>Seja bem vindo!</h1>
                    <p>Esse é o nosso site, aqui você pode encontrar tudo sobre a nossa empresa, 
                        sobre os nossos produtos e serviços, e também pode entrar em contato conosco.</p>

                    <p className='textUser'>Veja os dados do seu usuario a baixo: </p>      

                    <ul className='data_user'>
                        <li>Nome: <span>{name}</span></li>
                        <li>LastName: <span>{lastName}</span></li>
                        <li>Email: <span> {email}</span></li>
                        <li>Password: <span>{password}</span></li>
                    </ul> 
                </div>  
                
            </article>
        </main>
    );
}