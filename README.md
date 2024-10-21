# About
Tässä on mun tekemä Howrse wiki sivu, jossa myös testi taidoillesi :). Tovottavasti nautit. Huom! Kirjan sivuja pystyy kääntämään klikaamalla tai vetämällä sivuja. Valitettavasti kirja välilehti ei ole puhelin ystävällinen, mutta muut sivut ovat. Jos sivulla on kirjoitus virheitä tai faktat ovat väärin pistäppä viestiä tulemaan. 

Linkki sivulle: https://howrse-wiki.pages.dev/

# HTML
#### 1/5 Basic HTML structure is present.
- Multible usages
- For example indelx.html (lines 1-11)

#### 2/5 HTML structure with clear content differentiation (headings, paragraphs, lists).
- Multible usages
  <p>Example:</p>
- Headings: index.html (lines 34, 80, 83), contact.html (lines 17, 27, 43)
- Paragraphs: index.html (lines 81, 86, 98) contact.html (lines 19, 23) test.html (lines 27-32)
- Lists: index.html (lines 36-73 , 181-188 ), contact.html (lines 29-34), 

#### 3/5 Use of forms, links, and media.
- Multible usages
  <p>Example:</p>
- Forms: contact.html (lines 45-49)
- Links: index.html (lines 17-20, 46-48 , 50, 52-55, 121-165), contact.html (lines 30-32) topnav.html (lines 2-5)
- Media: index.html (lines 28, 200, 245-247, 276), contact.html (lines 39)
 

#### 4/5 Tables are effectively used.
- Usages in:
  - index.html (lines 113-169, 223-244, 368-399)
  - contact.html (line 21), a js array gets put in table in contact.js (lines 6-24)

#### 5/5 Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.
- navbar: index.html (line 13), contact.html (line 12), test.html (line 13)
  - build: topnav.html (lines 1-6) , nav.js (Lines 1-23), style.css (lines 136-205)
- sidenav: index.html (lines 15-21)
  - build: style.css (lines 210-233)


# CSS 

#### 1/5 Basic CSS styling (colors, fonts).
- Multible usages clearly in the website
  <p>Example:</p>

- Colors: style.css (lines 13, 137, 155, 232), contact.css (lines 4, 28, 76), test.css (lines 54, 93, 100)
- Fonts: style.css (lines 43, 108), test.css (line 9)

#### 2/5 Use of classes and IDs to style specific elements.
- Multible usages
  <p>Example:</p>

- style.css (lines 29, 42, 51, 62, 74, 153-164)
- contact.css (lines 25-35, 37-41, 47-56)
- test.css (lines 34, 58, 114)


#### 3/5 Implementation of responsive design elements.
Note. The home bage is not compatible for phone because the flipbook effect. The Test and contact sites are compatible for different devices.
- Test site:
  - test.css (lines 216-288)
- Contact site:
  - contact.css (lines 99-138)


#### 4/5 Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)
- Multible usages
  <p>Example:</p>
  
- Grid: style.css (line 10), contact.css (lines 10,16)
- Flexbox: style.css (lines 53, 123, 138), contact.css (lines 30, 38, 66, 78) test.css (lines 16, 27, 37, 51)

#### 5/5 Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.
User experience is noticed in flipbook pages with beautiful flipping animation. Sites are aesthetic and colors are pleasing to the eye. The layout is easy to use and fun. 

# JavaScript Basics

#### 1/5 Simple interactions (like alerts on button click).
Allert on button click. The site notifies user when message is sent succesfully/something went wrong. 
- message-sender.js (line 33, 41) 


#### 2/5 Multiple event listeners and basic DOM manipulations.
Event listeners are used in the test.html to look when buttons are clicked
- test.html (lines 36, 62, 96)
- flipbook.js (line 5)


#### 3/5 Use of arrays, objects, and functions.
Multible usages:
- Arrays: contact.js (line 1), test.js (231, 254)
- Objects: contact.js (line 7, 9), dogge.js (lines 1, 2, 7), flipbook.js (line 6), message-sender.js (lines 1, 2, 5, 6)
- Functions: contact.js (line 6-25), test.js (lines 233, 252, 266, 313), flipbook.js (line 4)


#### 4/5 Advanced logic, looping through data, and dynamic DOM updates.
Multible usages:
  <p>Example:</p>


-  If, Else, Switch jne: nav.js (lines 16-18), test.js (lines 236-240, 273, 280, 296)
-  For, ForEach, map jne: contact.js (line 15), test.js (line 346)
- DOM updates:
  - GetElementbyId: contact.js (line 24), dogge.js (line 2), message-sender.js (lines 2, 34, 39), nav.js (line 4)
  - QuerySelector: nav.js (line 7)

#### 5/5 Consistent use of Object-Oriented JavaScript principles.
- Usages: horse.js (lines 2-6, 8, 10) contact.html (line 36)

# Asynchronous Operations

#### 1/5 Use of timers.
Timer used to take time in test
- test.js (lines 401-422, 319, 327)

#### 2/5 Successful implementation of an AJAX call or Fetch.
Fetch used multible times.
Example: dogge.js (line 4), nav.js (line 1), 

#### 3/5 Data from the asynchronous call is displayed on the webpage.
- dogge.js (line 4), contact.html (line 39). Dog picture (fetched) is displayed on the webpage. 
- setTimeout: test.js(lines 321, 303, 291)


#### 4/5 Error handling is implemented (for failed API calls, etc.).
Multible usages:
  <p>Example:</p>


- dogge.js (line 13), message-sender.js (line 37), nav.js (line 23)

#### 5/5 Effective use of asynchronous data to enhance user experience.
Fetch was listed before,
Promise used: horse.js (line 17), contact.html (line 37)
