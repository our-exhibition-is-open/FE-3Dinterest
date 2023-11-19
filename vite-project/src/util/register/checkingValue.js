export function checkingValue(value, type) {
    if(type == "id")
    {
        const checkingExp = /^[a-zA-z0-9]{4,12}$/;
        return checkingExp.test(value["id"])
    }
    if(type == "pw")
    {
        const checkingExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        return checkingExp.test(value["pw"])
    }
    if(type == "pwValid")
    {
        if(value["pw"] === value["pwValid"] && value["pwValid"] != "")
            return true;
        else
            return false;
    }
    if(type == "email")
    {
        const checkingExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        return checkingExp.test(value["email"])
    }
    return 0;
}