const emailValidation = (email)=>{
    const emailPattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    return emailPattern.test(email)
}

module.exports = emailValidation