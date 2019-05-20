function sumString(a, b){
    var aArr=a.split('').reverse();
    var bArr=b.split('').reverse();

var result = [];
var maxLength =  Math.max(aArr.length, bArr.length);
for (var i = 0; i<maxLength; i++){
    var sum = (parseInt(aArr[i])||0)+(parseInt(bArr[i])||0);
  //console.log(aArr[i], bArr[i], sum, result);
  if (!result[i]){
          result[i] = 0;
  }
  var valueTonext = (sum / 10) | 0;
  result[i]+= sum % 10;
  if(valueTonext){
      result[i+1] = valueTonext;
  }
  
}
return result.reverse().join('');
}
console.log(sumString('123', '456'));
console.log(sumString('392', '937'));
console.log(sumString('712569312664357328695151392', '8100824045303269669937'));