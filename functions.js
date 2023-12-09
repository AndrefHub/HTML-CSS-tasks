function isPalindrome(sentence) {
    var palindrome = sentence.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    start = 0;
    end = palindrome.length - 1;
    while (start < end) {
        if (palindrome[start] != palindrome[end])
            return false;
        start++;
        end--;
    }
    return true;
}

function printNumber(sentence) {
    var numberstr = sentence.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var ans = "";
    for (i = 0; i < numberstr.length; i++) {
        if (isNumeric(numberstr[i]))
            ans += numberstr[i];
    }
    if (ans.length == 0)
        return ("NaN")
    return ans;
}

function isNumeric(char) {
    if (char >= '0' && char <= '9')
        return true;
    return false;
}

function isStringLengthValid(sentence, n) {
    if (sentence.length <= n)
        return true;
    return false;
}

function padStringToLength(startstr, n, padstr) {
    if (startstr.length > n)
        return startstr;
    var ans = " ";
    append = 0;
    for (i = 0; i <= (n - startstr.length - 1); i++) {
        if (padstr.length - 1 < append) {
            append = 0;
        }
        ans = ans + padstr[append];
        append++;
    }
    return ans + startstr;
}
