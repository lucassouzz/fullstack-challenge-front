import { useState } from 'react'
import { Home } from './Home/index.jsx'
import { Login } from './Login/index.jsx'
import { Signup } from './Signup/index.jsx'

export function App() {

    const [user, setUser] = useState()

    if (user) {
        return <Home />
    }

    return window.location.pathname === '/signup'
        ? <Signup signInUser={setUser} />
        : <Login signInUser={setUser}/>
    
    // return user ? <Home /> : <Login signInUser={setUser} />

}