/* should generate diagnostics */

test.describe('suite', { tag: '@smoke' }, async () => {});
test.describe.only('suite', {}, async function() {});
test.describe.skip('suite', {}, (done) => {});
test.describe.fixme('suite', {}, function(done) {});
test.describe.parallel('suite', {}, 'not a function');
test.describe.serial('suite', {}, undefined);
test.describe.parallel.only('suite', {}, null);
test.describe.serial.only('suite', {}, {});
