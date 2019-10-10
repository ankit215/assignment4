function checkPalindrom(palindrom)
{

    for( var i = palindrom.length; i > 0; i-- )
    {
        if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
        {
           console.log('the word is palindrome.');
        }else{
            console.log('the word is not palindrome!');
        }
        return palindrom == palindrom.split('').reverse().join('');
    }
}

console.log(checkPalindrom('fox'));
