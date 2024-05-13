import { Human } from './tasks/LargeClass/Human';
import { Gender, Person } from './tasks/LargeClass/Person';
import { Order } from './tasks/OrderProcessor/Order';
import { OrderProcessor } from './tasks/OrderProcessor/OrderProcessor';
import { UserC } from './tasks/UsersProcessor/UserC';
import { UserListProcessor } from './tasks/UsersProcessor/UserListProcessor';

console.log(
  `========================== User List Processor =========================`
);

const users: UserC[] = [
  new UserC({
    username: 'admin',
    email: 'admin1@gmail.com',
    password: 'admin',
    address: 'admin1 address',
  }),
  new UserC({
    username: 'sprigg4n',
    email: 'sprigg4n@gmail.com',
    password: 'sprigg4n',
    address: 'sprigg4n address',
  }),
  new UserC({
    username: 'yukki',
    email: 'yukki@gmail.com',
    password: 'yukki',
    address: 'yukki address',
  }),
];

const adminUser = new UserC({
  username: 'admin',
  email: 'admin2@gmail.com',
  password: 'admin2',
  address: 'admin2 address',
});

const userListProcessor: UserListProcessor = new UserListProcessor(users);

console.log(`First ====== `);
userListProcessor.processUserList();
userListProcessor.countAdminUsers();
userListProcessor.sendEmailToUser(
  userListProcessor.getUsers()[0],
  'Test email'
);

console.log(`Second ====== `);
userListProcessor.addUser(adminUser);
userListProcessor.processUserList();
userListProcessor.countAdminUsers();
userListProcessor.sendEmailToUser(
  userListProcessor.getUsers()[3],
  'Test email'
);

console.log(`========================== Order =========================`);
const orderProcessor = new OrderProcessor([
  new Order('order1', 14, 'customer1'),
  new Order('order2', 11, 'customer1'),
]);

orderProcessor.processOrder();

orderProcessor.makeOrder(new Order('order3', 12, 'customer1'));

orderProcessor.processOrder();

orderProcessor.giveTotalPrice();

console.log(`========================== Large Class =========================`);

const persons: Person[] = [
  new Person('Steve', 21, Gender.MALE),
  new Person('Jane', 22, Gender.FEMALE),
  new Person('Anna', 22, Gender.FEMALE),
  new Person('Roman', 21, Gender.MALE),
  new Person('Sasha', 20, Gender.MALE),
  new Person('Zhana', 22, Gender.FEMALE),
];

const human1 = new Human(new Person('John', 20, Gender.MALE));

human1.person.displayInfo();

human1.friends.addFriend(persons[0].name);
human1.friends.addFriend(persons[1].name);
human1.enemies.addEnemy(persons[2].name);
human1.enemies.addEnemy(persons[3].name);
human1.friends.addFriend(persons[4].name);
human1.enemies.addEnemy(persons[5].name);

human1.friends.displayInfo();
human1.enemies.displayInfo();

human1.tasks.addTask('task1');
human1.tasks.addTask('task2');
human1.tasks.addTask('task3');

human1.tasks.displayInfo();

console.log(`==== remove`);

human1.tasks.removeTask('task2');
human1.enemies.removeEnemy(persons[2].name);
human1.friends.removeFriend(persons[4].name);

human1.friends.displayInfo();
human1.enemies.displayInfo();
human1.tasks.displayInfo();
