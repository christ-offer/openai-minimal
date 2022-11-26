import { 
  CompletionRequest, 
  CompletionResponse, 
  EditRequest, 
  EditResponse, 
  ImageRequest, 
  ImageResponse, 
  ModerationRequest, 
  ModerationResponse, 
  Models 
} from "./types/types.ts";

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