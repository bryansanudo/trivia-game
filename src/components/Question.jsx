import React, { useEffect, useState } from "react";
import Results from "@/components/Results";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const Question = ({
  filteredQuestion,
  questionsFiltered,
  indexQuestion,
  setIndexQuestion,
  setActiveQuiz,
}) => {
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [activeResults, setActiveResults] = useState(false);
  const [answersRandom, setAnswersRandom] = useState([]);

  useEffect(() => {
    const answers = [
      ...filteredQuestion.incorrect_answers,
      filteredQuestion.correct_answer,
    ];

    setAnswersRandom(answers.sort(() => Math.random() - 0.5));
  }, [filteredQuestion]);

  const checkAnswer = (answerText, index) => {
    if (answerText === filteredQuestion.correct_answer) {
      setScore(score + 1);
    }

    setSelectAnswerIndex(index);
    setAnswered(true);
  };

  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setSelectAnswerIndex(null);
    setAnswered(false);
  };

  const onReset = () => {
    setScore(0);
    setActiveQuiz(false);
    setIndexQuestion(0);
  };

  return (
    <>
      {activeResults ? (
        <Results
          questionsFiltered={questionsFiltered}
          score={score}
          onReset={onReset}
        />
      ) : (
        <div className="flex flex-col justify-between shadow-md p-10 rounded-lg shadow-slate-300 h-[600px] w-[350px] md:w-[600px]">
          <div className="flex justify-between">
            <span className="text-xl font-bold">
              {indexQuestion + 1} / {questionsFiltered.length}
            </span>
            <div className="flex gap-1">
              <span className="font-semibold">Dificultad:</span>
              <span className="font-bold">{filteredQuestion.difficulty}</span>
            </div>
          </div>

          <button
            className="border px-5 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900"
            onClick={onReset}
          >
            Reiniciar
          </button>
          <div>
            <h1 className="font-bold text-center">
              {filteredQuestion.question}
            </h1>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
            {answersRandom.map((answer, index) => (
              <motion.button
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105 ${
                  selectAnswerIndex !== null && index === selectAnswerIndex
                    ? answer === filteredQuestion.correct_answer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : " "
                }`}
                key={answer}
                onClick={() => checkAnswer(answer, index)}
                disabled={answered && selectAnswerIndex !== index}
              >
                <motion.p
                  variants={fadeIn("right", "spring", index * 2, 0.75)}
                  className="font-medium text-center text-sm"
                >
                  {answer}
                </motion.p>
              </motion.button>
            ))}
          </div>

          {indexQuestion + 1 === questionsFiltered.length ? (
            <button
              className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
              onClick={() => {
                setAnswered(false);
                setActiveResults(true);
              }}
            >
              Finalizar
            </button>
          ) : (
            <button
              className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
              onClick={onNextQuestion}
            >
              Siguiente Pregunta
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Question;
