const stringifyDate = (date) => {
    const options = { day: 'numeric', month:'short', year:'numeric'};
    const newDate = !date ? "undefined" :
                    new Date(Date.parse(date).toLocalDateString('en-GB', options));
    return newDate;                
}


const update = (node) => {
    let addressBookData = addressBookList.find(personData => personData._id == node.id)
    if(!addressBookData) return;
    localStorage.setItem('editEmp', JSON.stringify(addressBookData));
    window.location.replace(site_properties.add_book_page);

}