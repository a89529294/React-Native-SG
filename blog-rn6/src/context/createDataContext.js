import React, { useMemo, useReducer } from "react"

export default (reducer, actions, initialState) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // const boundActions = {}
    // for (let key in actions) {
    //   boundActions[key] = actions[key](dispatch)
    // }

    const memoiedActions = useMemo(() => {
      Object.entries(actions).forEach(([key, fn]) => (actions[key] = fn(dispatch)))
      return actions
    }, [])

    return <Context.Provider value={{ state, ...memoiedActions }}>{children}</Context.Provider>
  }

  return { Context, Provider }
}
