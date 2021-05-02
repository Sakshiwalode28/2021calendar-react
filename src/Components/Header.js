import React, { useState, useContext } from 'react'
import { Collapse, Navbar, NavbarToggler} from "reactstrap";
import { Link, Redirect } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'




const Header = () => {
    const context = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (

        <Navbar className="navbar navbar-expand-lg text-black navbar-light sticky-top" style={{
            backgroundColor: '#e5e5e5',
            width: ' 100%',

        }}>
            <div className="container-fluid">

                <Link to='/' className="navbar-brand mb-0 h1" style={{ fontSize: 48, marginRight: 70 }}>
                    CALANDER 2021</Link>
                <NavbarToggler onClick={toggle} > &#9776;</NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                   
                    <ul className='navbar-nav text-left' style={{ fontSize: 30 }}>
                        {context.user ? ( 
                            <>
                        <Link to='/calendar' ><li className='nav-item nav-link'>Calendar</li></Link>
                        <Link onClick={()=> context.setUser(null)}  to='/'><li className='nav-item nav-link' >Logout</li> </Link>
                        
                        </>
                        ) : (
                        <>
                        <Link to='/register'><li className='nav-item nav-link'>Register</li></Link>
                        <Link to='/login'><li className='nav-item nav-link'>Login</li></Link>
                        </>
                        )}
                        
                       
                    </ul>
                    
                </Collapse>
            </div>

        </Navbar>


    )
}

export default Header;




{/* 
<NavbarBrand> <Link to='/' className='ml-5 color-black'> CALANDER 2021 </Link></NavbarBrand>

<Button color="primary" onClick={toogle} > &#9776;</Button>
<Collapse isOpen={isOpen} navbar>
<Nav className='ml-auto text-left mt-5' navbar>
    <NavItem>
        <Link to='/register'>
            Register
        </Link>
    </NavItem>
    <NavItem>
        <Link to='/login' >
          Login
        </Link>
    </NavItem>
    <NavItem>
        <Link >
            Logout
        </Link>
    </NavItem>
</Nav>
</Collapse> */}





