import Footer from "../sections/Footer";
import { Link } from "react-router-dom";
import { background } from "../assets";
import PopUpWrapper from "../components/PopUpWrapper";
import Chip from "../components/Chip";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <section>
      <section
        id="contact"
        className="px-5 py-[100px] md:px-8 md:py-[140px] lg:px-10 lg:py-40 relative"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 black-gradient w-full h-full" />

        <div className="relative z-10">
          <PopUpWrapper className="flex justify-center">
            <Chip>404 Error</Chip>
          </PopUpWrapper>

          <PopUpWrapper>
            <h2 className="h2 mt-6 text-center">Page not found</h2>
          </PopUpWrapper>

          <PopUpWrapper>
            <p className="paragraph text-center">
              This page does not exist or it was removed
            </p>
          </PopUpWrapper>

          <PopUpWrapper className="flex justify-center mt-10">
            <Link to="/">
              <Button>Got to homepage</Button>
            </Link>
          </PopUpWrapper>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default NotFound;
