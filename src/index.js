module.exports = function check(str, bracketsConfig) {
    //Check str for parity
    if ( str.length % 2 != 0 )
        return false;

    //compareBraces is the strings for future comparision. Program make it to stings '()' etc.
    let compareBraces = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        compareBraces[i] = bracketsConfig[i].join('');
    }

    //Main idea is to throw away all inner braces till string will be equal 0
    //helpStr variable help to understand when to stop the while loop
    while ( str.length !=0 ) {
        let helpStr = str;
        for (let i = 0; i < compareBraces.length; i++) {
            str = str.split(compareBraces[i]).join('');
        }

        if ( helpStr == str )
            break;

    }

    if (!str.length)
        return true;
    else
        return false;
}
