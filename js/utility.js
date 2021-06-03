
const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(!nameRegex.test(name)) {
        throw 'Invalid Name';  
    }
}

const checkPhone = (phone) => {
    let phoneRegex1 = RegExp('^[0-9]{2}[\\s][789]{1}[0-9]{9}$');
    if(!phoneRegex1.test(phone)){ 
        throw 'Invalid Phone Number';
    }
  
}

const checkAddress = (address) => {
    let addressRegex = RegExp('^[a-zA-Z0-9_][a-zA-Z0-9_ ]{4,}$');
    if(!addressRegex.test(address)){
        throw 'Invalid Address';
    }
}

const checkZip = (zip) => {
    let zipRegex = RegExp('^[0-9]{3}[\\s][0-9]{3}$');
    if(!zipRegex.test(zip)){
        throw 'Invalid Zip-Code';
    }    
}