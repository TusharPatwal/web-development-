![alt text](https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw)

# HTML

HTML is the standard markup language for Web pages.With HTML you can create your own Website.

Example ->

```
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

<hr>

## HTML Documents

All HTML documents must start with a document type declaration: !DOCTYPE html.<br>
The HTML document itself begins with html and ends with /html.<br>
The visible part of the HTML document is between body and /body.

### HTML Headings

HTML headings are defined with the h1 to h6 tags.<br>
h1 defines the most important heading. h6 defines the least important heading:

```
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
```

### HTML Paragraphs

HTML paragraphs are defined with the p tag:

```
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

### HTML Links

HTML links are defined with the <a> tag:

```
<a href="https://www.w3schools.com">This is a link</a>
```

### HTML Images

HTML images are defined with the img tag.<br>
The source file (src), alternative text (alt), width, and height are provided as attributes:

```
<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">
```

### The href Attribute

The <a> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:

```
<a href="https://www.w3schools.com">Visit W3Schools</a>
```

### The src Attribute

The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:

```
<img src="img_girl.jpg">
```

### The style Attribute

The style attribute is used to add styles to an element, such as color, font, size, and more.

```
<p style="color:red;">This is a red paragraph.</p>
```

### Image as a Link

To use an image as a link, put the img tag inside the a tag:

```
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
```

### Background Image on a Page

If you want the entire page to have a background image, you must specify the background image on the body element:

```
body {
  background-image: url('img_girl.jpg');
}
</style>
```

<hr>

## HTML Tables

HTML tables allow web developers to arrange data into rows and columns.
<br>
| Company | Contact | Country |
|----------|----------|----------|
| Alfreds Futterkiste | Maria Anders | Germany |
| Centro comercial Moctezuma | Francisco Chang | Mexico |
| Ernst Handel | Roland Mendel | Austria |

### Define an HTML Table

A table in HTML consists of table cells inside rows and columns.<br>

```
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```
