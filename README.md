#Usage
Sexyforms.js will allow you to create great looking input forms with ease.  Only a small amount of HTML and Javascript is required.  

#Getting Started
Include `sexyforms.js` and call the function in your `main.js`.  Pass the .sexyForm function the style you would like to use.  Pass the `.sexyForm()` function the style you would like to use for your form.  Also link the `sexyForms.css` file in your head tag.

```
$(function() {
	$(.yourInput).sexyForm(style);
});  
```

Include this in your HTML markup and the form will be created inside the `span` element with a class of `sexyform`
```
<span data-placeholder='Write your placeholder here' class= "sexyform"></span>
```

#How It Works
Sexyforms.js takes a single span element within your HTML and replaces it with a nice looking input form!  All designs were inspired by this [codrops article](http://tympanus.net/codrops/2015/01/08/inspiration-text-input-effects/).  All extra markup is added with jQuery and then animated on click.  To change the colours and other stylistic aspects of your input forms go into the sexyForms.css file.
