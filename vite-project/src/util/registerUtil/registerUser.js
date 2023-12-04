export function registerUser(enteredId, enteredPw) {
  const userData = { id: enteredId, pw: enteredPw };
  console.log(userData);

  let storedUserData = JSON.parse(localStorage.getItem("storedUserData"));
  console.log(storedUserData);
  if (!storedUserData) {
    storedUserData = [];
  }

  if (storedUserData.find((user) => user.id === enteredId)) {
    return false;
  } else {
    storedUserData.push(userData);
    console.log(storedUserData);
    localStorage.setItem("storedUserData", JSON.stringify(storedUserData));
    return true;
  }
}

