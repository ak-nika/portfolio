import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../constants";
import Loader from "../components/Loader";
import PopUpWrapper from "../components/PopUpWrapper";
import Chip from "../components/Chip";
import Tag from "../components/Tag";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Project = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "projects", id);

    getDoc(docRef)
      .then((item) => {
        console.log(item.data());
        setData(item.data());
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="p-10">
        <PopUpWrapper className="flex justify-center">
          <Chip>Project Detail</Chip>
        </PopUpWrapper>

        <PopUpWrapper className="mt-6 delay-100">
          <h1 className="h1 text-center">{data.title}</h1>
        </PopUpWrapper>

        <PopUpWrapper className="mt-8 mx-auto max-w-[736px] delay-200">
          <p className="paragraph text-center">{data.subtitle}</p>
        </PopUpWrapper>

        <div className="flex justify-center items-center gap-5 flex-wrap my-10">
          {data.tags.map((tag) => (
            <PopUpWrapper className="delay-[400ms]" key={tag}>
              <Tag>{tag}</Tag>
            </PopUpWrapper>
          ))}

          <PopUpWrapper className="delay-[400ms]">
            <Tag>{data.duration}</Tag>
          </PopUpWrapper>

          <PopUpWrapper className="delay-[400ms]">
            <a href={data.githubRepo} target="_blank" rel="noopener noreferrer">
              <Tag className="underline">Github Repo</Tag>
            </a>
          </PopUpWrapper>

          {data.liveUrl && (
            <PopUpWrapper className="delay-[400ms]">
              <a href={data.liveUrl} target="_blank" rel="noopener noreferrer">
                <Tag className="underline">Visit site</Tag>
              </a>
            </PopUpWrapper>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {data.images.map((image, index) => (
            <PopUpWrapper key={index} className={"delay-500"}>
              <div
                className="h-[300px] rounded-lg border border-lightBlack"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </PopUpWrapper>
          ))}
        </div>
      </div>

      <div className="mt-[10px] px-5 pb-16 md:px-8 md:pt-20 md:pb-[140px] lg:px-10 lg:py-20">
        <div className="max-w-[736px] mx-auto flex flex-col gap-5">
          <div>
            <PopUpWrapper className={"delay-[600ms]"}>
              <h2 className="h2">Overview:</h2>
            </PopUpWrapper>

            <PopUpWrapper>
              <p className="paragraph leading-5">{data.overview}</p>
            </PopUpWrapper>
          </div>

          <div>
            <PopUpWrapper>
              <h2 className="h2">Key Features:</h2>
            </PopUpWrapper>

            <PopUpWrapper>
              <ul className="flex flex-col gap-3 list-disc">
                {data.keyFeatures.map((item, index) => (
                  <li className="text-grey" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </PopUpWrapper>
          </div>

          <PopUpWrapper>
            <pre className="bg-almostBlack rounded p-4 overflow-auto">
              <code className="text-grey">{data.codeSnippet}</code>
            </pre>
          </PopUpWrapper>

          <PopUpWrapper>
            <div className="border-l-4 border-lightBlack text-grey italic pl-4">
              {data.blogQuote}
            </div>
          </PopUpWrapper>

          <div>
            <PopUpWrapper>
              <h2 className="h2">Creation Process:</h2>
            </PopUpWrapper>

            <PopUpWrapper>
              <ol className="flex flex-col gap-3 list-decimal">
                {data.creationProcess.map((item, index) => (
                  <li className="text-grey" key={index}>
                    {item}
                  </li>
                ))}
              </ol>
            </PopUpWrapper>
          </div>
        </div>
      </div>

      <Contact />

      <Footer />
    </section>
  );
};

export default Project;
