
export const ls = {
    set: function (item) {
        const data = JSON.stringify(item);
        window.localStorage.setItem("todos", data);
        
    },
    get: function () {
        const data = window.localStorage.getItem("todos");
        return (data !== null) ? JSON.parse(data) : null;
    },
}