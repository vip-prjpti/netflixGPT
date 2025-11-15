const checkValidData = (email,password, fullName, isSignInForm) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullName = isSignInForm? true : /^[A-Za-z ]{1,25}$/.test(fullName);

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!isFullName) return "Name only includes alphabets";
    return null;
};

export default checkValidData;