// src/pages/index.js
import axios from "axios";
import Head from "next/head";
import { useState } from 'react';

export default function Home() {
  const [assistantResponse, setAssistantResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a request to the API route
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storeName: "friend",
          location: "Gwangju Yangdong Market",
          keyWords : "School food, stir-fried Rice Cake, delicious, resonable",
          tone: "friendly",
          menus: "stir-fried Rice Cake, Fried, Kimchi pancake",
          numWords: "300"
        }),
      });
      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNaver = async () => {
    const res = await axios.post('/api/naver', {
      
    })
  }

  return (
    <>
      <Head>
        <title>AI Description Generator</title>
        <meta name="description" content="AI Job Description Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"bg-white"}>
        <div>
          <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
          </form>
          {assistantResponse && <p>{assistantResponse}</p>}
        </div>
        <button type="button" onClick={handleNaver}>Test</button>
      </main>
    </>
  );
}
