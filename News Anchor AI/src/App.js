import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect, useState } from 'react';
import Newscards from './Components/NewsCards/NewsCards';
import useStyles from './styles.js';
import wordsToNumbers from 'words-to-numbers';

function App() {

  const alanKey = "ca02dec9df892cd5baf1a9be657582912e956eca572e1d8b807a3e2338fdd0dc/stage";
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
      alanBtn({
          key: alanKey,
          onCommand: ({command, articles, number}) => {
            if(command === 'newHeadlines'){
              console.log(articles);
              setNewsArticles(articles);
              setActiveArticle(-1);
            } else if(command === 'highlight'){
                setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
            } else if(command === 'open'){
              const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true}) : number;
              const article = articles[parsedNumber - 1];

              if(parsedNumber > 20) {
                alanBtn().playText('Please try again as I can only handle 20 articles at a time')
              } else if(article){
                window.open(article.url, '_blank');
                alanBtn().playText(`Opening article number ${parsedNumber}`);
              }
            }
          }
      })
  }, [])

  return (
    <div className="App">
      <div className={classes.alanLogo}>
          <img src="https://motionarray.imgix.net/preview-327986-dY2hb6egMT-high_0015.jpg" alt="News Reader App" className={classes.alanLogo} />
      </div>
      <Newscards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;

//1-3, 2-5, 3-7