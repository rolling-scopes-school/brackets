module.exports = function check(str, bracketsConfig) {
    let brackets2 = {}
    for (let i = 0; i < bracketsConfig.length; i++) {
        let open = bracketsConfig[i][1], close = bracketsConfig[i][0]
        if (!brackets2[open]) brackets2[open] = close;
    }
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let brackets = str[i];

        if (isClosedBracked(brackets, brackets2) && getPeek(stack) !== undefined && getPeek(stack) === brackets2[brackets]) {
            if (brackets2[brackets] !== stack.pop()) return false;
        } else stack.push(brackets)

    }
    return stack.length === 0
}

function getPeek(arr) {
    return arr[arr.length - 1]
}

function isClosedBracked(str, brac) {
    return Object.keys(brac).indexOf(str) > -1
}