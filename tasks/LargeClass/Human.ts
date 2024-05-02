import { Enemies } from './Enemies';
import { Friends } from './Friends';
import { Person } from './Person';
import { Tasks } from './Tasks';

export class Human {
  private _person: Person;

  private _friends: Friends;

  private _enemies: Enemies;

  private _tasks: Tasks;

  constructor(person: Person) {
    this.person = person;
    this.friends = new Friends();
    this.enemies = new Enemies();
    this.tasks = new Tasks();
  }

  public get person(): Person {
    return this._person;
  }
  public set person(value: Person) {
    this._person = value;
  }
  public get friends(): Friends {
    return this._friends;
  }
  public set friends(value: Friends) {
    this._friends = value;
  }
  public get enemies(): Enemies {
    return this._enemies;
  }
  public set enemies(value: Enemies) {
    this._enemies = value;
  }

  public get tasks(): Tasks {
    return this._tasks;
  }
  public set tasks(value: Tasks) {
    this._tasks = value;
  }
}
