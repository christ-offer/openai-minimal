
interface AvailableModels {
  model: "ada" | "babbage" | "curie" | "davinci"
}


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

interface FineTunes {
  object: string,
  data: FineTune[];
}

interface FineTune {
  object: "fine-tune";
  id: string;
  hyperparams: {
    n_epochs: number;
    batch_size: number | null;
    prompt_loss_weight: number;
    learning_rate_multiplier: number | null;
  },
  organization_id: string;
  model: string;
  training_files: any[];
  validation_files: any[];
  result_files: any[];
  created_at: number;
  updated_at: number;
  status: "pending" | "running" | "completed" | "failed";
  fine_tuned_model: any | null;
}

interface FineTuneResponse {
  object: "fine-tune";
  id: string;
  hyperparams: {
    n_epochs: number;
    batch_size: number | null;
    prompt_loss_weight: number;
    learning_rate_multiplier: number | null;
  },
  organization_id: string;
  model: string;
  training_files: {
    object: "file",
    id: string,
    purpose: "fine-tune",
    filename: string,
    bytes: number,
    created_at: number,
    status: "processed",
    status_details: any | null
  }[];
  validation_files: any[];
  result_files: any[];
  created_at: number;
  updated_at: number;
  status: "pending" | "running" | "completed" | "failed";
  fine_tuned_model: any | null;
  events: {
    object: "fine-tune-event",
    level: "info" | "warning" | "error",
    message: string,
    created_at: number
  }[]
}

interface FileResponse {
  object: "file";
  id: string;
  purpose: "fine-tune" | "fine-tune-results" | "fine-tune-train" | "fine-tune-validate";
  filename: string;
  bytes: number;
  created_at: number;
  status: "uploaded" | "processed" | "failed";
  status_details: any | null;
}

interface EmbeddingsRequest {
  model: string;
  input: string | string[];
  user?: string;
}

interface EmbeddingsResponse {
  object: string;
  data: {
    object: string;
    embedding: number[];
    index: number;
  }[];
  model: string;
  usage: {
    prompt_tokens: number;
    total_tokens: number;
  };
}

export type {
  AvailableModels,
  Models, 
  Model, 
  CompletionRequest, 
  CompletionResponse, 
  EditRequest, 
  EditResponse, 
  ModerationRequest, 
  ModerationResponse, 
  ImageRequest, 
  ImageResponse,
  FineTunes,
  FineTune,
  FineTuneResponse,
  FileResponse,
  EmbeddingsRequest,
  EmbeddingsResponse
};