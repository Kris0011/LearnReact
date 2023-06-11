import React from "react";

export default function AboutUS(props) {

    return (
        <>
            <div className="accordion my-5" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Welcome to TextConvo
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextConvo is a versatile text modification tool designed to help you manipulate and transform your text in various ways. Whether you need to convert text to uppercase or lowercase, remove extra spaces, or count characters and words, TextConvo has got you covered. It provides a simple and intuitive interface for performing these operations, making it easy to modify your text exactly how you want it.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Key Features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <li>Convert text to uppercase or lowercase</li>
                            <li>Remove extra spaces from text</li>
                            <li>Count the number of characters, words, and paragraphs</li>
                            <li>Copy the modified text to your clipboard</li>
                            <li>Toggle between light and dark mode for better readability</li>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            About the Developer
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextConvo is developed by Kris Patel, a passionate software developer with expertise in web development and user interface design. Kris is dedicated to creating useful and user-friendly applications that simplify everyday tasks. TextConvo is one of Kris's projects aimed at providing a valuable tool for anyone working with text. If you have any feedback or suggestions, feel free to reach out and connect with Kris.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
