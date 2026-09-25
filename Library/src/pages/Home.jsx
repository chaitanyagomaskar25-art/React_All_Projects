import React from 'react';
import AboutProject from '../components/about/AboutProject';
import Categories from '../components/category/Categories';
import Introduction from '../components/home/Introduction';
import BrowseBySubject from '../components/browseByCategory/BrowseBySubject';

const CATEGORIES_LIST = [
  "trending",
  "classics",
  "love",
  "kid",
  "thriller",
  "textbook",
  "history",
  "programming",
];

const Home = () => {
  return (
    <div className="max-w-300 w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 space-y-8">
      {/* Main Container */}
      <section className="bg-white border border-slate-300 rounded-xl p-4 sm:p-6 md:p-10 shadow-md space-y-8 sm:space-y-12">
        <Introduction />

        {/* Categories List */}
        <div className="space-y-8 sm:space-y-10 divide-y divide-slate-200 pt-2">
          {CATEGORIES_LIST.map((category) => (
            <div key={category} className="pt-6 sm:pt-8 first:pt-0">
              <Categories category={category} />
            </div>
          ))}
        </div>

        {/* Subjects Section */}
        <div className="pt-6 sm:pt-8 border-t border-slate-300">
          <BrowseBySubject />
        </div>
      </section>

      {/* Project Footer */}
      <section className="mt-8 sm:mt-10">
        <AboutProject />
      </section>
    </div>
  );
};

export default Home;