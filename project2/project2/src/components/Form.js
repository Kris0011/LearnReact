import React, { useState } from "react";
// import math from "mathjs";
// import Parser from "math-expression-parser";


// import PropTypes from "prop-types";

export default function Form(props) {
    const changeSlope = (event) => {
        setSlope(event.target.value);
    }
    const changex0 = (event) => {
        setx0(event.target.value);
    }

    const changey0 = (event) => {
        sety0(event.target.value);
    }

    const changeStepHeight = (event) => {
        setStepHeight(event.target.value);
    }
    const changeN = (event) => {
        setN(event.target.value);
    }
    const changeMethod = (event) => {
        setMethod(event.target.value);
    };


    const derivative = (x, y) => {
        if (slope.includes("sqrt")) {
          const func = Parser.parse("sqrt(y)");
          const scope = { y };
          return func.evaluate(scope);
        } else if (slope.includes("log")) {
          const func = Parser.parse("log(y)");
          const scope = { y };
          return func.evaluate(scope);
        } else {
          const func = Parser.parse(slope);
          const scope = { x, y };
          return func.evaluate(scope);
        }
      };
    
      const eulerMethod = (h, x0, y0, xTarget) => {
        let x = x0;
        let y = y0;
    
        let results = "";
    
        while (x <= xTarget) {
          const slope = derivative(x, y);
          results += `x = ${x.toFixed(4)}, y = ${y.toFixed(4)}<br>`;
          y += h * slope;
          x += h;
          x = parseFloat(x.toFixed(10)); // Handle floating-point precision error
        }
    
        return results;
      };

    const solveFunc = () => {
        const h = stepHeight;
        const xTarget = n;

        const results = eulerMethod(h, x0, y0, xTarget);

        setOutput(results);
    }

    const [slope, setSlope] = useState("2*x + 3*y");  // it is called state
    const [x0, setx0] = useState("0");
    const [y0, sety0] = useState("0");
    const [stepHeight, setStepHeight] = useState("0.1");
    const [n, setN] = useState("0.1");
    const [method, setMethod] = useState("Euler's Method");
    const [output, setOutput] = useState("");

    return (
        <div>
            <form id="myForm">
                <div>
                    <label htmlFor="functionInput">Write dy/dx :</label>
                    <input type="text" id="functionInput" value={slope} onChange={changeSlope} />
                </div>

                <div>
                    <label htmlFor="x0Input">x0 value:</label>
                    <input type="text" id="x0Input" value={x0} onChange={changex0} />
                </div>
                <div>
                    <label htmlFor="y0Input">y0 value at x0:</label>
                    <input type="text" id="y0Input" value={y0} onChange={changey0} />
                </div>

                <div>
                    <label htmlFor="stepHeightInput">Step Height(h):</label>
                    <input type="text" id="stepHeightInput" value={stepHeight} onChange={changeStepHeight} />
                </div>
                <div>
                    <label htmlFor="y0Input">n to find yn at xn:</label>
                    <input type="text" id="nInput" value={n} onChange={changeN} />
                </div>
                <div>
                    <label htmlFor="method">Select Method:</label>
                    <select name="method" id="method" value={method} onChange={changeMethod}>
                        <option value="Euler Method">Euler's Method</option>
                        <option value="Improved Euler Method">Improved Euler's Method</option>
                        <option value="R-K Method">Runge-Kutta's Method</option>
                    </select>
                </div>
                <div>
                    <button type="reset">Reset</button>
                    <button type="submit" onClick={solveFunc}>Solve</button>
                </div>
                <div id="output">{output}</div>
            </form>
        </div>
    );
}
