import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import BookDetails from "./components/books/BookDetails";
import SearchResult from "./components/search/SearchResult";
import Subjects from "./pages/Subjects";
import SubjectDetails from "./pages/SubjectDetails";
import Trending from "./pages/TrendingBooks";
import AuthorDetails from "./pages/AuthorDetails";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      { 
    path: "/search",
    element: <SearchResult />
   },
  { 
    path: "/book/:bookId",
    element: <BookDetails />
   },
  { 
    path: "/authors/:authorId",
    element:<AuthorDetails />
   },
   {path:"/subjects",
    element: <Subjects />
   },
  { 
    path: "/subjects/:subject",
    element: <SubjectDetails />
   },
  { 
    path: "/trending",
    element: <Trending />
   },
  
  
    ]
  },
   
   {
    path: '*',
    element:<NotFound />
   },
])