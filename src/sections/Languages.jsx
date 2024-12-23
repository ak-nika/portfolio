import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import { languageRef } from "../constants";
import { getDocs } from "firebase/firestore";

const Languages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section className="py-10 px-5 md:py-[60px] md:px-8">
      <div className="bg-almostBlack border border-lightBlack rounded-2xl p-4 relative overflow-hidden">
        {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-200 via-transparent via-4/5 to-red-200" /> */}

        {loading ? (
          <div className="absolute w-full h-[50px] rounded-2xl inset-0 bg-lightBlack animate-pulse" />
        ) : (
          <Marquee velocity={30} minScale={0.7} resetAfterTries={200}>
            {data.map((item) => (
              <div key={item.id} className="flex items-center gap-2 mx-4">
                <img src={item.imgUrl} alt={item.name} width={20} />

                <h3>{item.name}</h3>
              </div>
            ))}
          </Marquee>
        )}
      </div>
    </section>
  );
};

export default Languages;
