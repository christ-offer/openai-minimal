# OpenAI Library for Deno

This is a library for Deno that provides a wrapper for the OpenAI API.

It is a work in progress, but is usable. It just does not have all the features of the API yet.

The missing features are:

* Fine-tuning
* Embeddings
* Files

You have to supply an API key to use the API. You can get one from [OpenAI](https://beta.openai.com/).


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


console.log(res.choices[0].text);
```