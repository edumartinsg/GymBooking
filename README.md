## functional Requirements (FR)

- [x] It should be possible to register;
- [x] It should be possible to authenticate;
- [x] It should be possible to get the profile of a logged-in user;
- [x] It should be possible for the user to obtain their check-in history;
- [x] It should be possible for the user to search for nearby gyms(until 10 KM);
- [x] It should be possible for the user to search for gyms by name;
- [x] It should be possible for the user to check-in at a gym;
- [x] It should be possible to validate a user's check-in;
- [x] It should be possible to register a gym;

## Businnes Rules (BR)

- [x] The user should not be able to register with a duplicate email;
- [x] The user should not be able to make two check-ins on the same day;
- [x] The user should not be able to check-in if they are not within 100m of the gym;
- [x] The check-in can only be validated up to 20 minutes after creation;
- [x] The check-in can only be validated by administrators;
- [x] The gym can only be registered by administrators;

## Non-functional Requirements (NFRs)

- [x] The user's password needs to be encrypted;
- [x] The application data needs to be persisted in a PostgreSQL database;
- [x] All data lists need to be paginated with 20 items per page;
- [x] The user should be identified by a JWT (JSON Web Token);
