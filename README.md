# Lenovo Challenge

## Landing Page (LP) Challenge

This project implements a responsive landing page based on the provided [mockup](https://rebrand.ly/lenovodevtest).

## Requirements

The landing page adheres to the following requirements:

1.  **Fully Responsive Design:**
    * **Desktop:** Pixel-perfect replication of the provided mockup (breakpoint: 1280px and above).
    * **Tablet:** Adapted layout for screens from 768px up to 1279px.
    * **Mobile:** Optimized layout for screens from 360px up to 767px.

2.  **CSS and HTML Only:** The styling is implemented using pure CSS, without relying on any external CSS frameworks or libraries like Bootstrap.

3.  **Semantic HTML5 Markup:** The HTML structure utilizes semantic elements to ensure proper document organization and accessibility.

4.  **Optional JavaScript Dynamism:** The project may include vanilla JavaScript to enhance user interaction and add dynamic features. (Note: jQuery is not used).

5.  **Optional React/TypeScript and/or SASS/SCSS:** The project might be built using React (with or without TypeScript) and/or styled using SASS/SCSS.

## Technologies Used

* HTML5
* CSS3 (potentially SASS/SCSS)
* JavaScript (vanilla - optional)
* React (optional)
* TypeScript (optional, if using React)

## How to Run the Project

To run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Jableed43/lenovo-test
    ```

2.  **Navigate to the landing-page directory:**
    ```bash
    cd lenovo-test/landing-page
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```

    This command will typically open the landing page in your default web browser.

### Result
#### Lenovo Design
![lenovo-lenovo](https://github.com/user-attachments/assets/76251f91-51be-4d93-b278-77ed3adbaf28)

#### My result
![mine-lenovo](https://github.com/user-attachments/assets/746bc3e8-ed6a-4ee8-afe0-81f0886a1a98)

## JavaScript Challenge

The solution to the following JavaScript exercises can be found in the `js-challenge` folder.

* **Note:** For exercises 1 and 2, don’t use built-in Array methods. Use only loop control flow statements like `while`, `for`, and `do-while`.
* **Note 2:** Please have a clear, understandable, and well-documented code (which means clear function names, clear variable names, and not lots of inline comments).
* **Note 3:** Results can be shown in the console, there’s no need to create HTML for these (except item 4). If you want to add TypeScript you can.

1.  Create a function that receives an array of positive integers and returns an array with only the input’s pair numbers.
    For example:
    ```
    [INPUT] array = [1, 2, 3, 4];
    [OUTPUT] array = [2, 4];
    ```

2.  Create a function that receives a String as a parameter and returns a Boolean value indicating if the word is a palindrome\* or not.
    \*a word or group of words that is the same when you read it forwards from the beginning or backwards from the end: "Refer" and "level" are palindromes.

3.  Create a function that receives two numbers and shows the prime numbers between them (it includes both numbers).
    If the function received 3 and 15 as the numbers, you should return something like:
    ```
    3, 5, 7, 11, 13
    ```

4.  Create a simple page with a button, that when clicked it updates the counter next to it.

    ```
    If button was not pressed: Counter: 0

    After button was pressed once: Counter: 1
    ```

5.  If you had to represent, using JS data types, this list:
    Large blue car - Small Red car - Large Blue car - Large Red car – Medium Blue car – Small Red car – Large Blue car – Medium Red car
    How would you do it?

6.  Using the data from exercise 5. How would you represent it if the data was needed to be accessed easily by color? And how if it was needed to be accessed by size?

## Notes

* The desktop view aims for pixel-perfect accuracy based on the provided mockup.
* Mobile and tablet layouts are adapted to provide an optimal viewing experience on smaller screens.
* Accessibility has been considered in the HTML structure through the use of semantic elements.
* Any dynamic behavior for the landing page is implemented using vanilla JavaScript.
* The project might utilize SASS/SCSS for more efficient CSS development, which would then be compiled into `css/style.css`.
* The landing page project might be built using React for a component-based architecture, in which case `npm start` would launch a React development server.
