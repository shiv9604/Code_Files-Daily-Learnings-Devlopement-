# Regx

Regex was discovered as an language by stephen keen in 1955 for oprating validations and searching in the strings and in the 1917 Philip Hezel Developed in PERL.

In the javascript regex are the objects which contains the methods like match and all which used for string manipulation for validations searching and all.

## Applications of Regex

- We can apply rules on the strings.
- We can check the patterns appearin in the string or not.
- We can search in strings with the help of a regular expression.
- We can master the strings with the help of a regular expressions.

### Ways to Create Regex Patterns
We can create regex patterns with 2 methods in the javascript.

- **Constructor method (new RegEx("")) :-**
    We can create regex patterns with the help of constructor methods as like mentioned below.

    ```
    let string = "hello world"
    let regex1 = new RegEx("hello")
    console.log(regex1.test(string)) // Will return true.
    ```
- **With Litrals /pattern/ :-**

    We can crate the regex patterns in the javascript with litrals as like mentioned below.
    ```
    let string = "hello world"
    let regex2 = /world/
    console.log(regex2.test(string)) // Will retunrs true.
    ```

### Regex Pattern
We use the regex pattern to match a string in another string and we can create patterns which helps use to match the strings.

Regex pattern can be written in `/Hello/` in slashes without any isolcation of curly braces or brackets.

**Basic Regex :-**

- **Simple string pattern :-** 
    - **/regex/.test() :-**
        We can create simple hardcoded value or string with like `/string/` and we can check that in `/string/.test(stringToCheck)` and it returns true or false on that.

        ```
        let string = "Hello, World!"
        let regex = /Hello/
        // It checks the string with pattern
        regex.test(string)
        ```

        **You can find multiple strings with or oprator in regex like `/yes|no|maybe/`**

        **You can skip uppercase & lowercase and focus on string by flags which we can apply after regex, we use i flag for forgetting the letters like `/freecodecamp/.i`.**

    - **string.match(/regex/) :-**

        This matches the pattern in the string and return the strings in array.

        ```
        'string'.match(/regex/);
        /regex/.test('string');

        // Ex
        "Hello, World!".match(/Hello/);
        let ourStr = "Regular expressions";
        let ourRegex = /expressions/;
        ourStr.match(ourRegex);
        ```

        This returns `true.`

        **You can find multiple instances of string from regex with `/g` Glovbal flag and it will return as many instances as present in the string and you can use multiple flags like `/gi`.**

        ```
        'string'.match(/regex/gi);

        // Ex
        let twinkleStar = "Twinkle, twinkle, little star";
        let starRegex = /twinkle/ig; 
        let result = twinkleStar.match(starRegex); 
        ```
        
        This returns `['Twinkle','twinkle']`

    - **WildCard Period `.` :-**

        Wildcard period is used when we dont know about the exact string but we need find strings which include charecters which we give in regex then we use wildcard period with the help of `/do./`. This will return all the strings which starts from `do***`.

        ```
        string.match(/string./flags)

        let exampleStr = "Let's have fun with regular expressions!";
        let unRegex = /.un/;
        let result = unRegex.test(exampleStr);
        ```
        
        This returns `['run', 'sun', 'fun', 'pun', 'nun', 'bun']`

    - **Charecters Class `[]`:-**

        with the charecters class we can find the strings with multiple possible charecters and we use charecters class with `b[aiu]g` which will extracts `['bag', 'big', 'bug']` from string.

        ```
       let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
        let vowelRegex = /[aeiou]/gi; // Change this line
        let result = quoteSample.match(vowelRegex); // Change this line
        console.log(result)
        ```

        This will returns would return the values `[ 'e','a','e','o','u','i','e','a','o','e','o','e','I','a','e','o','o','e','i','o','e','o','i','e','i' ]`.

    - **Charecter Class with alphabet range `[a-e]`:-**

        Above we have seen we an match single charecters as well with charecters class but what if we want to match a lot of charecters then it will need a lot of typing soo for that we have the charecter class range in which we can directly mention the charecter range like `/[a-e]/gi` and it will return all the possible values.

        ```
        let catStr = "cat";
        let batStr = "bat";
        let matStr = "mat";
        let bgRegex = /[a-e]at/;
        catStr.match(bgRegex);
        batStr.match(bgRegex);
        matStr.match(bgRegex);
        ```
        In order, the three match calls would return the values ["cat"], ["bat"], and null.
    
    - **Charecter class with numbers and alphabets `[a-z][0-9]`:-**

        Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

        For example, `/[0-5]/` matches any number between 0 and 5, including the 0 and 5.

        ```
        let jennyStr = "Jenny8675309";
        let myRegex = /[a-z0-9]/ig;
        jennyStr.match(myRegex);
        ```

    - **Negated Charecters Class `^`**

        you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

        To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

        For example, `/[^aeiou]/gi` matches all characters that are not a vowel. Note that characters like `.`, `!`, `[`, `@`, `/` and white space are matched - the negated vowel character set only excludes the vowel characters.

        

    - **Find Single or Repetead charecters one after another `+`,`*`:-**


        1. `a+ :-`

            Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

            You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

            For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

            If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

        2. `a*`

            The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

            The character to do this is the asterisk or star: *.
            ```
            let soccerWord = "gooooooooal!";
            let gPhrase = "gut feeling";
            let oPhrase = "over the moon";
            let goRegex = /go*/;
            soccerWord.match(goRegex);
            gPhrase.match(goRegex);
            oPhrase.match(goRegex);
            ```
            In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

    - **Greedy & Layzy Match `?`:-**

        In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

        You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

        Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

        However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

        Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

    - **Search for start of string With caret character  `^` :-**

        Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

        In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
        ```
            let firstString = "Ricky is first and can be found.";
            let firstRegex = /^Ricky/;
            firstRegex.test(firstString);
            let notFirst = "You can't find Ricky now.";
            firstRegex.test(notFirst);
        ```
        The first test call would return true, while the second would return false.

    - **Search for end of string with dollar charecter `$` :-**

        You can search the end of strings using the dollar sign character $ at the end of the regex.
        ```
        let theEnding = "This is a never ending story";
        let storyRegex = /story$/;
        storyRegex.test(theEnding);
        let noEnding = "Sometimes a story will have to end";
        storyRegex.test(noEnding);
        ```
        The first test call would return true, while the second would return false.


