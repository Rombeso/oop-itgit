class Validate {

    constructor(a) {
        this.a = a;
    }

    static isNumber(value) {
        if (typeof value === 'number') {
            return true
        } else {
            return false
        }
    }

    static isInit(value) {
        if (this.isNumber(value) && Number.isInteger(value)) {
            return true
        } else {
            return false
        }
    }

    static isString(value) {
        if (typeof value === 'string') {
            return true
        } else {
            return false
        }
    }

    static isChat(value) {
        if (this.isString(value) && value.length === 1) {
            return true
        } else {
            return false
        }
    }

    static isBoolean(value) {
        if (typeof value === 'boolean') {
            return true
        } else {
            return false
        }
    }

    static isArray(value) {
        if (Array.isArray(value)) {
            return true
        } else {
            return false
        }
    }

    static isMoney(value) {
        debugger
        if (this.isNumber(value)) {
            let result = String(value);
            let fraction;
            let integer;
            if (!Number.isInteger(value)) {
                result.split('.')
                fraction = result[1];
                integer = result[0];
            } else {
                integer = result.split('').reverse()
            }
            let arr = [];
            let inArr = [];
            let count = 2;
            for (let i = 1; i <= integer.length + 1; i++) {

                if (i % 3 === 0) {
                    if (i === integer.length) {
                        arr.push(inArr);
                    } else {
                        inArr[count] = integer[i];
                        arr.push(inArr);
                        inArr = [];
                        count = 2;
                    }
                } else {
                    inArr[count] = integer[i];
                }
                count--
            }

            let newArr = [];

            arr.reverse().forEach(item => {
                newArr.push(item.join(''))
            })

            let res = newArr.join(' ')

            if (fraction) {
                res += '.' + fraction;
            }

            return res

        } else {
            return false
        }
    }
}

console.log(Validate.isMoney(100000))