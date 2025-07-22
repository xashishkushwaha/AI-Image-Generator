import React, { useState } from "react";

//INTERNAL IMPORT
import { LoginLogo, IoLogInOutline } from "../Components/SVG/index";
import { Header, Input } from "../Components/index";

const login = () => {
  const [auth, setAuth] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassward: "",
  });

  return (
    <div>
      <Header />
      <div className="mb-[56px] sm:mb-0 sm:mt-[56px]">
        <div
          className="bg-zinc-800 items-center fixed shadow-xl rounded-2xl z-50 px-8 py-8 text-sm  border border-zinc-700"
          style={{
            top: "50%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            maxWidth: "330px",
            width: "100%",
            maxHeight: "85vh",
          }}
        >
          <div>
            <div className="flex flex-col text-zinc-200 text-center items-center">
              <LoginLogo />

              {auth ? (
                <div
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <Input
                    placeholder={"Email address"}
                    type="email"
                    handleChange={(e) =>
                      setLogin({ ...login, email: e.target.value })
                    }
                  />
                  <Input
                    placeholder={"password"}
                    type="text"
                    handleChange={(e) =>
                      setLogin({ ...password, email: e.target.value })
                    }
                    styleCss="1rem"
                  />
                  <button
                    onClick={() => {}}
                    className="hover:brightness-110 bg-gradient-to-t from-indigo-800 via-indigo-800 to-indigo-700 border border-indigo-800 px-4 py-1.5 rounded-lg shadow h-9 w-64 drop-shadow flex items-center justify-center mt-3"
                  >
                    Login
                  </button>
                  <p
                    style={{
                      marginTop: "1rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: ".5rem",
                      cursor: "pointer",
                    }}
                    onClick={() => setAuth(false)}
                  >
                    SingUp <IoLogInOutline />
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <Input
                    placeholder={"Name"}
                    type="text"
                    handleChange={(e) =>
                      setSignUp({ ...signUp, name: e.target.value })
                    }
                  />

                  <Input
                    placeholder={"Email address"}
                    type="email"
                    handleChange={(e) =>
                      setSignUp({ ...signUp, email: e.target.value })
                    }
                    styleCss="1rem"
                  />
                  <Input
                    placeholder={"password"}
                    type="text"
                    handleChange={(e) =>
                      setSignUp({ ...signUp, password: e.target.value })
                    }
                    styleCss="1rem"
                  />
                  <Input
                    placeholder={"confirm password"}
                    type="text"
                    handleChange={(e) =>
                      setSignUp({ ...signUp, confirmPassward: e.target.value })
                    }
                    styleCss="1rem"
                  />

                  <button
                    onClick={() => {}}
                    className="hover:brightness-110 bg-gradient-to-t from-indigo-800 via-indigo-800 to-indigo-700 border border-indigo-800 px-4 py-1.5 rounded-lg shadow h-9 w-64 drop-shadow flex items-center justify-center mt-3"
                  >
                    SingUp
                  </button>
                  <p
                    style={{
                      marginTop: "1rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: ".5rem",
                      cursor: "pointer",
                    }}
                    onClick={() => setAuth(true)}
                  >
                    Login <IoLogInOutline />
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
