/*  __
___( o)>
\ <_. )
 `---'
*/

export const LOAD = 'hapi-redux-boilerplate/App/LOAD'
export const LOAD_SUCCESS = 'hapi-redux-boilerplate/App/LOAD_SUCCESS'
export const LOAD_FAILURE = 'hapi-redux-boilerplate/App/LOAD_FAILURE'

export const app = (state = { data: 'no data received yet.' }, action = {}) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return Object.assign({}, state, { data: action.payload.data })
    default:
      return state
  }
}

export const actions = {
  loadHelloWorld: () => ({
    type: LOAD
  }),
  loadHelloWorldSuccess: data => {
    return {
      type: LOAD_SUCCESS,
      payload: {
        data
      }
    }
  },
  loadHelloWorldFailure: ({ error }) => ({
    type: LOAD_FAILURE,
    payload: new Error(error),
    error: true
  })
}
