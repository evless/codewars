export class G964 {
    public static findNb(m: number): number {
        return this.calculate(1, this.getCube(1), m);
    }

    public static getCube(n: number): number {
        return Math.pow(n, 3);
    }

    public static calculate(n: number, summ: number, checkSumm: number): number {
        console.log(n, summ, checkSumm);
        if (summ === checkSumm) {
            return n;
        }

        if (summ > checkSumm) {
            return -1;
        }

        n = n + 1;
        summ += this.getCube(n);
        return this.calculate(n, summ, checkSumm);
    }
}

console.log(G964.findNb(4183059834009));