const debounceFunction = (fn, t) => {
    let timer;
    return function debouncedFunction(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), t);
    };
};

export default debounceFunction;
