import { useState } from "react";
import QuestionsAnswer from "./accordion/QuestionsAnswer";

export default function FAQ() {
    const questions = [
        {
            question: "Are this products real?",
            answer:
                "YES, they are real with best quqlity :(",
        },

        {
            question: "What are the features in the website?",
            answer:
                "It have dynamic routing, skeleton loading on the images, cart functionality, sorting and searching functionality.",
        },

        {
            question: "Are the items imported or local?",
            answer:
                "Both. Some are made in Nepal whereas some are imported",
        },

        // {
        //     question: "Is this your first project?",
        //     answer:
        //         "Yes this is my first react project which have helped me a lot.",
        // },
        {
            question: "How long does it take to delivered?",
            answer:
                "It takes between 3 to 5 in working days",
        },
    ];

  
    return (
        <>
            <div className="faq-section">
                <div className="faq-container">
                    <div className="faq-contents">
                        <div className="faq-title">
                        <h1>FAQ</h1>
                        </div>
                      
                        {questions.map((question ,index) => {
                            return (
                              <QuestionsAnswer question = {question.question} answer = {question.answer} key = {index}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
