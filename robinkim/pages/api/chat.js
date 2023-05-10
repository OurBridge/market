const generateDescription = async ({
  storeName,
  location,
  keyWords,
  menus,
  tone,
  numWords,
}) => {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: `Write an introduction to the restaurant in a traditional market called ${storeName} 
          ${location ? `located in ${location}` : ""} that is around ${
            numWords || 200
          } words in a ${tone || "neutral"} tone. The restaurant menus are ${menus}. ${
            keyWords ? `The restaurant the following keywords: ${keyWords}.` : ""
          }. The store should be described in a SEO-friendly way, highlighting its unique features and benefits.`,
          max_tokens: 100,
          temperature: 0.5,
        }),
      }
    );

    const data = await response.json();
    console.log(data)
    console.log(data.choices[0].text);
    return data.choices[0].text;
  } catch (err) {
    console.error(err);
  }
};

export default async function handler(req, res) {
  const { storeName, location, keyWords, menus, tone, numWords } = req.body;

  const description = await generateDescription({
    storeName,
    location,
    keyWords,
    menus,
    tone,
    numWords,
  });

  res.status(200).json({
    description,
  });
}
