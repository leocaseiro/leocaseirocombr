module.exports = {
    removePrefix: function (str, prefix = '/blog') {
        const hasPrefix = str.indexOf(prefix) === 0;
        return hasPrefix ? str.substr(prefix.length) : str.toString();
    }
};
