const test = NaN;
const testIs = (test !== test) ? '=Nan':
                (test === null) ? '=null':
                (test === undefined) ? '=undefined':
                (test === 0) ? '=0': (test === '') ? '=" "':
                (test === false) ? '=false' : 'other';

console.log(testIs);
