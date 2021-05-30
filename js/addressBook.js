class AddressBook{

  //getter and Settert for name
  get name() {return this._name;}
  
  set name(name){
      let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
      if(nameRegex.test(name))
          this._name = name;
      else throw 'Name is incorrect';
  }

  //getter and setter for address
  get address(){return this._address;}

  set address(address){
    let addressRegex = RegExp('^[A-Za-z]{2,}$');
    if(addressRegex.test(address))
          this._address = address;
    else throw 'Address is not valid';
  }

  //getter and setter for Phone Number
  get phone(){return this._phone;}
  set phone(phone){
    let phoneRegex = RegExp('^[0-9]{2}[\\s][789]{1}[0-9]{9}$');
    if(phoneRegex.test(phone))
          this._phone = phone;
    else throw 'Phone Number is not Invalid';      
  }

  //getter and setter for Zip code

  get zip(){return this._zip;}

  set zip(zip){
    this._zip = zip;
  }

  toString(){
    return "Name: " +this.name+ ", Address: "+this.address+ ", phone Number: "+this.phone+ ", Zop_code: "+this.zip;
  }

}