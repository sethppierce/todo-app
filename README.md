# LAB - Class 31

## Project: Todo-App

### Author: Seth Pierce

- [gitub link](https://github.com/sethppierce/todo-app)

### Problem Domain

Create a React App that allows users to track their tasks and add new ones.

### Documentation

Describe how global state is consumed by the components.
Global state is consumed by components through props, which are passed down from higher-level components to their children.

Describe the operation of the hook: useForm().
The useForm hook is a function that returns a form state object and a set of functions for updating that state. It can be used to manage the state of a form in a React application.

### Links and Resources

- [prod deployment]() (when applicable)

### Setup

#### How to initialize/run your application (where applicable)

- npm i
- npm start

#### Features / Routes

Currently, a user can add todo tasks to the proof-of-life starter application. In this phase, we will add hard-wired, default context settings to the application so that the user can view three incomplete todo tasks. In addition, the user will have the option of viewing any additional incomplete tasks by using pagination functionality.

#### Tests

- npm test
- header
  - tests to see if pending item updates with props
- list
  - tests to see if the correct amount of items are displayed based off of the setting context
- settings
  - tests settingsContext to see if it initializes 

### UML

#### Phase 1 UML

![UML](./src/assets/Lab-31.png)
