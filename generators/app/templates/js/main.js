var <%= name %> = {

    // elements
    el: {

    },

    // events
    ev: {
        // of the form
        // eventName elQuery: functionIn<%= name %>.f
    },

    // functions
    f: {

    },

    // messages
    m: {

    }

};

<%= name %>.init = function() {

    // add event listeners
    Object.keys(<%= name %>.ev).forEach(function(identifier) {
        var eventName = identifier.split(' ')[0],
            selector = identifier.split(' ').splice(1).join(' '),
            fn = <%= name %>.f[<%= name %>.ev[identifier]];

        <%= name %>Utils.eventAdder(selector, eventName, fn);
    });

    // serviceWorker check
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            console.log('Service worker registration successful');
        }).catch(function(err) {
            console.error('Service worker registration failed', err);
        });
    }

    console.info('<%= name %> initialized');

};

<%= name %>.init();
