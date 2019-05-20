export class Kata {
    static getSum(a: number, b: number) {
        if (a === b) return a;

        let start, end;
        if (a > b) {
            start = b;
            end = a;
        } else {
            start = a;
            end = b;
        }
        console.log(start, end);
        let summ = 0;
        
        while(start <= end) {
            summ += start;
            start++;
        }
        
        return summ;
    }
}

console.log(Kata.getSum(0, 1))