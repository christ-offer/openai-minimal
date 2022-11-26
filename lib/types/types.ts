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


export type { 
  Models, 
  Model, 
  CompletionRequest, 
  CompletionResponse, 
  EditRequest, 
  EditResponse, 
  ModerationRequest, 
  ModerationResponse, 
  ImageRequest, 
  ImageResponse
};