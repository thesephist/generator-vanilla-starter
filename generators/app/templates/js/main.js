var <%= bigshortname %> = {

    // elements
    el: {

    },

    // events
    ev: {
        // of the form
        // eventName elQuery: functionIn<%= bigshortname %>.f
    },

    // functions
    f: {

    },

    // messages
    m: {

    }

};

<%= bigshortname %>.init = function() {

    // add event listeners
    Object.keys(<%= bigshortname %>.ev).forEach(function(identifier) {
        var eventName = identifier.split(' ')[0],
            selector = identifier.split(' ').splice(1).join(' '),
            fn = <%= bigshortname %>.f[<%= bigshortname %>.ev[identifier]];

        <%= bigshortname %>Utils.eventAdder(selector, eventName, fn);
    });

    // serviceWorker check
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            console.log('Service worker registration successful');
        }).catch(function(err) {
            console.error('Service worker registration failed', err);
        });
    }

    console.info('<%= bigshortname %> initialized');

};

<%= bigshortname %>.init();
