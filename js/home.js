let addressBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    // UC-13
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHTML();
    localStorage.removeItem('editperson');
});

const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>Zip-Code</th><th>Phone Number</th><th>Actions</th>";
    // UC-13
    if(addressBookList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for(const addressBookData of addressBookList) {
        innerHtml = `${innerHtml}
        <tr>
            <td></td>
            <td>${addressBookData._name}</td>
            <td>${addressBookData._address}</td>
            <td>${addressBookData._city}</td>
            <td>${addressBookData._state}</td>
            <td>${addressBookData._zip}</td>
            <td>${addressBookData._phone}</td>
            <td>
            <img id="${addressBookData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
            <img id="${addressBookData._id}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td>
        </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

//UC-13
const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ? JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

//UC-14 remove details
const remove = (node) => {
    let addressBook = addressBookList.find(addData => addData._id == node.id);
    if(!addressBook) return;
    const index = addressBookList
                    .map(addData => addData._id)
                    .indexOf(addressBook._id);
    addressBookList.splice(index,1);
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHTML();
}

const update = (node) => {
    let addressBook = addressBookList.find(addData => addData._id == node.id)
    if(!addressBook) return;
    localStorage.setItem('editperson', JSON.stringify(addressBook));
    window.location.replace(site_properties.add_book_page);
}

const stringifyDate = (date)=>{
    const options = {year :'numeric', month:'short', day:'numeric'}
    const newDate = !date ? "undefined" :
                    new Date(Date.parse(date)).toLocaleDateString('en-GB',options);
    return newDate;
}