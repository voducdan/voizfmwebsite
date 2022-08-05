export const validatePhoneNumber = (str) => {
    const re = RegExp(/^[0-9]{4,49}$/)
    return re.test(str)
}

export const validateOTP = (str) => {
    const re = RegExp('[0-9]{6}\\b')
    return re.test(str)
}