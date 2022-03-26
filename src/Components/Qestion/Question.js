import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div className='question-answer'>
            <h1>Question & Answers</h1>
            <h2>Question 1: How does React work?</h2>
            <p>
                Ans: React is a JavaScript library (not a framework) that uses declarative code to design user interfaces (UIs) in a predictable and efficient manner. For web and mobile apps, it's utilized to manage the view layer. We can also make reusable UI components with React. The user interface is rendered using React using two virtual DOMs. The present state of the items is stored in one, and the past state of the objects is stored in the other. React compares the two virtual DOMs whenever the virtual DOM is updated to determine which virtual DOM objects were updated.
            </p>
            <h2>Question 2: What are difference between props and State?</h2>
            <p>
                Ans: The key difference between props and state is that state is internal and controlled by the component itself. while props are external and controlled by whatever renders the component.Props allow us to pass data from one component to other components as an argument. On the other hand State holds information about the components. Props can be accessed by the child component but State cannot be accessed by child components. Props are used to communicate between components whereas States can be used for rendering dynamic changes with the component.
            </p>
        </div>
    );
};

export default Question;