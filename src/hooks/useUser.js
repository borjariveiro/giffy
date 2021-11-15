import Context from "context/UserContext";
import { useCallback, useContext } from "react";
import loginService from 'services/login'

export default function useUser() {
  const { jwt, setJWT } = useContext(Context)

  const login = useCallback(({ username, password }) => {
    loginService({username, password})
      .then(jwt => {
        console.log(jwt);
        setJWT(jwt)
      })
      .catch(err => {
        console.log(err);
      })
  }, [setJWT])

  const logout = useCallback(() => {
    setJWT('test')
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout
  }
}
