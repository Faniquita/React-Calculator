import {Outlet, Link} from 'react-router-dom'
import '../App.css'


const NoPage=()=>{
    return(
        <>
            <h1 className='text-erro'>404</h1>
            <p><Link to='/' className="App-link link-routes">Voltar</Link></p>
        </>               
    )
}

export default NoPage;