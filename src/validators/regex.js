const testEmail = (value)=> {
    const emailPatern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g
    return emailPatern.test(value)
}
const textCodeMelli = (event)=>{
    
}
const testPhoneNumber = (event)=>{

}
export default{
    testEmail,
    textCodeMelli,
    testPhoneNumber
}