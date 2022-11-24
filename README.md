## Usage

```ts
const openai = new OpenAIApi('your-api-key');

const prompt = "/* The following is a deno library to talk to pokemon api, it is built using typescript. Start with the interrfaces needed */"
const res = await openai.createCodeCompletion({
  model: "code-davinci-002",
  prompt: `${prompt}`,
  max_tokens: 200,
  temperature: 0,
  top_p: 1,
  n: 1,
  stream: false,
  logprobs: null,
  stop: "",
});


console.log(res.choices[0].text);
```