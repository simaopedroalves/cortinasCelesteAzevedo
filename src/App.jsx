import { useState, useEffect } from 'react'
import './App.css'
import BuildingWebsite from './Components/BuildingWebsite.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import MenuOptions from './Components/MenuOptions.jsx';
import About from './Components/About.jsx';
import Footer from './Components/Footer.jsx';
import HomePage from './Components/HomePage.jsx';
import ContactUs from './Components/ContactUs.jsx';
import Budget from './Components/Budget.jsx';
import TermsAndConditions from './Components/TermsAndConditions.jsx';
import Portfolio from './Components/Portfolio.jsx';


function App() {


  const [displayContent, setDisplayContent] = useState({
    menuOption: 0,
    // menuOption: 3,
    navbar: false
  });
  
  function updateMenu() {
    // window.scrollTo(0,0)

      if (window.innerWidth >= 1024) {
        setDisplayContent(prevState => {
          return {
            ...prevState,
            navbar: true
          }
        })
      }

      else {
        setDisplayContent(prevState => {
          return {
            ...prevState,
            navbar: false
          }
        })
      }
  }
  
  
  useEffect(() => {
      // Set initial state on mount
    updateMenu();
  
      // Add resize event listener
    window.addEventListener("resize", updateMenu);
  
      // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateMenu);
    };
  }, []);


  function handleOpenMenu() {
    console.log('cliked');
    window.scrollTo(0,0)

    setDisplayContent(prevState => {

      return {
        ...prevState,
        navbar: !displayContent.navbar }
    })
  }

  function handleMenuOption(option) {
    console.log('option', option);
    window.scrollTo(0,0)

    updateMenu();
    setDisplayContent(prevState => {
      return {
        ...prevState,
        menuOption: option,
        
      }
  })
}

  let contentToShow = <HomePage />;

  if (displayContent.menuOption === 3) {
    contentToShow = <About />
  }
  else if (displayContent.menuOption === 0) {
    contentToShow = <HomePage />
  }
  else if (displayContent.menuOption === 1) {
    contentToShow = <Portfolio />
  }
  else if (displayContent.menuOption === 2) {
    contentToShow = <ContactUs />
  }
  else if (displayContent.menuOption === 4) {
    contentToShow = <Budget />
  } 
  else if (displayContent.menuOption === 5) {
    contentToShow = <TermsAndConditions />
  }



  return (
   <main className= 'w-screen overflow-x-hidden'>
      {/* <BuildingWebsite /> */}
      <Navbar onOpenMenu={handleOpenMenu} onHome={handleMenuOption}/>
      {displayContent.navbar && <MenuOptions onclickOption={handleMenuOption}/>}
      {contentToShow}
      <Footer handleClick={handleMenuOption}/>
   </main>
  )
}

export default App
