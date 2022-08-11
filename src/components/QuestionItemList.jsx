import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";

const QuestionItem = ({ index, handleClick, question, answer, isOpen }) => {
  return (
    <div className="border-b border-[#cab8b6]">
      <button
        onClick={() => handleClick(index)}
        className="flex items-center justify-between outline-none w-full text-2xl py-8 text-d-faint-blue"
      >
        <p className="font-medium">{question}</p>
        <i className={isOpen ? "ri-subtract-fill" : "ri-add-fill"} />
      </button>
      {isOpen && <p className="text-lg mb-9 text-d-gray">{answer}</p>}
    </div>
  );
};

const QUESTIONS_TRANS = [];

const QuestionItemList = ({ shouldStartAnimation }) => {
  const [questions, setQuestions] = useState({
    0: {
      question: "Where are products made?",
      answer: "Many brands especially in period care, carry products that take centuries.",
      isOpen: true,
    },
    1: {
      question: "How to Purchase our product?",
      answer: "Many brands especially in period care, carry products that take centuries.",
      isOpen: false,
    },
    2: {
      question: "How to Purchase our product?",
      answer: "Many brands especially in period care, carry products that take centuries.",
      isOpen: false,
    },
  });

  const handleOpenQuestion = (index, questions, setQuestions, setPreviouslyOpenedIndex) => {
    if (index === previouslyOpenedIndex) {
      setQuestions({
        ...questions,
        [index]: { ...questions[index], isOpen: !questions[index].isOpen },
      });
      //   setPreviouslyOpenedIndex(null);
    } else {
      setQuestions({
        ...questions,
        [previouslyOpenedIndex]: { ...questions[previouslyOpenedIndex], isOpen: false },
        [index]: { ...questions[index], isOpen: true },
      });
      setPreviouslyOpenedIndex(index);
    }
  };

  const generateQuestionsTrans = (allQuestions = [], handleOpenQuestion) => {
    allQuestions.forEach((question, index) => {
      QUESTIONS_TRANS.push({
        component: (
          <QuestionItem
            {...question}
            index={index}
            handleClick={(i) => {
              handleOpenQuestion(i, questions, setQuestions, setPreviouslyOpenedIndex);
            }}
          />
        ),
        op: { output: [1, 1], range: [0.75, 1] },
        trans: { output: [70 + index * 30, 0], range: [0.75, 1] },
      });
    });
  };

  const [questionTransitions, questionTransitionsApi] = useTransition(QUESTIONS_TRANS, () => ({
    from: { opacity: 0.3 },
    enter: { opacity: 1 },
    delay: 200,
    config: {
      tension: 280,
      friction: 50,
    },
  }));

  useEffect(() => {
    QUESTIONS_TRANS.length = 0;
    generateQuestionsTrans(Object.values(questions), handleOpenQuestion);
  }, []);

  useEffect(() => {
    if (shouldStartAnimation) {
      questionTransitionsApi.start();
    }
  }, [shouldStartAnimation]);

  const [previouslyOpenedIndex, setPreviouslyOpenedIndex] = useState(0);

  return (
    <div className="flex flex-col w-full border-t border-[#cab8b6]">
      {questionTransitions(({ opacity }, item) => (
        <animated.div
          style={{
            opacity: opacity.to(item.op),
            transform: opacity.to(item.trans).to((y) => `translate3d(0,${y}px,0)`),
          }}
        >
          {item.component}
        </animated.div>
      ))}
    </div>
  );
};

export default QuestionItemList;
