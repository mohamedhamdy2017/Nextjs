import type { NextPage } from "next";
import { sliderData } from "../SliderData";

import { Slider } from "../components/Slider";

import { Main } from "../components/Main";
import Head from "next/head";
import { FollowMe } from "../components/FollowMe";

const Home: NextPage = () => {
  return (
    <div className="bg-white mx-auto">
      <Head>
        <title>Learn Next</title>
      </Head>
      <Main headerTitle="LEARN NEXT" message="Learn Nextjs with tailwind" />
      <Slider slides={sliderData} />
      <FollowMe/>
    </div>
  );
};

export default Home;
