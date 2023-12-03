"use client";
// import React from "react";
import { useFetchPosts } from "../internal-api/postData";
import Parser from "html-react-parser";
import Banner from "../components/Banner";
import TopMaincontent from "../components/TopMainContent";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <main>
      <Banner />
      <TopMaincontent />
      <MainContent />
    </main>
  );
}
