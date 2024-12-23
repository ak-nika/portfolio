import React, { useEffect, useState } from "react";
import PopUpWrapper from "../components/PopUpWrapper";
import Chip from "../components/Chip";
import LoaderCard from "../components/LoaderCard";
import { getDocs } from "firebase/firestore";
import { projectRef } from "../constants";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]);

  useEffect(() => {
    // Fetch data from Firebase
    getDocs(projectRef)
      .then((snapshot) => {
        let projects = [];

        snapshot.docs.forEach((doc) => {
          projects.push({ ...doc.data(), id: doc.id });
        });

        setData(projects.splice(-4));
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="portfolio"
      className="mt-[10px] py-20 px-5 md:py-[100px] md:px-8 lg:pt-[120px] lg:px-10 lg:pb-[100px]"
    >
      <div className="flex flex-col gap-6 items-center justify-center">
        <PopUpWrapper>
          <Chip>Portfolio</Chip>
        </PopUpWrapper>

        <PopUpWrapper>
          <h2 className="h2">
            <span className="text-grey">My Latest</span> Projects
          </h2>
        </PopUpWrapper>
      </div>

      <div className="mt-8 md:mt-6 lg:mt-8 flex justify-center items-center gap-6 flex-wrap w-full">
        {data.map((item) => (
          <PopUpWrapper key={item.id} className="w-1/2 max-w-[800px]">
            {loading ? (
              <LoaderCard />
            ) : (
              <ProjectCard
                image={item.images[2]}
                title={item.title}
                year={item.year}
              />
            )}
          </PopUpWrapper>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button>See More</Button>
      </div>
    </section>
  );
};

export default Portfolio;
