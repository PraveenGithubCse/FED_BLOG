import React from 'react';

function MyWebBlog() {
  return (
    <div className='main-container'>
        <div className='content'>
         <h2 style={{marginLeft:"5px"}} align="center" id="main">Arrow Functions In JavaScript</h2>
         <p lang='eng'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arrow functions are introduced in ES6, which provides you a more accurate way to write the functions in JavaScript. They allow us to write smaller function syntax. Arrow functions make your code more readable and structured.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arrow functions are anonymous functions (the functions without a name and not bound with an identifier). They don't return any value and can declare without the function keyword. Arrow functions cannot be used as the constructors. The context within the arrow functions is lexically or statically defined. They are also called as Lambda Functions in different languages.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arrow functions do not include any prototype property, and they cannot be used with the new keyword.
</p><br />
<div id="syn">
<p><b>Syntax for defining the arrow function</b><br/>
 
<br/></p><p className='example'>
const functionName = (arg1, arg2, ?..) =&gt; &#10100;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body of the function<br/>
&#10101;
  </p>
<p>Example of Arrow Functions</p><br/>
<p className='example'>var myfun =() =&gt; &#10100; <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("It is a Arrow Function");<br/>     
 &#10101; <br/>
 myfun();<br/><br/>
 <b>Output:</b><br/>
 It is a Arrow Function 
 </p>
</div><br/>

<div id="WPar">
  <p>
  <b>Arrow Function with Parameters</b><br/><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If you require to pass more than one parameter by using an arrow function, then you have to pass them within the parentheses.
  </p><p className='example'>var show = (a,b,c) =&gt; &#10100;  <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(a + " " + b + " " + c );  <br/>
    &#10101;<br/>
show(100,200,300);  <br/><br/>
<b>Output:</b><br/>
100 200 300
</p>
</div><br/>
<div id="WDefPar">
  <p><b> Arrow function with default parameters</b><br/><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In ES6, the function allows the initialization of parameters with default values, if there is no value passed to it, or it is undefined. You can see the illustration for the same in the following code:</p>

<p className='example'>var show = (a,b=200) =&gt; &#10100;  <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(a + " " + b);  <br/>
    &#10101;<br/>
show(100);  <br/><br/>
<b>Output:</b><br/>
100 200</p>

</div><br/>
<div id="WResPar">
  <p>
  <b>Arrow function with Rest parameters</b><br/><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rest parameters do not restrict you to pass the number of values in a function, but all the passed values must be of the same type. We can also say that rest parameters act as the placeholders for multiple arguments of the same type.<br/>
  For declaring the rest parameter, the parameter name should be prefixed with the spread operator that has three periods (not more than three or not less than three).<br/>
  You can see the illustration for the same in the following example:
  </p><p className='example'>var show = (a, ...args) =&gt; &#10100; <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(a + " " + args);  <br/>
    &#10101;<br/>
show(100,200,300,400,500,600,700,800);  <br/><br/>
<b>Output:</b><br/>
100 200,300,400,500,600,700,800
</p>
</div><br/>
<div id="WoPar">
  <p><b>Arrow Function without Parentheses</b><br/><br/>
  If you have a single parameter to pass, then the parentheses are optional.</p>
<p className='example'>var show = x =&gt; &#10100; <br/>
    console.log(x);  <br/>
    &#10101; <br/>
show("Hello World");<br/><br/>
<b>Output:</b><br/>
Hello World   
</p>
</div><br/><div id="Adv">
  <p><b> Advantages of Arrow Functions</b><br/><br/>
  1. It reduces the code size: When we use the syntax of arrow function, the size of the code gets reduced. We can write less amount of code by using the arrow function.<br/>
2. Return statement and Functional braces are optional for single line functions:In ES5, we need to define the return statement in the functions, but in ES6, we do not require to define the return statement for single-line functions. Functional braces are also optional for the single-line functions.<br/>
3. Lexically bind the context: Arrow function binds the context lexically or statically. The handling of this is different in arrow functions as compared to regular functions. In the arrow function, there is not any binding of this. In regular functions, this keyword is used to represent the objects that called the function, which could either be a window, a button, or a document or anything.<br/>
 </p>


</div>

        </div>
        <div className='blog-card'>
          <div className='content-blog'>
             <div className='opt'><a href='#'>Home </a></div>
             
             <div className='opt'><a href='#main'>Arrow Functions </a></div>
             <div className='options'>
             <div><a href='#syn'>1.Syntax for Arrow Functions</a></div>
             <div><a href='#WPar'>2.Function With Parameters</a></div>
             <div> <a href="#WDefPar">3.With default parameters</a></div>
             <div> <a href="#WResPar">4.With Rest parameters</a></div>
             <div> <a href="#WoPar">5.Without Parentheses</a></div>
             <div> <a href="#Adv">6.Advantages</a></div>
             
             </div>
             
            
          </div>
          
        </div>

    </div>
  )
}

export default MyWebBlog;