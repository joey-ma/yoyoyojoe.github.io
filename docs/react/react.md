# React

:::note

Did you know that, if you are using `npx create-react-app my-app`, there are certain names you cannot use?

```bash
% npx create-react-app react 
Cannot create a project named "react" because a dependency with the same name exists.
Due to the way npm works, the following names are not allowed:

  react
  react-dom
  react-scripts

Please choose a different project name.
```
:::

## Props

### Multiple props

Passing multiple props into a functional component

JSX Spread Operator <Component {…props} />

These two are equivalent ways are the same:

```js
// Method 1
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}
// Method 2
function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```
Pick specific props that your component will consume while passing all other props using the spread operator:

```js
const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};
```

## Hooks

### Custom Hooks

#### `useMount`

A simple way to fetch data on load is using `useEffect`. [see docs](https://reactjs.org/docs/hooks-reference.html#useeffect)

```js
useEffect(() => {
  // fetch request...
}, [])
```

If we use a custom hook and name it `useMount`, it improves semantics. 

```js
const useMount = (callback) => {
  useEffect(callback, [])
}
```

We can then implement `useMount` in our component, and when the component re-renders, `useMount` does not execute again.

```js
useMount(fetch);
```

#### `useUnmount`

We can use `useUnmount` if we want to trigger some logic on component unmount, (like clearing the timer, etc). 

However, we need to use `useRef` to keep track of the function reference, otherwise the closure effect of useEffect will remember the first state only.

```js
const useUnmount = (callback) => {
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  useEffect(() => {
    return callbackRef.current()
  }, [])
}
```

For example, this correctly logs the last count. If it was done without the useRef/callbackRef, the count would be 0 on unmount.

```js
const Child = () => {
  const [ count, setCount ] = useState(0)

  useUnmounted(() => {
    console.log('useUnmounted', count)
  })

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  )
}

const UseUnmountedDemo = () => {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      { !!showChild && <Child /> }
      <button onClick={() => setShowChild(false)}>Destroy child</button>
    </div>
  )
}
```

#### useUpdateEffect

Although this works to print out `count` as state changes,  `count` will also print out ‘0’ as soon as the component is mounted.
What if we want to execute logical code only after the dependency changes?

```js
function UseUpdateEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed', count)
  }, [ count ])

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>change</button>
    </div>
  )
}
```

Let's make our custom hook `useUpdateEffect`:

```js
const useUpdateEffect = function (effectCallback, deps = [])  {
  const isFirstMount = useRef(false)
  
  // ? this may or may not be needed ?
  // useEffect(() => {
  //   console.log(isFirstMount.current)
  //   return () => {
  //     isFirstMount.current = false
  //   }
  // }, [])

  useEffect(() => {
    // Do not execute effectcallback for the first time
    if (!isFirstMount.current) {
      isFirstMount.current = true
    } else {
      return effectCallback()
    }
  }, deps)
}
```

With example below:

```js
function UseUpdateEffectDemo() {
  const [count, setCount] = useState(0)
  
  useUpdateEffect(() => {
    console.log('Count changed', count)
  }, [ count ])
  
  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>change</button>
    </div>
  )
```

#### `useSetState`

When we write a classical component, we use `this.setState` to manipulate the data of the component, and `setState` is often more convenient when manipulating object-type data.
With regular `setState` functions, we'd likely do something as the following:

```js
const [ person, setPerson ] = React.useState({
  name: 'fatfish',
  age: 100
})
// Modify name
setPerson({
  ...person,
  name: 'medium'
})
// Modify age
setPerson({
  ...person,
  age: 1000
})
// Use setState to modify name
setState({
  name: 'medium'
})
// Use setState to modify age
setState({
  age: 1000
})
```

We can also implement a `useSetState` hook to simplify the operation of `setPerson` by putting a wrapper around `setState`.

```js
const useSetState = (initState) => {
  const [ state, setState ] = useState(initState)
  
  const setMergeState = (value) => {
    setState((prevValue) => {
      const newValue = typeof value === 'function' ? value(prevValue) : value
      return newValue ? { ...prevValue, ...newValue } : prevValue
    })
  }
  
  return [ state, setMergeState ]
}
```

Here's an example:

```js
function useSetStateDemo() {
  const [ person, setPerson ] = useSetState({
    name: 'fatfish',
    age: 100
  })
  // Change the value of person in the normal setting mode
  const onSetName = () => {
    setPerson({ name: 'medium' })
  }
  //Use the callback function to change the value of person
  const onSetAge = () => {
    setPerson((prevAge) => {
      return {
        age: prevAge + 10
      }
    })
  }
  return (
    <div>
      <p>name: { person.name }</p>
      <p>age: { person.age }</p>
      <button onClick={onSetName}>change name</button>
      <button onClick={onSetAge}>change age</button>
    </div>
  )
}
```

Credit:
[fatfish - 4 Custom React Hooks Every Developer Should Know](https://fatfish.medium.com/4-custom-react-hooks-every-developer-should-know-106ca78c0bca) Medium Member-only

