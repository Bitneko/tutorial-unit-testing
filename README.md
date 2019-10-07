## Unit Testing

### Definition
**UNIT TESTING** is a level of software testing where individual units/ components of a software are tested. The purpose is to validate that each unit of the software **performs as designed**. A unit is the smallest testable part of any software.

The unit test cases writing and execution is done by the developer (not the tester) to make sure that individual units are **working as expected**.


### Test Doubles
Test doubles are generic terms for any kind of pretend object used in place of a real object for testing purposes.

#### Vocabulary
- #### Dummy 
  Objects passed around but never actually used. Usually they are just used to fill parameter lists.

- #### Fake
  Fake objects have working implementations, but usually take some shortcut which makes them not suitable for production (an in memory database is a good example).

- #### Stubs
  A stub provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test. It is concerned with simulating specific behaviour.

- #### Spies
  Spies are stubs that also record some information based on how they were called. It is a hybrid between real object and stub, with some methods of the real object shadowed by a stub object.

- #### Mocks
  Objects pre-programmed with expectations which form a specification of the calls they are expected to receive. Mocks are concerned with **behavior verification**. The other doubles usually do **state verification**.
  
In state verification you have the object under test perform a certain operation, after being supplied with all necessary collaborators. When it ends, you examine the state of the object and/or the collaborators, and verify that it is the expected one.

In behaviour verification, you specify exactly which methods are to be invoked on the collaborators by the *SUT, thus verifying not that the ending state is correct, but that the sequence of steps performed was correct.

*SUT - System under test

### Why unit test?
* Unit Tests allows you to make big changes to codebase quickly. You know it works now because you've run the tests. When you make changes to your codebase, you need to get the tests working again.
* Realise when to stop coding. Your tests give you confidence that you've done enough.
* Helps with coding constipation. When faced with a large and daunting piece of work ahead, writing the tests will get you moving quickly.
* Unit Tests help you really understand the design of the code you are working on.
* Unit Tests give you instant visual feedback, we all like the feeling of all those green lights when we've done. It's very satisfying. It's also much easier to pick up where you left off after an interruption because you can see where you got to - that next red light that needs fixing.
* Good unit tests can act as documentation, and define what something is supposed to do
* Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code till the tests run again.

<br>
<br>

> Imperfect tests, run frequently, are much better than perfect tests that are never written at all
~ *Martin Fowler*

> Any tests are better than no tests
~ *Jeff Atwood*
