{
    //Regex patterns
    const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
    const ADDRESS_REGEX = RegExp('^[A-Za-z]{4,}$');
    const PINCODE_REGEX = RegExp('^[1-9]{1}[0-9]{5}$' || '^[1-9]{1}[0-9]{2}\\s[0-9]{3}$');
    const PHONE_NUMBER_REGEX = RegExp('^[1-9]{1}[0-9]{9}$');
    const EMAIL_REGEX = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$")
    
    class Contact {
        //variables
        firstName;
        lastName;
        address;
        city;
        state;
        zip;
        phoneNumber;
        email;
  
        constructor(...params) {
            this.firstName = params[0];
            this.lastName = params[1];
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
            this.zip = params[5];
            this.phoneNumber = params[6];
            this.email = params[7];
        }
  
        //getters and setters
        get firstName(){
          return this._firstName;
        }
        get lastName(){
          return this._lastName;
        }
        get address(){
          return this._address;
        }
        get city(){
          return this._city;
        }
        get state(){
          return this._state;
        }
        get zip(){
          return this._zip;
        }
        get phoneNumber(){
          return this._phoneNumber;
        }
        get email(){
          return this._email;
        }
        set firstName(firstName){
          if(NAME_REGEX.test(firstName))
              this._firstName = firstName;
          else 
            throw "Incorrect first name"
        }
        set lastName(lastName){
          if(NAME_REGEX.test(lastName))
              this._lastName = lastName;
          else throw "Incorrect Last name"
        }
        set address(address){
          if(ADDRESS_REGEX.test(address))
              this._address = address;
          else throw "Incorrect address"
        }
        set city(city){
          if(ADDRESS_REGEX.test(city))
              this._city = city;
          else throw "Incorrect city"
        }
        set state(state){
          if(ADDRESS_REGEX.test(state))
              this._state = state;
          else throw "Incorrect state"
        }
        set zip(zip){
          if(PINCODE_REGEX.test(zip))
            this._zip = zip
          else throw "Incorrect zip"
        }
        set phoneNumber(phoneNumber){
          if(PHONE_NUMBER_REGEX.test(phoneNumber))
            this._phoneNumber = phoneNumber
          else throw "Incorrect phone Number"
        }
        set email(email){
          if(EMAIL_REGEX.test(email))
            this._email = email
          else throw "Incorrect email"
        }
  
        //toString() method
        toString() {
            return "First Name: " + this.firstName + ", Last Name: " + this.lastName + 
            ", Address: " + this.address + ", City: " + this.city + ", State: " + this.state +
            ", Zip: " + this.zip + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
        }
    }
  
     //UC 3

  //Create an array to store contacts
  let ContactsArray = new Array();

  //Adding a new contact to Contact array
  let addContactsToAddressBook = () => {
      let firstName = prompt("Enter First Name: ");
      let lastName = prompt("Enter Last Name: ");
      let address = prompt("Enter Address: ");
      let city = prompt("Enter City Name: ");
      let state = prompt("Enter State Name: ");
      let zip = prompt("Enter Zip Code: ");
      let phoneNumber = prompt("Enter Phone Number: ");
      let emailId = prompt("Enter Email id: ");
      try {
          let contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, emailId);
          ContactsArray.push(contact);
          console.log("Contact Added successfully to array : \n " + contact.toString());
      } 
      catch (e) {
          console.error(e);
      }
  }
  console.log("Welcome To AddressBook Program through JavaScript");
    let choice = 0;
    //calling addContactsToAddressBook method to add new contact to Array
    do {
        choice = prompt("Enter \n1 : Add contact \n0 : Exit: \n");
        if (choice == 1) {
            addContactsToAddressBook();
        }
    } while (choice != 0);
}