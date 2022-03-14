/**
 * Работа с куками
 */
(function (w) {
    var Cookie = function () {
        if (!(this instanceof Cookie)) return new Cookie();
    };

    var p = Cookie.prototype;

    p.set = function (name, value, options) {
        var opt = {
            path: "/",
            "max-age": 604800, //живет неделю
            // при необходимости добавьте другие значения по умолчанию
        };

        if (options && typeof options === "object")
            for (var key in options) opt[key] = options[key];
        // else return false;

        if (opt.expires instanceof Date) {
            opt.expires = opt.expires.toUTCString();
        }

        var updatedCookie =
            encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (var optionKey in opt) {
            updatedCookie += "; " + optionKey;
            var optionValue = opt[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    };

    p.get = function (name) {
        var matches = document.cookie.match(
            new RegExp(
                "(?:^|; )" +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)"
            )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    p.remove = function (name) {
        this.set(name, "", {
            "max-age": -1,
        });
    };

    // Добавляем прототип в глобальную переменную
    w.Cookie = Cookie;
    window.cookie = new Cookie();
})(window);
