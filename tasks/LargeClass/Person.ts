export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
}

export class Person {
  private _name: string;

  private _age: number;

  private _gender: Gender;

  constructor(name: string, age: number, gender: Gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public displayInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get gender(): Gender {
    return this._gender;
  }
  public set gender(value: Gender) {
    this._gender = value;
  }
}
