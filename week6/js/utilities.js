

export const ls = {
    set: function (name, item) {
        const data = JSON.stringify(item);
        window.localStorage.setItem(name, data);
        
    },
    get: function (name) {
        const data = window.localStorage.getItem(name);
        return (data !== null) ? JSON.parse(data) : null;
    },
}