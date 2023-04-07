import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { questions, imgs } from "@/data";
import Question from "@/components/Question";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const shuffleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
};

const CategoryPage = () => {
  const { category } = useParams();

  const [imgCategory] = imgs.filter(
    (img) => img === `/src/assets/${category.toLocaleLowerCase()}.png`
  );

  const [questionsFiltered, setquestionsFiltered] = useState(
    questions.filter((question) => question.category === category)
  );

  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);

  useEffect(() => {
    const newQuestions = shuffleArray(questionsFiltered);
    setquestionsFiltered(newQuestions);
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container flex flex-col items-center justify-center gap-10 "
      style={{ height: "calc(100vh - 5rem)" }}
    >
      {activeQuiz ? (
        <Question
          filteredQuestion={questionsFiltered[indexQuestion]}
          setIndexQuestion={setIndexQuestion}
          indexQuestion={indexQuestion}
          questionsFiltered={questionsFiltered}
          setActiveQuiz={setActiveQuiz}
        />
      ) : (
        <>
          <div className="flex flex-col gap-5 ">
            <h1 className="text-3xl text-teal-900 text-center font-bold">
              {category}
            </h1>
            {/* <div className="flex justify-center items-center">
              <img src={imgCategory} alt={category} className="w-72" />
            </div> */}
          </div>

          <motion.button
            /* variants={fadeIn("up", "tween", 0, 0.5)} */
            className="text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900"
            onClick={() => setActiveQuiz(true)}
          >
            Iniciar Quiz
          </motion.button>
        </>
      )}
    </motion.div>
  );
};

export default CategoryPage;
