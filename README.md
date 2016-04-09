# Example API with proper specs and documentation




## `Step one` - initial parsing of [the requirements](docs/build_a_bank.md)

PR: [https://github.com/seeker89/example_api/pull/1](https://github.com/seeker89/example_api/pull/1)

Ok, so this is kind of what we're looking at

![zee UML](docs/uml.png)


The entities we'll need to implement that:

- [ ] employee (the one with the power to do things)
- [ ] customer
- [ ] account
- [ ] transaction

The actions that are explicit in the requirements (the numbers from above):

1. Create a new bank account for a customer, with an initial deposit amount. A single customer may have multiple bank accounts.
2. Transfer amounts between any two accounts, including those owned by different customers.
3. Retrieve balances for a given account.
4. Retrieve transfer history for a given account.

Implicit things:

- authentication (and session management) for the employees
- creation of users


Other implicit actions which will __not__ become part of the public API, but will need to be thought of anyway:

- CRUD of employees
- deletion and updates of customers


## `Step two` - write up an API description in swagger

PR: [https://github.com/seeker89/example_api/pull/2](https://github.com/seeker89/example_api/pull/2)

I'll leave out the employees authentication for now to kick start.



## `Step three` - debug the protocol, bootstrap node-based api, serve docs and such

PR: [https://github.com/seeker89/example_api/pull/3](https://github.com/seeker89/example_api/pull/3)
