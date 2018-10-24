#Rooster Grin Front-end

###Translating comps and wireframes into flexible and reusable code

[Live demo](https://juancarlucci.github.io/rooster/)

## Process/approach:

Replicate mockup as closely as possible

Use HTML5, CSS3, Sass, jQuery, JavaScript, React to create responsive app

## Requirements

<em>Please read through ALL the requirements before starting your project</em>

<strong>Below are the design requirements:</strong>

  1. Full width slider with 3 images
  2. Fixed / sticky buttons
  3. Mockups are followed
  4. Use of Roboto font

Feel free to add as may animations you would like and any sized image you feel best. You also have some design freedoms to create / use any of the assets provided. Feel free to use any stock images as well. We would also like you to be as creative as you would like. We usually face a lot of ambiguity when developing and designing for our clients so we have left some things up to you to see how you design.

<strong>Below are the technical requirements:</strong>

  1. Modular and concise code
  2. Fully functional capabilities of built features
      - We should not be seeing errors when we click on buttons
  3. Understanding best practices of web development
      - Naming conventions and styling
  4. Best use of images and assets
  5. Use of a grid system
  6. Responsive

As for the technology that you should use its up to you.

### Required Features:
1. Fade In Effect or Slide in effect for checkerboard section
2. Subtle animation on the percent numbers
3. Fully Functional Site

### Optional Features:
  1. Use of dev server
  2. Front end framework
  3. Animations
  4. Dynamic backend from a CMS
### *Please also submit a small write up discussing (leave answers to a sentence or two):*

  1. What you technologies you used and why (if you only used html, css, and js please explain any templates or frameworks you may have used i.e. bootstrap)
  2. Any struggles you faced when developing with technology you chose
  3. What you enjoyed the most and why

## Code Snippets

#### 1. Use of Sass variables and nested rules

```
style.sass

nav
  position: sticky
  top: 0
  left: 0
  background-color: $white
  text-align: center
  padding: 1.250em 17.188em
  display: flex
  align-items: center
  justify-content: space-around
  z-index: 1
  @media screen and (max-width: $break-small)
    display: block
    width: 100%
    padding: 10px 0px
    display: flex
    flex-direction: column
    justify-content: space-between

```
#### 2. Semantic HTML5

```
Index.html

<nav>
  <a href="#about">About</a>
  <a href="#gallery">Gallery</a>
  <a href="blog.html">Blog</a>
  <a href="#">Contact</a>
</nav>
<header class="vertically-centered" id="landing-header">
  <div>
    <h1><a href="">Monument</a></h1>
    <h2>A Lifestyle Magazine</h2>
  </div>
</header>

<section class="archive">

  <h2>From the archive</h2>

  <div class="flex wrap">
    <article class="card">
      <img src="images/article_1.jpg" alt="cactus in southwest photo">
      <h3>Issue Twenty - The Southwest</h3>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.</p>

      <button>Read More</button>

    </article>
```


#### 3. Appropriate use of Flexbox

```
display: flex
align-items: center
justify-content: space-around

```

#### 4. Media queries for responsive behavior


```
landing.sass

.about
  background-color: $color_humming_bird
  padding: 7.500em
  text-align: center
  @media screen and (max-width: $break-small)
    padding: 7.500em .5em

```

#### 5. Front end validation for user form

```
main.js

if (fieldType === 'email') {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isValidEmailAddress = re.test($currentField.val());
  if (!isValidEmailAddress) {
    $currentField.addClass('error');
    $currentField.siblings('.error-message').text('Please enter a valid email address.').fadeIn();

    return;
  }

}

```

<img src="readme-assets/validation.jpg" alt="Front-end validation" width="250"/>

#### 6. Smooth scrolling across pages

```
main.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

```
7. Use HTML5 and CSS Validators

<img src="readme-assets/validation-html.jpg" alt="HTML validation" width="500"/>

<img src="readme-assets/validation-css.jpg" alt="CSS validation" width="500"/>
