<div align="center">
<!-- Title: -->
  <h1>Structure Guideline & Coding Standards</h1>
</div>

# Coding Standards

### 1. Naming Conventions
All folders are in camelCase
All files are in PascalCase
i.e. src/App.js

### 2. Ordering of imports
a. React import
b. Library imports (Alphabetical order)
c. Absolute imports from the project (Alphabetical order)
d. Relative imports (Alphabetical order)
e. Import * as
f. Import ‘./<some file>.<some extension>

### 3. Use functional components
- Components have Two types: a class component and a functional component.
- Class components are simple classes that are stateful and have internal state and life cycle methods. Functional components are stateless. But by using react hooks, it can act as a stateful component. The functional components accept props as arguments and return React elements.
- Use functional components and hooks more often as they result in more concise and readable code compared to classes.

### 4. Keep components small and separate functionalities
- No more than 200 lines per component (if possible)

### 5. Always name React components
Do this: 
'''
export default function Products () { return <div>...</div> )
'''
Not this: 
'''
export default () => <div>...</div>
'''
- The component name should be PascalCase
- Method names should be in camelCase

### 6. Use destructuring to remove redundancy (for Props)
i.e. 
'''
const {value 1, value 2, value 3, value 4} = props.values;
'''

### 7. Always prefer passing the entire object instead of primitive values
Do this: <b> <StudentAccount user={user} /> </b>
Not this: <b> <StudentAccount
              name={user.name}
              email={user.email}
              id={user.id}
              /> </b>

### 8. Avoid using State (if possible)
- Avoid using state as much as possible since the more state you use, the more data you have to keep track of across the app

### 9. Avoid using Indexes as Key Props
Use unique values as the index to ensure identity of the list item

# Folder Structure
