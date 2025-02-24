import { useEffect, useState } from "react";
import PopUpWrapper from "../components/PopUpWrapper";
import Chip from "../components/Chip";
import LoaderCard from "../components/LoaderCard";
import { getDocs, query, orderBy, limit } from "firebase/firestore";
import { projectRef } from "../constants";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const q = query(projectRef, orderBy("timestamp", "asc"), limit(4)); // Get latest 4 projects

        const snapshot = await getDocs(q);
        const projects = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(projects);
        console.log(projects);
      } catch (error) {
        console.error("Error getting documents: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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

      <div className="mt-8 md:mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {data.map((item) => (
          <PopUpWrapper key={item.id}>
            {loading ? (
              <LoaderCard />
            ) : (
              <ProjectCard
                image={item.images[2]}
                title={item.title}
                year={item.year}
                link={item.liveUrl}
              />
            )}
          </PopUpWrapper>
        ))}
      </div>

      <PopUpWrapper className="mt-8 flex justify-center">
        <Link to="/projects">
          <Button>See More</Button>
        </Link>
      </PopUpWrapper>
    </section>
  );
};

export default Portfolio;