### Regex ShortHand Charecter Classes

- **Match All letters and numbers with `\w`**

    We have an shortcut for matching `/[A-Za-z0-9_]+/` which matches all letters and numbers along with `_` can be replaces with only `\w+`.

    ```
    let longHand = /[A-Za-z0-9_]+/;
    let shortHand = /\w+/;
    let numbers = "42";
    let varNames = "important_var";
    longHand.test(numbers);
    shortHand.test(numbers);
    longHand.test(varNames);
    shortHand.test(varNames);
    ```
    All four of these test calls would return true.

- **Opposite For All letters and numbers with `\W`**

    You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

    ```
    let shortHand = /\W/;
    let numbers = "42%";
    let sentence = "Coding!";
    numbers.match(shortHand);
    sentence.match(shortHand);
    ```
    The first match call would return the value `["%"]` and the second would return `["!"]`.

- **Digits Shorthand for 0-9 Digits `\d` :-**

    The shortcut to look for digit characters is `\d`, with a lowercase d. This is equal to the character class `[0-9]`, which looks for a single character of any number between zero and nine.

    ```
    let shortHand = /[\d]/g
    let string = "a4654a21"
    string.match(shortHand) // ['4','6','5','4','2','1']
    ```
- **Opposite For All numbers `\D` :-**

    You can negate all the digits with the shortHand uppercase `\D` which is equivalent to `/[^0-9]/` which negates all the numbers.

- ****
