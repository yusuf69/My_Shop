function average(scores){
            var total=0;
            scores.forEach(function(score){
                    total+=score;
            });
         var avg=total/scores.length;
         return Math.round(avg);
}

scores=[10,45,78,96,56,52,32,24];
console.log(average(scores));