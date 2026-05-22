"use client";

import { useEffect, useState } from "react";
import styles from "./profileLogin.module.css";

export default function ProfileLogin() {

  const [isLogin, setIsLogin] = useState(true);

  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("quantumUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "quantumUser",
      JSON.stringify(formData)
    );

    setUser(formData);

    alert("Quantum Profile Created");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(
      localStorage.getItem("quantumUser")
    );

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      setUser(storedUser);

      alert("Quantum Access Granted");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <main className={styles.wrapper}>

      <div className={styles.backgroundGlow}></div>

      <section className={styles.container}>

        <div className={styles.leftPanel}>
          <p className={styles.smallText}>
            Quantum Identity Gateway
          </p>

          <h1>
            QUANTUM
            <br />
            ACCESS
          </h1>

          <div className={styles.signalLine}></div>

          <p className={styles.tagline}>
            Beyond the Binary.
            <br />
            Into the Unknown.
          </p>
        </div>

        <div className={styles.rightPanel}>

          {user ? (

            <div className={styles.profileCard}>

              <div className={styles.avatar}>
                {user.username?.charAt(0)}
              </div>

              <h2>{user.username}</h2>

              <p>{user.email}</p>

              <button onClick={handleLogout}>
                Logout
              </button>

            </div>

          ) : (

            <>
              <div className={styles.toggleButtons}>

                <button
                  className={isLogin ? styles.active : ""}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>

                <button
                  className={!isLogin ? styles.active : ""}
                  onClick={() => setIsLogin(false)}
                >
                  Signup
                </button>

              </div>

              <form
                className={styles.form}
                onSubmit={
                  isLogin ? handleLogin : handleSignup
                }
              >

                {!isLogin && (
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    required
                  />
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />

                <button type="submit">
                  {isLogin
                    ? "Enter Portal"
                    : "Create Profile"}
                </button>

              </form>
            </>
          )}

        </div>

      </section>

    </main>
  );
}