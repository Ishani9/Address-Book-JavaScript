{
    const prompt = require('prompt-sync')();

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
  
     //UC 3 and 7

  //Create an array to store contacts
  let ContactsArray = new Array();

  //Adding a new contact to Contact array and check duplicate entry before adding to array
  let addContactsToAddressBook = () => {
      let firstName = prompt("Enter First Name: ");
      let lastName = prompt("Enter Last Name: ");
      
      if (ContactsArray.find((contact) => (contact.firstName==firstName && contact.lastName==lastName))) {
        console.log("Warning!!! Given contact is already present in address book");
        return;
        }
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

  //view All Contacts available in Array
  let viewContacts = () => {
    console.log("Total contacts in array are: " + ContactsArray.length);
    console.log(ContactsArray.toString()+ "\n");
  }

  //UC 4
  let editContact = () => {
    console.log("Total contacts in array are: " + ContactsArray.length);
    if (ContactsArray.length == 0) {
        console.log("No contacts Available in Array");
        return;
    }
    let firstNameEdit = prompt("Enter the first name whose contact you want to edit: ");
    let newFirstName = prompt("Enter new first name: ");
    let check = ContactsArray.find((contact) => contact.firstName == firstNameEdit);
    if (check == undefined) {
        console.log("No contact with given first name");
        return;
    }
    else {
        ContactsArray.find((contact) => contact.firstName == firstNameEdit).firstName = newFirstName;
    }
  }

  //UC 5
  let deleteContact = () => {
    console.log("Total contacts in array are: " + ContactsArray.length);
    if (ContactsArray.length == 0) {
        console.log("No contacts Available in Array");
        return;
        }
    let firstNamedelete = prompt("Enter the first name whose contact you want to delete: ");
    let check = ContactsArray.find((contact) => contact.firstName == firstNamedelete);
    if (check == undefined) {
        console.log("No contact with given first name");
        return;
        }
    else {
        //Filtering out contacts whose doesnt matches with given FirstName
        ContactsArray = ContactsArray.filter((contact) => contact.firstName != firstNamedelete);
        }
    }

    //UC 6
    //Find total number of contacts
    let countOfContacts = () => {
        console.log("Total Number of contacts are : " +ContactsArray.reduce((totalCount, contact) => totalCount += 1, 0));
    }

    //UC 8
    //Searching a given contact in State
    let searchContactInState = () => {
        let stateName = prompt("Enter state name : ");
        let firstName= prompt("Enter contact first name : ")
        let searchcontactByState = ContactsArray.filter(contact => contact.state == stateName).find(contact => contact.firstName == firstName);
        console.log("First contact found in given state : \n" +searchcontactByState);
    }
    //Searching a given contact in City
    let searchContactInCity = () => {
        let cityName = prompt("Enter City name: ");
        let firstName= prompt("Enter contact first name: ")
        let searchcontactByCity = ContactsArray.filter(contact => contact.city == cityName).find(contact => contact.firstName == firstName);
        console.log("First contact found in given city : \n" +searchcontactByCity);
    }

    //UC 9
    //View given contacts in State
    let veiwContactInState = () => {
        let stateName = prompt("Enter state name: ");
        let viewcontactsByState = ContactsArray.filter(contact => contact.state == stateName).map(contact=> contact);
        if (viewcontactsByState.length > 0) console.log("Contacts found in given state : \n" + viewcontactsByState.toString());
        else console.log("No contacts found for given state");
    }
    //View given contacts in City
    let veiwContactInCity = () => {
        let cityName = prompt("Enter City name: ");
        let viewcontactsByCity = ContactsArray.filter(contact => contact.city == cityName).map(contact=> contact);
        if (viewcontactsByCity.length > 0) console.log("Contacts found in given City : \n" + viewcontactsByCity.toString());
        else console.log("No contacts found for given city");
    }

  console.log("Welcome To AddressBook Program through JavaScript");
    let choice = 0;
    do {
        console.log("0 : Exit \n1 : Add contact \n2 : Edit a Contact \n3 : View all Contacts\n4 : Delete contact ");
        console.log("5 : Number of contacts \n6 : Search contacts in State \n7 : Search contacts in City ");
        console.log("8 : View Persons by State \n9 : View Persons by City");
        choice = prompt("Enter your choice : ");
        switch (parseInt(choice)) {  
            case 0:
                console.log("EXITING ... ");
                break;
             case 1:
                addContactsToAddressBook();
                break;
            case 2:
                editContact();
                break;
            case 3:
                viewContacts();
                break;
            case 4:
                deleteContact();
                break;
            case 5:
                countOfContacts();
                break;
             case 6:
                searchContactInState();
                break;
             case 7:
                searchContactInCity();
                break;
            case 8:
                veiwContactInState();
                break;
            case 9:
                veiwContactInCity();
                break;
            default:
                console.log("WRONG CHOICE! Try again...");
                break;
        }

    } while (choice != 0);
}