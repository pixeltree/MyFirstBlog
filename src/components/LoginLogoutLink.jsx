import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return <button onClick={() => loginWithRedirect()} className="whitespace-nowrap">
    Login
  </button>
};

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })} className="whitespace-nowrap">
      Log out
    </button>
  )
}

const LoginLogoutLink = () => {
  const { isAuthenticated } = useAuth0()

  return (
    isAuthenticated ?
      <LogoutButton /> :
      <LoginButton />
  )
}

export default LoginLogoutLink
