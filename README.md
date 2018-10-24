#Rooster Grin Front-end

###Translating comps and wireframes into flexible and reusable code

[Live demo](https://juancarlucci.github.io/rooster/)

## Process/approach:

Replicate mockup as closely as possible

Use HTML5, CSS3, Sass, jQuery, JavaScript, React to create responsive app

## Requirements

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

I incorporated React.js because I like the modular nature of it. It is easy to maintain and update. For example, each component gets its own css style sheet for ease of maintenance.

  2. Any struggles you faced when developing with technology you chose

In order to incorporate SASS efficiently I had to modify the webpack.config file. This allowed me to add SCSS Loaders.

  3. What you enjoyed the most and why

I enjoyed the process of translating the mockups into reusable code.

## Code Snippets

#### 1. Use of Sass variables and nested rules

```
style.sass

$blueColor: #1676DD
$darkBlueColor: #283647
$orangeColor: #F36819
$lightOrangeColor: rgb(255, 180, 73)
$yellowColor: #F7931D
$overRed: #F36819
$overDark: #000000

...

.header2
  font-size: 1.750em
  color: $orangeColor

.header3
  font-size: 20px
  font-size: 1.250em
  color: $yellowColor
  letter-spacing: 2px

.lorem
  font-size: 14px
  font-size: 0.875em
  line-height: 1.250em

.lorem159
  letter-spacing: 2px
  font-weight: bold
  font-size: 3.438em
  color: $darkBlueColor

```
#### 2. Semantic HTML5

```
Section1.js

<article className="page-articles">
  <section className="grid">
    <div className="page-item">
      <img src="images/page-icon.svg" alt="page icon" />
      <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta incidunt, eum quos</p>

```


#### 3. Appropriate use of Flexbox

```
display: flex
align-items: center
justify-content: space-around

```
#### 4. CSS-grid layout

```
Section3Grid.css

.grid3 {
  align-items: center;
	display: grid;
  grid-gap: 10px;
  grid-template-areas: "sub1 img1"
                       "img2 sub2";
}

```

#### 5. Media queries for responsive behavior


```
style.sass

@media only screen and (max-width: 560px)
  button
    width: 20%
    font-size: 0.7em

```
#### 6. Adding SCSS loaders to Webpack

```
webpack.config.dev.js

{
    test: /\.sass$/,
    loaders: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        require.resolve('sass-loader')
    ]
},

```
