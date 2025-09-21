export interface iInsightData {
  id: string;
  type: 'warning' | 'info' | 'success' | 'tip';
  title: string;
  message: string;
  action?: string;
  confidence?: number;
}

export interface iAIAnswer {
  insightId: string;
  answer: string;
  isLoading: boolean;
}

export interface RawInsight {
    type?: string;
    title?: string;
    message?: string;
    action?: string;
    confidence?: number;
}
