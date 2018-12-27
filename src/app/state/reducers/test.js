
const testReducer = (state = null, action) => {
    console.log(`testReducer: ${action.type}, `, state);

    switch (action.type) {
        default: return state
    }
};

export default testReducer