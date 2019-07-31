
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}

body {
    font-style: normal;
    font-family: Helvetica, sans-serif;
}

ul,
ol {
    list-style: none;
}

a {
    color: #333;
    text-decoration: none;
    background-color: transparent;
}

a:hover,
a:active {
    outline-width: 0;
    text-decoration: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

hr {
    border: 0;
    height: 1px;
}

img {
    border-style: none;
    vertical-align: top;
}

img:not([src]) {
    display: none;
}

svg:not(:root) {
    overflow: hidden;
}

html {
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: 100%;
}

input,
textarea,
button,
a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
    display: block;
    margin: 0;
    padding: 0;
}

audio,
canvas,
progress,
video {
    display: inline-block;
    margin: 0;
    padding: 0;
}

audio:not([controls]),
video:not([controls]) {
    display: none;
    height: 0;
}

progress {
    vertical-align: baseline;
}

mark {
    background-color: #ff0;
    color: #000;
}

sub,
sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

button,
input,
select,
textarea {
    font-size: 100%;
    outline: 0;
}

button,
input {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

textarea {
    overflow: auto;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
}

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box;
    padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

[type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}
.clearfix::after {
    content: "";
    display: block;
    /*height: 0;*/
    /*overflow: hidden;*/
    clear: both;
}
.clearfix {
    *zoom: 1;/*兼容低版本浏览器*/
}

`