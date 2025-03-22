import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import { languageRef } from "../constants";
import { getDocs } from "firebase/firestore";
import PopUpWrapper from "../components/PopUpWrapper";

const Languages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [velocity, setVelocity] = useState(10);

  useEffect(() => {
    getDocs(languageRef)
      .then((snapshot) => {
        let languages = [];

        snapshot.docs.forEach((doc) => {
          languages.push({ ...doc.data(), id: doc.id });
        });

        const repeatedItems = [...languages, ...languages, ...languages];

        setData(repeatedItems);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setVelocity(10);
      } else if (window.innerWidth < 1024) {
        setVelocity(15);
      } else {
        setVelocity(20);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-10 px-5 md:py-[60px] md:px-8">
      <PopUpWrapper className="bg-almostBlack border border-lightBlack rounded-2xl p-4 relative overflow-hidden">
        {loading ? (
          <div className="absolute w-full h-[50px] rounded-2xl inset-0 bg-lightBlack animate-pulse" />
        ) : (
          <Marquee velocity={velocity} minScale={0.7} resetAfterTries={200}>
            {data.map((item) => (
              <div key={item.id} className="flex items-center gap-2 mx-4">
                <img src={item.imgUrl} alt={item.name} width={20} height={20} />

                <h3>{item.name}</h3>
              </div>
            ))}
          </Marquee>
        )}
      </PopUpWrapper>
    </section>
  );
};

export default Languages;
