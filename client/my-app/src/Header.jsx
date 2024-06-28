import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    })
    .then(response => {
      if (response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      } else {
        console.error('Profile fetch failed:', response.status);
        setUserInfo(null); // Başarısız olduğunda userInfo'yi null olarak ayarla
      }
    })
    .catch(error => {
      console.error('Profile fetch error:', error);
      setUserInfo(null); // Hata durumunda userInfo'yi null olarak ayarla
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
    .then(response => {
      if (response.ok) {
        setUserInfo(null); // Başarılı logout sonrası userInfo'yi null olarak ayarla
      } else {
        console.error('Logout failed:', response.status);
        // İsterseniz kullanıcıya bir hata mesajı gösterebilirsiniz
      }
    })
    .catch(error => {
      console.error('Logout error:', error);
      // İsterseniz kullanıcıya bir hata mesajı gösterebilirsiniz
    });
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {username ? (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
