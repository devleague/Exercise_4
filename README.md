Exercise_4
==========

Sorting data in B-Tree structure

Pair Programming or Individual Programming
You will be given an array of 100,000 items
There are 3 different kinds of data to work with, choose one
  - Phone Numbers
  - Dictionary
  - Email Addresses
    - nodes by tld -> domain -> name
    - (easier? flatter, do this only if you’ve finished one of the others)

- Whiteboard your solution first
- Write your failing tests in exercise_3.tests.js
- import the appropriate data generator js file on line #3 of index.html
  - replace [DATA KIND] with chosen js filename

  **window** will have two global variables
  **window.unsorted_100k**
  **window.unsorted_50**

- track how many total nodes are created in the 100k b-tree
- display the count of the total nodes in #node_count
- dipslay the sorted_50 data in JSON format in #sample_json

File structure:
  - index.html
  - js/exercise_3.js
  - js/exercise_3.tests.js
  - js/lib/phone_numbers.js
  - js/lib/emails.js
  - js/lib/dictionary.js
  - jasmine-2.0.0/
