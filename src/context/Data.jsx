import { useEffect, useState, createContext } from "react";
import { useLocation } from "react-router-dom";
import wordData from "./WordData";

// Create the context
const AppContext = createContext();

// Create the provider component
const ContextProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("/");
  const [randomWord, setRandomWord] = useState(null); // Initialize as null initially
  const [isRandomWordInitialized, setIsRandomWordInitialized] = useState(false); // Track initialization status
  const [health, setHealth] = useState(10);
  const location = useLocation();

  // get random word;
  useEffect(() => {
    const getRandomWord = () => {
      const randomWordObj =
        wordData[Math.floor(Math.random() * wordData.length)];
      setRandomWord(randomWordObj);
      setIsRandomWordInitialized(true); // Set initialization status to true
      console.log(randomWordObj);
      console.log("RandomWord set");
    };

    getRandomWord();
  }, []);

  // get active page;
  useEffect(() => {
    setActivePage(location.pathname);
    console.log(activePage);
  }, [location.pathname]);

  // mouse clicks log;
  const logKeys = (e) => {
    console.log(e.target.dataset.value);
  };

  // get Keyboard log;
  useEffect(() => {
    const handleKeyPress = (e) => {
      const keyPressed = e.key.toLowerCase();
      if (
        isRandomWordInitialized &&
        /^[a-z]$/.test(keyPressed) &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.metaKey
      ) {
        // Ensure randomWord.word is initialized before processing key press
        if (randomWord.word.includes(keyPressed)) {
          console.log(
            "You Pressed the right key which is also present in word.",
            keyPressed
          );
        }
      }
    };

    if (location.pathname === "/play") {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [location.pathname, isRandomWordInitialized, randomWord]); // Add isRandomWordInitialized and randomWord to dependency array

  return (
    <AppContext.Provider value={{ activePage, randomWord, logKeys }}>
      {children}
    </AppContext.Provider>
  );
};

// Export the context and the provider separately
export { AppContext, ContextProvider };
