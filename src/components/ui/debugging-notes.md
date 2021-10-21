1. Cannot read property of undefined
2. Somewhere in the .map() we are trying to access icon.description
Option A, it fails at number 2 👍


Lets keep looking into this

3. We are trying to set ServiceData[index].description
Option B, it fails at number 3 🧐

Index should be a number, but its not. It is an object. Specifically, a DOM Event object

We are executing togglePopUp without parameters
DOM events pass the Event object as a default parameter

togglePopUp is executed once, but index is logged multiple times


## Problems
> ~~We want index to be a number~~ ✅
> ~~You are rendering 4 Popups~~ ✅


## Facts
1. You have a map()
2. Within the map(), if isOpen == true, you render a PopUp

> 🎯 We want to render the selected pop up.
Q: How do we know what is the selected pop up?
A: With `content` state

Q: How do we render it?
A: Outside of the map function


## What we have accomplished so far:
1. Render 1 Popup instead of 4.
2. Make index a number instead of an DOM Event Object.


--------------------------------



## Next Goals
> 🎯 1. Read Popup Content from Component State
> 🎯 ~~2. To be able to close the modal without crashing~~




(... ... ... ...)=> JSX

(...) => (...) => (...) => JSX