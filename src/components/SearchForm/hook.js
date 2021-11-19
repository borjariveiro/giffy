import { useReducer } from "react"

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
}

// useReducer with functional programming
const ACTIONS_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    times: state.times + 1
  }),
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export default function useForm({ initialKeyword = '' } = {}) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword)
  })

  const { keyword } = state

  return {
    keyword,
    updateKeyword: keyword => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword })
  }
}
