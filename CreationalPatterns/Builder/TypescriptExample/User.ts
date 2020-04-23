class User {
  private name: string;
  private surname: string;

  private email: string;
  private phoneNumber: string;
  private direction: string;

  private constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  public static Make(name: string, surname: string): User {
    return new User(name, surname);
  }

  public setEmail(email: string): User {
    this.email = email;
    return this;
  }

  public setPhoneNumber(phoneNumber: string): User {
    this.phoneNumber = phoneNumber;
    return this;
  }

  public setDirection(direction: string): User {
    this.direction = direction;
    return this;
  }
}

class Main {
  main = () => {
    const user = User.Make("pepito", "perez")
      .setEmail("pepito@pepe.com")
      .setDirection("el pais de las maravillas")
      .setPhoneNumber("number phone lack");

    console.log(user);
  };
}
// create client
const main = new Main();
// execute client
main.main();
// should show user created :)
