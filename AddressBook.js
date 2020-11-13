{
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
        this._firstName=firstName;
      }
      set lastName(lastName){
        this._lastName=lastName;
      }
      set address(address){
        this._address=address;
      }
      set city(city){
        this._city=city;
      }
      set state(state){
        this._state=state;
      }
      set zip(zip){
        this._zip=zip;
      }
      set phoneNumber(phoneNumber){
        this._phoneNumber=phoneNumber;
      }
      set emailId(email){
        this._emailId=email;
      }

        //toString() method
        toString() {
            return "First Name: " + this.firstName + ", Last Name: " + this.lastName + 
            ", Address: " + this.address + ", City: " + this.city + ", State: " + this.state +
            ", Zip: " + this.zip + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
        }
    }

    let contact=new Contact("Ishani", "Mhatre", "IN", "MUMBAI", "MH", 400001, 1122334455, "isss@gmail.com");
    console.log((contact.toString()));
}