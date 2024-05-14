  //action creators
  const filterActionCreator = (text) => {
    return {
      type: 'FILTER',
      payload: { text }
    }
  }
  
  //reducer
  const filterReducer = (state = "", action) => {
    console.log('state now: ', state)
    console.log('action', action)
  
    switch (action.type) {
      case 'FILTER':
        return action.payload.text
      default: return ''
    }
  }
  
  export {filterReducer, filterActionCreator}