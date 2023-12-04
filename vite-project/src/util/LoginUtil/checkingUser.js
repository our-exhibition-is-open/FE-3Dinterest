export function checkingUser(enteredId, enteredPw) {
    const idFlag = false;
    const pwFlag = false;
    
    const storedUsers = JSON.parse(localStorage.getItem("storedUserData"));
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