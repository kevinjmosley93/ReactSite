import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuButton from './Menu';


const Header = styled.header`
  background-color: #788A5C;
`

const NavLinks = styled.span`
  height: 100%;
  margin-left: auto;
  margin-right: 0;
  width: 100%;
`

const NavLink = styled(Link)`
  margin-right: 1rem;
  margin-left: 1rem;
  font-size: 1.3rem;
  height: 100%;
  color: black;
  text-decoration: none;
  &:hover {
     color: #F5F8D9;
     transition: all .4s ease-in-out;
  }
`
const img = <img alt='logo' src='https://cdn.shopify.com/s/files/1/0445/8201/1039/files/0FBF5F3F-52D6-4435-8B77-2E181C54A127_x70.png?v=1598475106'/>

const Nav = () => {
    
return (
  <Header>
    <div className='container'>
            <AppBar title={img} color='transparent' position='static'>
        <Toolbar >
                {img}
          <NavLinks style={{ display: 'flex', justifyContent: 'space-between' }}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About Me</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink>
              <MenuButton />
            </NavLink>
          </NavLinks>
            </Toolbar>        
        </AppBar>
    </div>
  </Header>
    )
}

export default Nav