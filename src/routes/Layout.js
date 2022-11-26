import {Outlet, Link} from 'react-router-dom'


const Layout=()=>{
    return(
        <>
            <nav>              
                <p><Link to='/calculator' className="App-link link-routes">Calculator</Link></p>
                <p><Link to='/contacts' className="App-link link-routes">Contacts</Link></p>                          
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout;