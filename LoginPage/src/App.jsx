import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "../../LoginPage/src/components/FirstPage.jsx";
import SecondPage from "../../LoginPage/src/components/SecondPage.jsx";
import ThirdPage from "../../LoginPage/src/components/ThirdPage.jsx";
import ForthPage from "../../LoginPage/src/components/ForthPage.jsx";
import FifthPage from "../../LoginPage/src/components/FIfthPage.jsx";
import HomePage from "../../LoginPage/src/components/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/forth" element={<ForthPage />} />
        <Route path="/fifth" element={<FifthPage />} />
      </Routes>
    </BrowserRouter>
  );
}


// const App = () => {
//   return (
//     <div>
//       <input type="button" value="button" />
//         <input type="checkbox" />
//         <input type="color" />
//         <input type="date" />
//         <input type="datetime" />
//         <input type="datetime-local" />
//         <input type="email" />
//         <input type="file" />
//         <input type="hidden" placeholder="hidden" />
//         <input type="image" src="data:image/webp;base64,UklGRooFAABXRUJQVlA4IH4FAADQHgCdASqUAF8APzFizGYutK6ulEKQJglkbQ5ek8DXCpnDdM379N7APCX+JuWe2ObaEJZT34MydHlv/zzOfwCWSUDNODrP2hMNi1U+E28aUgoqcLkveqmsHCQ55QAM4c8b757JMEyqcpDRZMiy38kjZ3QZt1PRiBAdcf99toY0eFmA86RS+Ekn8tB9/TiMwerCmgqu0Qge+wyDK2dFF+myLLeRefBhr3Bx0UwUDl62F0zhC5eVUiAQK94h47N4P1Y+mNGRzc+z1pV1Rj4NYPOOonhMy2po0dPoi37Pk6WeWzZAsFopMEjdFU10yGtDPt1+OZNSfK5ytTQvizCq/6AA/uUzrvz/UrNm/Ct7CamAgLAnIqlXORwFqmXpffi9kZHvkw6S62KJ/VlDCGmmiwzOaphonExG5PUWxfRtp6sYDZXnxyG1RWlPO0hI7FqluKYrQ8PUdFVHAGVHrKjNjtq1XWLGvNQaOXoxTLrioC1Pi9a2FKYg5k0AaDFzJ56TaGoJ++u5sXo20t+joRa6CG6Q6p7sLcBetDALnzuuTmsjxNzSmljqI+fN0oVrGOck/jHWx9gF7SS8dM7hPpj6/pH66AtiLqNMTcYHhiwRurFW9c01KIBpBHwYdiqqapQni9oDgU+oj0ZNsOh5lLxLBDVVLIOcwZfjtSg85+utH4ZjeXPichs8YGf9YhjSpxeLgNXkXbFzvdUBbn8x9mnxriaX58/Suw0ezKJWcic0v6h9JI7Ga9/VIBNpb/tLRwTK1HGwxPEZEVrXDLaB++uqUfWotN/fBOfmgBdjsXAtgwr4S4RJteA3wCDCxhOdAnkZUlLm2Li0R64ZwmxI5z8cHwkVsjMK+rdR60FjqkCnqGbPUm0MroUdyU2S4sjfm03xISu1MTGBCs10k7MCC6THmA3Kj/aSIVc2zRPyMIV+t+5NuIANLNuLGjNmZTei2I7RaaRv5c3BwTnkKrQxpbBoAqJqDN14d3DUQbAT3qsbS2H39/P4q/I0aPanTC+uapA6RTPYVkJ+vwydHg16AYwDeANLl3cfZfDPS8a8w71hc1xnKkHZzK9CWE1JT6otO3fmmptqhbpfSCn5WDZ+x7vSdzHORHiyjVNSX0oX2oLGWzDiCmEPVLFQnL0/H4gt6ctkp7ltcfTGpbxmkigNyOoc6j3sTzgGHVBOVO19o4IPB9N9f0b/rNkvvNahIJw7juapLZnJ3CZSt7+HEVb6dMrfYEWbRBR2znDfhpxoNc1ebnRwcHsYA9PoBOFdiWO6PB1Xr6AdEzueaYVn+vRx3N7QrH1GnE1Bm/spSKEu0xJ477oFAArP0fZx/UhDgFJc1I8UvGX/shPMdpzYnulQX+NFHNU6IhgeA6OgR0tlTdT1ZkTYSrlTLp8js6wX+ib3FWPztq6jjAesYTWfj1Ipp9F0fpeFnIOfrMVHk79jBM+NAi6aVQDZD1L4iIZp+2bfHg2lFdijama4xHC8gzOftuXXJ4UCGM7HgBPtMeQ+d+orfj7rY/tGL8U8/IutUTu091cwpKTk14rmbcrfGhL2mFAyEMtmyz/OyKbHxi88O9Dd42aZbxGvWnnzQTHMASNtf7bxXYNBL82ZQjJMpkeybqlfTs0xkVWPfwUf50/1+sjBp6iHGnPnO+GSJxqr1k4Y5tcuVwZNHic8SzNecjiSVZv/HjH7i1xJxpbjOKIYxHklLmT7BZNacY31kUGR84+TWq/oYzw5CVsrU279m1Nsz2QmX2QwJkd3+dg57mb3o5vsYC0lZRhyZVUn5CNJzIKUiZxL04Ck4indOWP2JSVV9xXMDxZlVgHtAYfG92cwur4hvJxWuRCMCjxPWZzEB60y71zZM2MQ0xc8uyjtwJonv6AAAA==" />
//         <input type="month" />
//         <input type="number" />
//         <input type="password" />
//         <input type="radio" />
//         <input type="range" />
//         <input type="reset" />
//         <input type="search" />
//         <input type="submit" />
//         <input type="tel" />
//         <input type="text" />
//         <input type="time" />
//         <input type="url" />
//         <input type="week" />
//     </div>
//   )
// }

export default App;
