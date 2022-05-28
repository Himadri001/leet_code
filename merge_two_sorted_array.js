merge two sorted arrays in one sorted array


function merge(a, b) {
    var result = [];
    var ai = 0;
    var bi = 0;
    while (true) {
        if ( ai < a.length && bi < b.length) {
            if (a[ai] < b[bi]) {
                result.push(a[ai]);
                ai++;
            } else if (a[ai] > b[bi]) {
                result.push(b[bi]);
                bi++;
            } else {
                result.push(a[ai]);
                result.push(b[bi]);
                ai++;
                bi++;
            }
        } else if (ai < a.length) {
            result.push.apply(result, a.slice(ai, a.length));
            break;
        } else if (bi < b.length) {
            result.push.apply(result, b.slice(bi, b.length));
            break;
        } else {
            break;
        }
    }
    return result;
}
