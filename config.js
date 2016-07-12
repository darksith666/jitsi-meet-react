let domain = 'meet.jit.si';

module.exports = {
    connection: config || {
        bosh: 'https://' + domain + '/http-bind',
        hosts: {
            domain,
            focus: 'focus.' + domain,
            muc: 'conference.' + domain
        }
    }
};
