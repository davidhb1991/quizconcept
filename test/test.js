var assert = require('assert');

describe('Quiz', function() {

    describe('FormLogic', function() {
        it('should only send the form when all questions have been answered', function() {
            assert.equal('actualResult', 'expectedResult', 'all questions have not been answered');
        });
    });

});