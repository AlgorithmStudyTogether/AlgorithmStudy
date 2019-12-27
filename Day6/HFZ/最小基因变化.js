/**
 * https://leetcode-cn.com/problems/minimum-genetic-mutation/
 * 
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    if(start == end){
        return 0;
    }
    var bankSet = new Map();
    for(var i = 0;i<bank.length;i++){
        bankSet.set(bank[i],true);
    }
    var genes = ['A','C','G','T'];
    var level = 0;
    var queue = [[start, 0]];
    while(queue.length != 0){
        var curr = queue.pop();
        level = curr[1]
        if(curr[0] == end){
            return level;
        }
        var arrCurr = curr[0];
        for(var i = 0;i<arrCurr.length;i++){
            for(var r = 0;r<genes.length;r++){
                if(genes[r] != arrCurr[i]){
                    var strCurr = (arrCurr.slice(0,i))+genes[r]+(arrCurr.slice(i+1));
                    
                    if(bankSet.has(strCurr)){
                        queue.unshift([strCurr,level+1]);
                        bankSet.delete(strCurr);
                    }
                }
            }
        }
    }
    return -1;
};

// console.log(minMutation("AACCTTGG", "AATTCCGG", ["AATTCCGG","AACCTGGG","AACCCCGG","AACCTACC"]))
// console.log(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]))
// console.log(minMutation("AACCTTGG" ,"AATTCCGG" ,["AATTCCGG","AACCTGGG","AACCCCGG","AACCTACC"]))
console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA","AACCGCTA","AAACGGTA"]))