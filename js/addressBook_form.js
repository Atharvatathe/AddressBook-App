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


