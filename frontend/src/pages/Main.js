import React, { useEffect, useState } from "react";

import api from "../services/api";

import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import { Link } from "react-router-dom";
import "./Main.css";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: { user: match.params.id }
      });
      setUsers(response.data);
    }
    loadUsers();
  }, [
    match.params.id
  ]); /*Executa toda vez que o id do user logado for alterardo*/

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      /*O Segundo paramatro de uma requisição post é o body somente o terceiro simboliza o header*/
      headers: { user: match.params.id }
    });
    setUsers(users.filter(user => user.id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      /*O Segundo paramatro de uma requisição post é o body somente o terceiro simboliza o header*/
      headers: { user: match.params.id }
    });
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>
      {users.length > 0 ? (
        users.map(user => (
          <ul key={user._id}>
            <li>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>
              <div className="buttons">
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="like" />
                </button>
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="dislike" />
                </button>
              </div>
            </li>
          </ul>
        ))
      ) : (
        <div className="empty"> Acabou :(</div>
      )}
    </div>
  );
}
