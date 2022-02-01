// ToDo
/*
Task 1
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct"
Task 2
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".
Compare email addresses, first names, last names and phone numbers.
*/


// TASK 1
console.log('TASK 1')
const usersData1 = require('./data/users1');

const verifyUsersPhoneNumbers = (users) => {
    users.forEach(user => console.log(`${/^\d+$/.test(user.phoneNumber) ? "true" : `Phone number of user with ID ${user.userId} is not correct`}`));
};

verifyUsersPhoneNumbers(usersData1.users);


// TASK 2
console.log('\nTASK 2')
const usersData2 = require('./data/users2');

const compareUsersEmails = (users) => {
    users.forEach((user2, index) => {
        const user1 = usersData1.users[index];

        if (user2.emailAddress !== user1.emailAddress) {
            console.log(`Email addresses of the user with ID ${user2.userId} are not the same. First email is: ${user2.emailAddress} and second email is: ${user1.emailAddress}\n`);
        };

        if (user2.firstName !== user1.firstName) {
            console.log(`First name of the user with ID ${user1.userId} is different. The first name of the first user is: ${user1.firstName} and the first name of the second user is: ${user2.firstName}\n`);

        };

        if (user2.lastName !== user1.lastName) {
            console.log(`Last name of the user with ID ${user1.userId} is different. The last name of the first user is: ${user1.lastName} and the last name of the second user is: ${user2.lastName}\n`);
        };

        if (user2.phoneNumber !== user1.phoneNumber) {
            console.log(`The phone number of the user with ID ${user1.userId} is different. The phone number of the first user is: ${user1.phoneNumber} and the phone number of the second user is: ${user2.phoneNumber}\n`);
        };
    });
}
compareUsersEmails(usersData2.users);