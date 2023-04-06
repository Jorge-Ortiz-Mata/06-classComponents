import React from "react"

const UsersContext = React.createContext({
  users: [
    {id: 1, name: 'Jorge', age: 34},
    {id: 2, name: 'Juan', age: 23},
    {id: 3, name: 'Omar', age: 18},
    {id: 4, name: 'Ana', age: 28}
  ]
});

export default UsersContext;
