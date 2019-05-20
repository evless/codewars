function solution(list){
    let result = [];
    let start = null;
    let end = null;
    function setDiapason() {
        if (end - start >= 2) {
            let endText = `-${end}`;
            let resultText = `${start}`;
            if (start !== end) resultText = resultText + endText;
            result.push(resultText);
          } else {
            result.push(start);
            if (end !== start) result.push(end);
          }
          
          start = null;
          end = null;
    }
    list.reduce((curr, next, index) => {
      if (!start) start = curr;
      if (!end) end = curr;
      if (curr + 1 === next) {
        end = next;
      } else {
        setDiapason();
      }

      if (index + 1 === list.length) setDiapason();

      return next;
    });
    
    return result.join(',')
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));