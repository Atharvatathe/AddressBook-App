//UC 5
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
   
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new AddressBook()).name = name.value;
            textError.textContent="";
        }catch (e){
            textError.textContent = e;
        }
    });

});

window.addEventListener('DOMContentLoaded', (event) => {
    const address = document.querySelector('#address');
    const addressError = document.querySelector('.text-error');
    address.addEventListener('input-address',function(){
        if(address.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new AddressBook()).address = address.value;
            addressError.textContent="";
        }catch (e){
            addressError.textContent = e;
        }
    });
});

const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.text-error');
    zip.addEventListener('input', function () {
        if (zip.value.length == 0) {
            zipError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).zip = zip.value;;
            zipError.textContent = "";
        } catch (e) {
            zipError.textContent = e;
        }
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.text-error');
    phone.addEventListener('input',function(){
        if(phone.value.length == 0){
            phoneError.textContent = "";
            return;
        }
        try{
            (new AddressBook()).phone = phone.value;
            textError.textContent="";
        }catch (e){
            phoneError.textContent = e;
        }
    });
});

//UC6
const save = () => {
    try{
        let addressBookData = createAddressBook();
        createAndUpdateStorage(addressBookData);
    }catch(e){
        return;
    }
}

const createEmployeePayroll = () => {
    let addressBookData = new AddressBook();
    try{
        addressBookData.name = getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }

    addressBookData.address = getInputValueById('#address');
    addressBookData.phone = getInputValueById('#phone');
    addressBookData.name = getInputValueById('#name');
    addressBookData.zip = getInputValueById('#zip');
    addressBookData.city = getInputValueById('[name=city]');
    addressBookData.state = getInputValueById('[name=state]');
    
    alert(addressBookData.toString());
    return addressBookData;            
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

//UC 8

function createAndUpdateStorage(addressBookData){

    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));

    if(addressBookList != undefined){
        addressBookList.push(addressBookData);
    } else{
        addressBookList = [addressBookData]
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList",JSON.stringify(addressBookList))
}


//UC-9
const resetForm = () => {
    setValue('#name','');
    setValue('#phone','');
    setValue('#address','');
    setValue('#city','');
    setValue('#state','');
    setValue('#zip','');
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

