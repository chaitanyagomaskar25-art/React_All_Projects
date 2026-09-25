import React from 'react';
import ProjectNarrative from './ProjectNarrative';
import LatestBlogPosts from './LatestBlogPosts';
import { blogPostsData } from '../../data/blogData';

const AboutProject = () => {
  return (
    <section className="mb-12 font-sans max-w-7xl mx-auto">
      <div className="pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
        <ProjectNarrative />
        <LatestBlogPosts posts={blogPostsData} />
      </div>
    </section>
  );
};

export default AboutProject;