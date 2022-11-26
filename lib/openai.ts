// Interfaces for the request and response objects

// Models

interface Models {
  data: Model[];
  object: string; 
}

interface Model {
  id: string;
  object: string;
  owned_by: string;
  permission: string[];
}

// Completions

interface Choice {
  text: string;
  index: number;
  logprobs: null;
  finish_reason: string;
}

interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

interface CompletionRequest {
  model: string;
  prompt: string;
  max_tokens: number;
  temperature: number;
  top_p: number;
  n: number;
  stream: boolean;
  logprobs: null;
  stop: string;
}

interface CompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
}

// Edits

interface EditRequest {
  model: string;
  input: string;
  instruction: string;
  n: number;
  temperature: number;
  top_p: number;
}  

interface EditResponse {
  object: string;
  created: number;
  choices: EditChoice[];
  usage: Usage;
}

interface EditChoice {
  text: string;
  index: number;
}

// Moderation

interface ModerationRequest {
  input: string;
}

interface ModerationResponse {
  id: string;
  model: string;
  results: Result[];
}

interface Result {
  categories: Categories;
  category_scores: CategoryScores;
  flagged: boolean;
}

interface Categories {
  hate: boolean;
  "hate/threatening": boolean;
  "self-harm": boolean;
  sexual: boolean;
  "sexual/minors": boolean;
  violence: boolean;
  "violence/graphic": boolean;
}

interface CategoryScores {
  hate: number;
  "hate/threatening": number;
  "self-harm": number;
  sexual: number;
  "sexual/minors": number;
  violence: number;
  "violence/graphic": number;
}

// Image generation

interface ImageRequest {
  prompt: string;
  n: number;
  size: string;
  response_format: string;
}

interface ImageResponse {
  created: number;
  data: Data[];
}

interface Data {
  url: string;
}

// Class for the OpenAI API

export class OpenAI {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async createCompletion(request: CompletionRequest): Promise<CompletionResponse> {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(request),
    });
    return response.json();
  }
  async createEdit(request: EditRequest): Promise<EditResponse> {
    const response = await fetch("https://api.openai.com/v1/edits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(request),
    });
    return response.json();
  }
  async createImage(request: ImageRequest): Promise<ImageResponse> {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(request),
    });
    return response.json();
  }
  async createModeration(request: ModerationRequest): Promise<ModerationResponse> {
    const response = await fetch("https://api.openai.com/v1/moderations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(request),
    });
    return response.json();
  }
  async getModels(): Promise<Models> {
    const response = await fetch("https://api.openai.com/v1/models", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
    return response.json();
  }
}