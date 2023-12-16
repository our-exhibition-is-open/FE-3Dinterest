export function checkingUser(enteredId, enteredPw) {
    
    const storedUsers = JSON.parse(localStorage.getItem("storedUserData"));
    console.log(storedUsers);
    console.log(enteredId + " " + enteredPw)
    const foundUser = storedUsers.find(user => user.id === enteredId);
    console.log("foundUser : " + foundUser);
    if(foundUser && foundUser.pw === enteredPw)
    {
        return true;
    }
    else
    {
        return false;
    }
    

}