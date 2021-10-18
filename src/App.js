import "./App.css";
import Navbar from "./Sources/Components/Navbar.js";
import Take1v from "./Sources/Components/Take1v";
import Take2v from "./Sources/Components/Take2v";
import Take3v from "./Sources/Components/Take3v.js";      
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Activitybar from "./Sources/Components/Activitybar";
import About from "./Sources/Components/About";
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [Value, setValue] = useState();
  const [Value2, setValue2] = useState();
  const [Value3, setValue3] = useState();
  const [Result, setResult] = useState()
  return (
    <>
      <Router>
        <Navbar />
        <Activitybar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>

          <Route exact path="/add">
            <Take2v Mhading="Addition" defn="The sum of Two number in called Addition" value={Value} value2={Value2} btnName="Add" btnFunc={()=> setResult(parseInt(Value) + parseInt(Value2))} setValue={setValue} setValue2={setValue2} result={Result} />
          </Route>
          
          <Route exact path="/subtract">
            <Take2v Mhading="Subtract" defn="The Subtract of Two number in called Subtract" value={Value} value2={Value2} btnName="Add" btnFunc={()=> setResult(parseInt(Value) - parseInt(Value2))} setValue={setValue} setValue2={setValue2} result={Result} />
          </Route>     
               
          <Route exact path="/multiply">
              <Take2v Mhading="Multiply" defn="The Multiply of Two number in called Multiply" value={Value} value2={Value2} btnName="Add" btnFunc={()=> setResult(parseInt(Value) * parseInt(Value2))} setValue={setValue} setValue2={setValue2} result={Result} />
          </Route>     
               
          <Route exact path="/devide">
            <Take2v Mhading="Devide" defn="The Devide of Two number in called Devide" value={Value} value2={Value2} btnName="Add" btnFunc={()=> setResult(parseInt(Value) / parseInt(Value2))} setValue={setValue} setValue2={setValue2} result={Result} />
          </Route>

          <Route exact path="/sq">
            <Take1v Mhading="Square" defn="A square number is a number multiplied by itself. This can also be called 'a number squared'. The symbol for squared is ²." value={Value} btnName="Square" btnFunc={()=> setResult((Value)*(Value))} setValue={setValue} result={Result} />
          </Route>  

          <Route exact path="/sqrt">
            <Take1v Mhading="Squa Root" defn="The square root of a number is another number which produces the first number when it is multiplied by itself. For example, the square root of 16 is 4. 'square root'" value={Value} btnName="Square Root" btnFunc={()=> setResult(Math.sqrt(Value))} setValue={setValue} result={Result} />
          </Route>

          <Route exact path="/cb">
            <Take1v Mhading="Cube" defn="In math, a cube is a number multiplied by itself three times. The cube of 2 is 8 (2 x 2 x 2)." value={Value} btnName="Cube" btnFunc={()=> setResult((Value)*(Value)*(Value))} setValue={setValue} result={Result} />
          </Route>

          <Route exact path="/cbrt">
            <Take1v Mhading="Cube Root" defn="A cube root is a special value that when we multiply three times gives us the desired number. Thus, a perfect cube is a cube of a whole number. ... On the other hand, a cube root is when we multiply the lowest number three times to arrive at the number" value={Value} btnName="Cube" btnFunc={()=> setResult(Math.cbrt(Value))} setValue={setValue} result={Result} />
          </Route>

          <Route exact path="/pRectangle">
            <Take2v Mhading="Perimeter of Rectangle" defn="The perimeter of rectangle is the total distance ofits outer boundary. It is twice the sum of its length and width and it is calculated with the help of the formula: Perimeter = 2(length + width)" value={Value} value2={Value2} btnName="Perimeter of rectangle" btnFunc={()=> setResult(2*(parseInt(Value) + parseInt(Value2)))} placeHolder1="Enter a Length" placeHolder2="Enter a Width" setValue={setValue} setValue2={setValue2} result={Result} />
          </Route> 

          <Route exact path="/pSquare">
            <Take1v Mhading="The perimeter of a square" defn="The perimeter of is the total length of all the sides of the square. Hence we can find the perimeter of a square by adding all its four sides. The perimeter of the given square is a + a + a + a. Since all sides of a square are equal, we only need one side to find its perimeter." value={Value} btnName="Perimeter of square" btnFunc={()=> setResult(4*(parseInt(Value)))} placeHolder1="Enter a Side" placeHolder2="Enter a Width" setValue={setValue} result={Result} />
          </Route> 

          <Route exact path="/pTriangle">
            <Take3v Mhading="The perimeter of a Triangle" defn="The perimeter of a triangle means the sum of all three sides. The word perimeter is a combination of two Greek words – “peri” which means around and “metron” which means measure. The total distance around any two-dimensional figure is defined as its perimeter." value={Value} value2={Value2} value3={Value3} btnName="Perimeter of Triangle" btnFunc={()=> setResult(3*(parseInt(Value)))} placeHolder1="Enter a Side 1 of a triangle" placeHolder2="Enter a Side 2 of a triangle" placeHolder3="Enter a Side 3 of a triangle" setValue={setValue}setValue2={setValue2} setValue3={setValue3} result={Result} />
          </Route> 
          
          <Route exact path="/aRectangle">
            <Take2v Mhading="The area of a rectangle" defn="The area of a rectangle (A) is the product of its length 'a' and width or breadth 'b'. So, Area of Rectangle = (a × b) square units." value={Value} value2={Value2} btnName="Area of Rectangle" btnFunc={()=> setResult((parseInt(Value)*parseInt(Value2)))} placeHolder1="Enter a Length" placeHolder2="Enter a Width" setValue={setValue}setValue2={setValue2} result={Result} />
          </Route>  
                    
          <Route exact path="/aSquare">
            <Take1v Mhading="The area of a square" defn="The area of a square is defined as the number of square units needed to fill a square. In other words, when we want to find the area of a square, we consider the length of its side. Since all the sides of a square are equal, its area is the product of its two sides." value={Value} btnName="Area of Square" btnFunc={()=> setResult((parseInt(Value)*parseInt(Value)))} placeHolder1="Enter a Side Of  a square"setValue={setValue} result={Result} />
          </Route>   

          <Route exact path="/aTriangle">
            <Take2v Mhading="The area of a triangle" defn="The area of a triangle is defined as the total space occupied by the three sides of a triangle in a 2-dimensional plane. The basic formula for the area of a triangle is equal to half the product of its base and height, i.e., A = 1/2 × b × h." value={Value} value2={Value2} btnName="Area of Triangle" btnFunc={()=> setResult((1/2*parseInt(Value)*parseInt(Value2)))} placeHolder1="Enter a base of traiangle" placeHolder2="Enter a height of triangle" setValue={setValue}setValue2={setValue2} result={Result} />
          </Route>  

        </Switch>
      </Router>
    </>
  );
}

export default App;
