// # Classes in JavaScript:

// ### What are JavaScript Classes:

// normally, in JavaScript we have objects and there are many ways we can create objects 

```jsx
// eg of how we used to create an object in javascript(ES5)
const obj = {
		name: 'jr',
		age: 45
};

const obj1 = new Object()

// by using constructor function
function Object(parameter1, parameter2){
		this.propertyname = parameter1;
		this.propertyname = parameter2;
}
```

// in ES6, JavaScript introduced a new way to create an object, and with that way we can create many objects by only referring to one template only.

// and that way, is achieved by using **classes.**

// ### How to use JavaScript Classes:

```jsx
// class syntax in JavaScript

class ClassName {
		constructor () {
				// statements
		} 
}

let object1 = new ClassName() // the braces are used to call the constructor
```

// → we use the keyword class to create a new class,

// → as a convention, a class must have a name of course and that name must always start with a capital letter.

// → inside the class we put in a constructor function which creates the object and assigns properties to it(created object)

// → after creating the class, in order to get the object and use it we need to reference the class and call the constructor function by adding the braces on the class name.  

// ### What is a constructor function  and what is it used for:

// → a constructor function is a function that runs once in a class during object creation.

// → the constructor function creates the object and it is also responsible in assigning the properties to the object.

// ### Classes in action:

```jsx
// lets create a class that will help us to create a Rectangle object:
class Rectangle {
		constructor () {
			console.log('The Rectangle has been created successfully')
		}
} // now we had created the template for the Rectangle object;

// lets now create the individual objects:
let firstRectangle = new Reactangle()
let secondRectangle = new Rectangle()
// the ()'s calls the contructor function which then creates the object.
```

// the above code represents, a simple program that uses class to create objects based on a Rectangle template.

// ### Adding properties to objects

// → let’s extend our rectangle object so that our created objects can have properties

// → a rectangle can have many properties like width, height, color

// → we pass the properties in the constructor as arguments as it is the one responsible to create an object and it assigns those properties to the object of course

```jsx
// let us extend our Rectangle class:
class Rectangle {
		constructor(_width, _height, _color) {
							this.width = _width;
							this.height = _height;
							this.color = _color	;		
			}
}  
// now each object we create can have its those properties
let firstRectangle = new Rectangle(10, 5, 'yellow');
console.log(firstRectangle) // Rectangle {width: 10, height: 5, color: 'yellow'}
let secondRectangle = new Rectangle(100, 25, 'blue');
console.log(firstRectangle) // Rectangle {width: 100, height: 25, color: 'blue'}
```

// - what is the use of the **this** keyword:
    
//     → the this keyword specifies the current object, the object that is being created by the constructor function.
    
//     → each object being created by the constructor function will be assigned those properties by using the this keyword
    

// ### Adding methods:

// → every object has methods

// → and methods are usually what those objects do or the action we can perform with its properties.

// → example: with the properties of a rectangle we can get the rectangle’s area, perimeter, description, etc.

// → let’s see it in action:


// ```jsx
// class Rectangle {
//     constructor(_width, _height, _color) {
//                         this.width = _width;
//                         this.height = _height;
//                         this.color = _color	;		
//         }
//     // we add methods here:
//     getArea (){
//             return this.width * this.height
//     } // this method is for creating the Area of the rectangle(s) object

//     describeMe (){
//             console.log(`I am a Rectangle of ${this.width} x ${this.height} am ${this.color}`)
//     }
// } 

```

// to use the created methods by calling them using the dot(.) operator:
// first rectangle:
let firstRectangle = new Rectangle(10, 5, 'yellow');
console.log(firstRectangle.getArea());
firstRectangle.describeMe(); // prints the description of the rectangle

//second rectangle:
let secondRectangle = new Rectangle(100, 25, 'blue');
console.log(secondRectangle.getArea());
secondRectangle.describeMe(); // prints the description of the rectangle
```

// → so as a recap, we use JavaScript classes to create one or more than one objects. classes in JavaScript are said to be Templates that we use to create objects.

// → with objects: 

// - properties are what they have or characteristics(like: height, color)
// - Methods are the actions that we can perform with the object using the object’s properties..!

// → the constructor function is the function that creates an object and assign property to it using the this keyword.

// → to create an object we References the class name and we also add the brackets to call the constructor function.

// → to call the methods inside a class we use the normal way of calling methods by using the dot operator.