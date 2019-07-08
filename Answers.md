1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map(), .filter(), and .forEach() prevent side-effects. I am not sure which we use while extending properties of another object, but that sounds like it is actually talking about (...spread), which fills an array or object with data from a previous array or object, and then allows us to ad or edit a specific portion of that data.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are things we call into action which execute a bit of code (can be asynchronous with thunk), and then sends a dispatch type into our reducer. Our reducer is where we are updating our state based on the action.type, by using whatever payload is passed along. All of these things are passed from the action. Once the reducer determines the action.type and.payload, the store is updated. The store is what has our state, and allows us to pass ALL of these things directly into components.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is when we have it stored in the reducer, component state is when we have it divided amongst whichever components need that specific piece of data. If we have several components capable of impacting the same state, then we would want application state. The same would be said if we are scaling a project at a large level and are going to have dozens and dozens of files all relying on the same state.

We would prefer component state for something simple like a form. We can store the form's information ([e.target.name]: e.target.value type of deal) in the components state to make sure nothing else will impact that form.

1.  What is middleware?

Middleware is a function that returns a function that returns a function, which allows us to do things with our actions before sending them to the reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to see if an action is a promise or something else async that would disrupt our reducer and give it a funk. This allows us to prevent it from reaching the reducer until the promise has been resolved (I think).

1.  Which `react-redux` method links up our `components` with our `redux store`?


connect allows us to link everything up so that we have access to the store from a component!