var Toast = (function ($) {
    var settings = {
        inEffect: {opacity: 'show'},
        inEffectDuration: 600,
        stayTime: 30000,
        text: '',
        sticky: false,
        type: 'notice',
        close: null
    },preClass = $(window).width() >= 1100 ? 'toast-pc' : '';

    var methods = {
        init: function (options) {
            if (options) $.extend(settings, options);
        },

        showToast: function (options) {
            var localSettings = {};
            $.extend(localSettings, settings, options);

            // declare variables
            var toastWrapAll, toastItemOuter, toastItemInner, toastItemClose, toastItemImage;

            toastWrapAll = (!$('.toast-container').length) ? $('<div></div>').addClass('toast-container').addClass(preClass).appendTo('body') : $('.toast-container');
            toastItemOuter = $('<div class="toast-item-wrapper"></div>');
            toastItemInner = $('<div class="toast-item"></div>').addClass('toast-type-' + localSettings.type).appendTo(toastWrapAll).html($('<p></p>').addClass('toast-item-image-' + localSettings.type).append(localSettings.text)).wrap(toastItemOuter);

            if (!localSettings.sticky) {
                setTimeout(function () {
                    Toast('removeToast', toastItemInner, localSettings);
                }, localSettings.stayTime);
            }
            return toastItemInner;
        },

        showNoticeToast: function (message) {
            var options = {text: message, type: 'notice'};
            return Toast('showToast', options);
        },

        showSuccessToast: function (message) {
            var options = {text: message, type: 'success'};
            return Toast('showToast', options);
        },

        showWarningToast: function (message) {
            var options = {text: message, type: 'warning'};
            return Toast('showToast', options);
        },

        showErrorToast: function (message) {
            var options = {text: message, type: 'error'};
            return Toast('showToast', options);
        },

        removeToast: function (obj, options) {
            obj.parent().animate({height: '0px'}, options.inEffectDuration, function () {
                obj.parent().remove();
            });
            // callback
            if (options && options.close !== null) {
                options.close();
            }
        }
    };

    return function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
    };
})(jQuery);