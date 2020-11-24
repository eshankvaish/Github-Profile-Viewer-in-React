const debounceFunction = (fn, t) => {
    let timer;
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(context, args), t);
    };
};

export default debounceFunction;
