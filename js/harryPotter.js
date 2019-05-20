const MAX_PRIOR_SPELLS = 5;

// What are you, a Squib? Get coding!!
function Wand({ ...fields }) {
    this.logs = [];
    for (let field in fields) {
        this[field] = fields[field]
    }

    this.deletrius = () => this.logs = []

    this.prioriIncantatem = () => this.logs.reverse().slice(0, MAX_PRIOR_SPELLS)

    let proxy = new Proxy(this, {
        get: (target, name) => {
            const result = target[name];

            if (typeof target[name] !== 'function')
                return result;

            if (name !== 'prioriIncantatem' && name !== 'deletrius') {
                this.logs.push(name);
                return result;
            } else {assadfasdf
                return () => {
                    const response = result();
                    this.logs.push(name);
                    return response;
                }
            }

        }
    });

    return proxy;
}

const w = new Wand({
    a: function() {}, b: function() {},
   c: function() {}, d: function() {}
 });
 w.a(); w.b(); w.c(); w.d(); console.log(w.prioriIncantatem());