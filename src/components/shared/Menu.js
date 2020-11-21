import React, { useState } from 'react'

const MenuButton = () => {
    const [menuClick, setMenuClick] = useState(true)
    const handleClick = () => setMenuClick(!menuClick)
    if (menuClick) {
        return (
        <div onClick={handleClick}>
            <i style={{ fontSize: '1.5em' }} class="fas fa-dollar-sign"><small style={{ marginLeft: '.4em', fontSize: '.8rem' }}> Menu</small></i>
        </div>
    )
    } else {
        return (
            <div onClick={handleClick}>
                <i style={{ fontSize: '1.5em' }} class="fas fa-times" onClick={() => {
                    console.log('menu click')
            }} />
        </div>
        )
    }
    
}

export default MenuButton
