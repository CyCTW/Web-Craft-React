import React from "react";

import CaseStudyCards from "../../components/CaseStudyCards";
import Company from "./Company";
import Footer from "./Footer";
import HelpBlock from "./HelpBlock";
import Introduction from "./Introduction";
import Banner from "./Banner";
import Navbar from "../../components/Navbar";
import ParagraphOne from "./ParagraphOne";
import ParagraphTwo from "./ParagraphTwo";

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <Banner />
        </section>
        <section>
          <Introduction />
        </section>
        <section>
          <CaseStudyCards />
        </section>
        <section>
          <ParagraphOne />
        </section>
        <section>
          <ParagraphTwo />
        </section>
        <section>
          <Company />
        </section>
        <section>
          <HelpBlock />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
