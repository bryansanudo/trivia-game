import React from "react";

import { imgs, categories } from "@/data";
import CategoryCard from "@/components/CategoryCard";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const [
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia,
] = imgs;

const CategoryList = () => {
  return (
    <div className="w-full flex justify-center ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="grid md:grid-cols-3 grid-cols-2 justify-center items-center gap-6 my-4 mx-10"
      >
        {/* Category Link Ciencia */}

        <motion.div variants={fadeIn("down", "tween", 0.5, 0.5)}>
          <CategoryCard
            category={categories.ciencia}
            src={imgCiencia}
            alt={`Categoria ${categories.ciencia}`}
            gradientColor="from-[#FFC300] to-[#FF5733] "
          />
        </motion.div>
        {/* Category Link Deportes */}
        <motion.div variants={fadeIn("down", "tween", 1, 0.5)}>
          <CategoryCard
            category={categories.deportes}
            src={imgDeportes}
            alt={`Categoria ${categories.deportes}`}
            gradientColor="from-[#FDE74C] to-[#4C62FD] "
          />
        </motion.div>
        {/* Category Link filosofia */}
        <motion.div variants={fadeIn("down", "tween", 1.5, 0.5)}>
          <CategoryCard
            category={categories.filosofia}
            src={imgFilosofia}
            alt={`Categoria ${categories.filosofia}`}
            gradientColor="from-[#007FFF] to-[#00FFC2] "
          />
        </motion.div>
        {/* Category Link Geografia */}
        <motion.div variants={fadeIn("down", "tween", 2, 0.5)}>
          <CategoryCard
            category={categories.geografia}
            src={imgGeografia}
            alt={`Categoria ${categories.geografia}`}
            gradientColor="from-[#F15BB5] to-[#8B5BFF] "
          />
        </motion.div>
        {/* Category Link Hisotria */}
        <motion.div variants={fadeIn("down", "tween", 2.5, 0.5)}>
          <CategoryCard
            category={categories.historia}
            src={imgHistoria}
            alt={`Categoria ${categories.historia}`}
            gradientColor="from-[#A3FFA8] to-[#00C6FF] "
          />
        </motion.div>
        {/* Category Link Literatura */}
        <motion.div variants={fadeIn("down", "tween", 3, 0.5)}>
          <CategoryCard
            category={categories.literatura}
            src={imgLiteratura}
            alt={`Categoria ${categories.literatura}`}
            gradientColor="from-[#FF6B6B] to-[#FFE66D] "
          />
        </motion.div>
        {/* Category Link Tecnologia */}
        <motion.div variants={fadeIn("down", "tween", 3.5, 0.5)}>
          <CategoryCard
            category={categories.tecnologia}
            src={imgTecnologia}
            alt={`Categoria ${categories.tecnologia}`}
            gradientColor="from-[#FF9966] to-[#CC66FF] "
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CategoryList;
