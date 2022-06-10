export const registerFE = async ({ name, phone, email, password } = {}) => {
  const user = { name, phone, email, password };

  try {
    const res = await fetch(`http://localhost:8080/home/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(name, phone, email, password);
    return await res.json();
  } catch (err) {
    throw new Error(`Signup error in ${err}`);
  }
};

export const loginFE = async ({ email, password, role } = {}) => {
  const user = { email, password, role };

  try {
    const res = await fetch(`http://localhost:8080/home/login`, {
      method: "POST",
      // credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    throw new Error(`login error in ${err}`);
  }
};

export const logoutFE = async () => {
  try {
    const res = await fetch(`http://localhost:8080/home/logout`, {
      method: "GET",
      credentials: "include",
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const authenticate = (data, next)=>{
  if(typeof window !== "undefined"){
    localStorage.setItem('jwt',JSON.stringify(data))
    next()
  }
}

export const isAuthenticated = ()=>{
  if(typeof window == "undefined"){
    return false;
  }
  if(localStorage.getItem('jwt')){
    return JSON.parse(localStorage.getItem('jwt'))
  }
  else{
    return false;
  }
}

