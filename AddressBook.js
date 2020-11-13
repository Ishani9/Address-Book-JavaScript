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
  
    try{
      let contact = new Contact("Ishani", "Mhatre", "IN", "MUMBAI", "MH", 400001, 1122334455, "isss@gmail.com");
      console.log((contact.toString()));
    }
     catch (error) {
      console.error(error);
    }
}