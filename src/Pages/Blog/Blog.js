import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='my-10 md:mx-20 lg:mx-40'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-xl font-medium">
                    1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>Local (UI) state – Local state is data we manage in one or another component. <br />Global (UI) state – Global state is data we manage across multiple components. <br />Server state – Data that comes from an external server that must be integrated with our UI state. <br />URL state – Data that exists on our URLs, including the pathname and query parameters.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-xl font-medium">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-xl font-medium">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-xl font-medium">
                    4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React. <br />
                    Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage. <br />Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;