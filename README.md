# Minimal OpenAI Library

A minimal library for the OpenAI API.

The included functionality is:

* Model Retrieval
* Completions (text/code generation)
* Edit
* Image Generation
* Moderation
* Fine-tuning
* Files
* Embeddings
  

You have to supply an API key to use the API. You can get one from [OpenAI](https://beta.openai.com/).


## Usage

I decided to leave it as "unopinionated" as possible, so there are no default values for any of the parameters. You have to supply all of them.

```ts
import { OpenAI } from "https://deno.land/x/openai_mini/mod.ts";

const openai = new OpenAI('your-api-key');

const prompt = "const helloWorld = ("
const completion = await openai.createCompletion({
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

console.log(completion.choices[0].text);

const moderation = await openai.createModeration({input: completion.choices[0].text})

const edit = await openai.createEdit({
  model: "text-edit-davinci-001"
  instruction: "Fix any spelling mistake"
  input: "I am a gewd speler"
})

const image = await openai.createImage({
  prompt: "an image of a brown cat holding a piece of pizza",
  n: 1,
  size: "1024x1024",
  response_format: "url"
})

const models = await openai.getModels()

const embedding = await openai.createEmbedding({
  model: "text-embedding-ada-002",
  input: "The food was delicious and the waiter...",
})

```

The general steps for creating a fine tune model are the following

* Upload training data
  https://beta.openai.com/docs/api-reference/files/upload
* Create a finetune model
  https://beta.openai.com/docs/api-reference/fine-tunes
* Check the status
  https://beta.openai.com/docs/api-reference/fine-tunes/list
* Get info on your finetuned model
  https://beta.openai.com/docs/api-reference/fine-tunes/retrieve

Use your model Id in future requests whether using the openAI api or the openAI playground
