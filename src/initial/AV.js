function initailAV() {

    var AV = require('leancloud-storage');
    var { Query, User } = AV;

    var APP_ID = 'mQOGtDlcxXM9tJzjMOXV31ok-gzGzoHsz';
    var APP_KEY = 'jbFTLad0MUEduMTU8ihF9ujC';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });




    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    testObject.save({
        words: 'Hello World!'
    }).then(function(object) {
        alert('LeanCloud Rocks!');
    })

}

export default initailAV;