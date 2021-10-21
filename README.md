# Currency Exchange Calculator

I built this following along [Jamund Fergusons egghead.io course on redux hooks](https://egghead.io/courses/apply-redux-to-a-modern-react-hooks-application-8a37). It's a free community resource (thanks Jamund! that is very kind of you)

It's a simple currency exchange calculator built to demonstrate using redux with react hooks.

### Setup

`yarn` 

### Run It

`yarn start` 


### build notes
using react-redux
- `yarn add react react-redux`
- create store, reducer and initial state
- wrap app in Provider imported and pass the store to it (so store is available throughout the app)
    - Provider uses react context api so every component has access to the store and its functions
- used useSelector to access store data we needed
- used useDispatch to get a dispatch fn to dispatch action objects for the reducer to handle 
- split store into multiple reducers (rates and user) and used combineReducers to combine
- defined custom selector functions which can be passed to useSelector() to get data we want
- defined action crator functions to simplify dispatch (common pattern)
- add thunks: 
    - `yarn add redux-thunk`
    - thunks are the redux recommended middleware for ajax requests 
    - a thunk is a function which returns another function
    - more: https://github.com/reduxjs/redux-thunk
- testing, created helper testing wrapper fn to wrap render and inject in the Provider (a recommended pattern for wrapping components with Providers)


- selectors: the public api for accessing data in your store
- useSelector reads a value from the store state and subscribes to updates
    - useSelector takes a function and calls with state and allows you to return the part of state you want 
    - any time these values change the component is re-rendered
- dispatch a function to send actions to the reducer

redux docs: https://react-redux.js.org/api/hooks
redux style guide: https://redux.js.org/style-guide/style-guide

interesting reads
- "Thoughts on React Hooks, Redux, and Separation of Concerns" https://blog.isquaredsoftware.com/2019/07/blogged-answers-thoughts-on-hooks/
- "Hooks, HOCs, and Tradeoffs" - https://blog.isquaredsoftware.com/2019/09/presentation-hooks-hocs-tradeoffs/



