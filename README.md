# CodeWarsCompleted

1. Sentence Smash - Rank 8
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
```
Examples:
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
```

2. Square(n) Sum Rank 8
Complete the square sum function so that it squares each number passed into it and then sums the results together.
```
Examples:  for [1, 2, 2] it should return 9  

```

3. Reversed Strings
Complete the solution so that it reverses the string passed into it.
```
Examples:
'world'  =>  'dlrow'
'word'   =>  'drow'
```

4. Is it a palindrome?
Write a function that checks if a given string (case insensitive) is a palindrome.


5. Invert values
iven a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
```
Examples:
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
```
6. Simple multiplication
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

7. If you can't sleep, just count sheep!!
If you can't sleep, just count sheep!!
Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

8. String repeat
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
```
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
```
9. Grasshopper - Object syntax debug
While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.

10. Training JS #5: Basic data types--Object
In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}
you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")
Task
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."
When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

11. Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

12. Improving Math.round(x)

Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

You may find the following Math methods useful:

Math.round(x) (of course)
Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)

13. Jenny's secret message
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

14. Counting sheep...
DESCRIPTION:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

```
For Example:

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
```
15. Count the Monkeys!

DESCRIPTION:
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

```
For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
```

16. Beginner - Reduce but Grow

DESCRIPTION:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24]

17. Find Multiples of a Number

DESCRIPTION:
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

18. Grasshopper - Debug

DESCRIPTION:
Debug celsius converter
Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9)
Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

19. My head is at the wrong end!

DESCRIPTION: 
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!

20. SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes

DESCRIPTION:
Preloaded for you is a class Dog:

class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}
You are then given a working class Labrador as your initial code.

class Labrador {
  constructor(name, age, gender, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}
Shorten it so that it meets the strict character count requirements for this Kata.

Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D

21. Convert a Boolean to a String

DESCRIPTION: 

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.