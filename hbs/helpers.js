var hbs = require('hbs');

// Helpers
hbs.registerHelper('getYear', () => new Date().getFullYear());
hbs.registerHelper('capitalizar', (text) => {
    let words = text.split(' ');

    words.forEach((word,ix) => {
        words[ix] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');
});

