export enum MenuFeature {
  check,
  statistic,
}

export enum StatistikMenuFeature {
  upload,
  statistic,
}

export type ResultPredictionType = {
  conversation_id_str: string;
  created_at: string;
  favorite_count: number;
  full_text: string;
  id_str: number;
  lang: string;
  prediction: string;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  tweet_url: string;
  user_id_str: number;
  username: string;
};
