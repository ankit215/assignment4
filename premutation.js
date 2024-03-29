function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        
        if (string.indexOf(char) != i) 
      continue;           
        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); 

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}
console.log(permut('dog'));