const modifyLocalStorageItem = (method, key, value='') => {
    switch (method) {
    case 'set':
        localStorage.setItem(key, JSON.stringify(value));
        return;
    case 'get':
        return JSON.parse(localStorage.getItem(key));
    case 'remove':
        localStorage.removeItem(key);
        return;
    default:
        return 'Incorrect Method!';
    }
};
export default modifyLocalStorageItem;
