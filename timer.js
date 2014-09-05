RemoteStorage.defineModule('timer', function(privateClient, publicClient) {
    privateClient.cache('');
    privateClient.declareType('timer', {
        type: 'object',
        properties: {
            starttime: {
                type: 'string'
            },
            endtime: {
                type: 'string'
            },
            length: {
                type: 'string'
            },
            running: {
                type: 'boolean'
            }
        },
        required: ['starttime', 'length', 'running']
    });
    var cb;
    privateClient.on('change', function(e) {
        //uncomment to see more logs
        //console.log('change coming from ' + e.origin, JSON.stringify(e));
        //note = e.newValue;
        if (cb) {
            cb(e);
        }
    });
    return {
        exports: {
            setTimer: function(start, end, len, run) {
                privateClient.storeObject('timer', 'mytimer', {
                    starttime: start,
                    endtime: end,
                    length: len,
                    running: run
                });
            },
            startTimer: function() {
                running = true;
            },
            stopTimer: function(){
                
            },
            getTimer: function() {
                return note;
            },
            onChange: function(setCb) {
                cb = setCb;
            }
        }
    };
});
