import React from "react";
import SubjectCard from "../components/subjects/SubjectCard";
import { useParams } from "react-router";

const SubjectDetails = () => {
  const { subject } = useParams();

  return (
    <main className="w-full bg-slate-100 py-6 sm:py-10 lg:py-14">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SubjectCard category={subject} />
      </div>
    </main>
  );
};

export default SubjectDetails;