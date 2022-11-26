## Usage

```ts
const openai = new OpenAI('your-api-key');

const prompt = "/* Return a markdown readme file for a program that has a function called checkWeather() that uses the met.no api to get the current weather */"
const res = await openai.createCompletion({
  model: "code-davinci-002",
  prompt: `${prompt}`,
  max_tokens: 400,
  temperature: 0,
  top_p: 1,
  n: 1,
  stream: false,
  logprobs: null,
  stop: "",
});

const moderation = await openai.createModeration(res.data.choices[0].text);

console.log(res.choices[0].text);
console.log(moderation.data);
```