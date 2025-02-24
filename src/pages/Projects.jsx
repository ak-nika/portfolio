import { useEffect, useState } from "react";
import PopUpWrapper from "../components/PopUpWrapper";
import { getDocs } from "firebase/firestore";
import { projectRef } from "../constants";
import LoaderCard from "../components/LoaderCard";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const number = 20;

  useEffect(() => {
    getDocs(projectRef)
      .then((snapshot) => {
        let projects = [];

        snapshot.docs.forEach((doc) => {
          projects.push({ ...doc.data(), id: doc.id });
        });

        setData(projects);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, []);

  return (
    <section className="px-5 py-[100px] md:px-8 md:py-[140px] lg:px-10 lg:py-40 relative">
      <PopUpWrapper>
        <h2 className="h2 text-center">
          <span className="text-grey">All</span> My Projects
        </h2>
      </PopUpWrapper>

      <div className="mt-8 md:mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {isLoading
          ? Array.from({ length: number }).map((_, index) => (
              <LoaderCard key={index} />
            ))
          : data.map((item) => (
              <Link key={item.id} to={`/projects/${item.id}`}>
                <ProjectCard
                  image={item.images[2]}
                  title={item.title}
                  year={item.year}
                />
              </Link>
            ))}
      </div>
    </section>
  );
};

export default Projects;
