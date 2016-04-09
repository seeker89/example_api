module.exports = function(storage){
    storage.save = function() {
        return Promise.resolve(storage);
    }
    return storage;
}