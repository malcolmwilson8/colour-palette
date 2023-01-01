# Colour Palette

## Required features
- [x] Built with HTML, CSS & JS
- [x] Code hosted on GitHub
- [x] Deployed to GitHub Pages
- [x] Auto-generate multiple colours
- [x] Allow users to change each colour

## Optional features
- [ ] Export colour palette in different formats (e.g. JSON, CSS variables)
- [ ] Generate related colours rather than random (e.g. ascending lightness, complementary hues etc)
- [ ] Save palettes to localStorage
- [ ] Lock function
- [ ] Copy function

## Initial thoughts
Rendering the page layout should be straightforwards: 
- 4-5 `<div>` elements holding information on each colour swatch
- Use of the <kbd> <br> Spacebar <br> </kbd> to generate multiple hex code colours
- One button to copy a colour's hex code
- Functionality to allow users to change each individual colour's hex code

To generate multiple hex code colours, the colour palette will need to incorporate a method such as `math.floor(math.random())`. I envisage assigning these randomly generated colours to the `<div>` elements, which will update each time the user presses the <kbd> <br> Spacebar <br> </kbd>.
