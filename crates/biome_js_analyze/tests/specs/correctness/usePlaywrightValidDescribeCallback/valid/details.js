/* should not generate diagnostics */

test.describe('suite', { tag: '@smoke' }, () => {});
test.describe.only('suite', { tag: ['@smoke', '@fast'] }, () => {});
test.describe.skip('suite', { annotation: { type: 'issue', description: 'example' } }, () => {});
test.describe.fixme('suite', {}, function() {});
test.describe.parallel('suite', {}, () => {});
test.describe.serial('suite', {}, () => {});
test.describe.parallel.only('suite', {}, () => {});
test.describe.serial.only('suite', {}, () => {});
test.describe('suite', details, () => {});
