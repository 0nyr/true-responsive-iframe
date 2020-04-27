# 🌞 true-responsive-iframe 🌞
Presenting a solution for responsive iframe without aspect ratio assumption.

StackOverflow related question: https://stackoverflow.com/questions/61407418/how-to-make-an-iframe-responsive-without-aspect-ratio-assumption

# 🚀 The idea 🚀
The goal is to resize the iframe when necesary, in other words when the window is resized. This is performed with JavaScript to get the new window size and resize the iframe in consequence.

NB: Don't forget to call the resize function after the page is loaded since the window is not resized by itself after page load.
