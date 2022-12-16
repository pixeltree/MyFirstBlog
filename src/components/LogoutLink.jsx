import { useAuth0 } from "@auth0/auth0-react"

const LogoutLink = () => {
  const { logout } = useAuth0()

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log out
    </button>
  )
}

export default LogoutLink;
