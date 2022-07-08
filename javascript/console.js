console.log('Console.log')

// BETTER WARNINGS
console.warning('Console.warning')

// BETTER ERROR LOGGING
console.error('Console.error')

console.clear('Console.clear')

// COUNT HOW MANY TIMES HIT THIS CONSOLE
console.count('Console.count')

console.table(
    { propriedade: 'valor', propriedade: 'valor' },
    { propriedade2: 'valor', propriedade2: 'valor' }
)

// TIMER
console.time('timer')
console.timeEnd('timer')

// CUSTOM CONSOLE STYLING
console.log(
    '%c React ',
    'color: white; background-color: #61dbfb',
    'Have fun using React!'
);

// GROUP GROUPED LOGS
console.group('User Details');
console.log('name: Sunil Sandhu');
console.log('position: Software Developer');
console.groupEnd();
console.group('Account');
console.log('Member Type: Premium Member');
console.log('Member Since: 2018');
console.log('Expiry Date: 20/12/2022');
console.groupEnd();
