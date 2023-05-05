import React, { useRef } from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = useRef();
  return (
    <div className="w-full md:w-8/12 my-5 md:mx-auto px-3 md:px-0">
      {/* This function will Generate a PDF file */}
      <Pdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className="bg-red-400 text-white p-2 rounded-lg"
          >
            Download PDF
          </button>
        )}
      </Pdf>

      {/* ALL Blog Question Answers  */}
      <div ref={ref}>
        <h3 className="font-bold text-2xl my-5 text-center md:mb-16 text-red-400">
          Blog{" "}
        </h3>
        <hr className="mb-16" />
        <div className="px-5 mb-32">
          <h3 className="font-bold text-2xl mb-2">
            Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <p className="text-xl text-gray-500 mb-6">
            Ans: The main difference between controlled and uncontrolled
            components in React is how they handle the state of form elements.
            In uncontrolled components, the state is managed by the browser,
            while in controlled components, the state is managed by React.
            Controlled components are preferred because they provide a more
            predictable way of handling user input.
          </p>
          <h3 className="font-bold text-2xl mb-2">
            How to validate React props using PropTypes
          </h3>
          <p className="text-xl text-gray-500 mb-6">
            Ans: PropTypes is a library in React that enables you to validate
            the types of properties passed to a component at runtime. To use
            PropTypes, you import it from the 'prop-types' package and then
            define the expected types for each property in the component's
            propTypes object. This helps catch errors early and improves the
            reliability of your code.
          </p>
          <h3 className="font-bold text-2xl mb-2">
            Tell us the difference between nodejs and express js.
          </h3>
          <p className="text-xl text-gray-500 mb-6">
            Ans: Node.js is a runtime environment that allows running JavaScript
            outside the browser. Express.js is a web framework built on top of
            Node.js that provides additional features, such as routing and
            middleware, to simplify building web applications.
          </p>
          <h3 className="font-bold text-2xl mb-2">
            What is a custom hook, and why will you create a custom hook?
          </h3>
          <p className="text-xl text-gray-500 mb-6">
            Ans: A custom hook is a reusable function that contains stateful
            logic and can be used across multiple components in a React
            application. Custom hooks can be created to abstract away complex
            logic, making it easier to reuse. Custom hooks can be useful in
            simplifying the code and reducing repetition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
