import { useEffect, useState } from 'react';

function RandomQuoteAPI() {
  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = () => {
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(data => {
        const quotes = data.quotes;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
  };

  useEffect(() => {
    fetchRandomQuote(); 

    const interval = setInterval(() => {
      fetchRandomQuote();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Random Quote</h2>
      {quote ? (
        <blockquote style={{ fontStyle: 'italic' }}>
          “{quote.quote}”
          <footer style={{ textAlign: 'right', marginTop: 10 }}>— {quote.author}</footer>
        </blockquote>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RandomQuoteAPI;