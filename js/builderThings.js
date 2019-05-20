class Thing {
    constructor(name) {
        this.name = name;
    }

    get is_a() {
        return new Proxy({}, {
            get: (target, name) => {
                this[`is_a_${name}`] = true;
                return this;
            }
        });
    }

    get is_not_a() {
        return new Proxy({}, {
            get: (target, name) => {
                this[`is_a_${name}`] = false;
                return this;
            }
        });
    }

    has(count) {
        return has(this, count);
    }

    having(count) {
        console.log('!!!', this, count)
        return has(this, count);
    }
}

const has = (ctx, count) => {
    return new Proxy({}, {
        get: (target, name) => {
            console.log(ctx[name], count);
            if (ctx[name]) return ctx;
            if (count === 1) {
                ctx[name] = new Thing(name);
                // console.log(ctx[name].having(2).eyes);
            } else {
                ctx[name] = [];
                let c = 0;
                while (c < count) {
                    ctx[name].push(new Thing(name.substr(0, name.length - 1)));
                    c++;
                }
            }
            return ctx[name];
        }
    });
}

const jane = new Thing('Jane');
jane.has(1).head
jane.has(1).head.having(2).eyes
console.log(jane.head)
console.log(jane.head.eyes)