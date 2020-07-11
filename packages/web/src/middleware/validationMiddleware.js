const formValidationMiddleware = ({ dispatch, getState }) => (next) => (action) => {

    next(action)
};

export default formValidationMiddleware;
