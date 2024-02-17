Array.prototype.forEach2 = function (callback, thisArg) {

    if (this == null) {
        throw new Error('Cant iterate over undefined or null')
    }
    let object = Object(this);
    let context = this;
    if (arguments.length > 1) {
        context = thisArg;
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback in not a function')
    }

    let length = object.length;
    let i = 0;
    while (i < length) {
        if (i in object) {
            callback.call(context, this[i], i, object);
        }
        i++;
    }
}