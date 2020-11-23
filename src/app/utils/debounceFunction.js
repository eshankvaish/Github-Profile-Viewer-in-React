const debounceFunction = (fn, t) => {
    let timer;
    return function () {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(context, args), t);
    };
};

export default debounceFunction;
