export enum MenuFeature {
  check,
  statistic,
}

export enum StatistikMenuFeature {
  upload,
  statistic,
}

export type ResultPredictionType = {
  conversation_id_str: number;
  created_at: string;
  favorite_count: number;
  full_text: string;
  id_str: number;
  lang: string;
  prediction: number;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  tweet_url: string;
  user_id_str: number;
  username: string;
};

export type ResultPredictionGroupByDateType = {
  date: string;
  total_promosi_judi: number;
  total_tidak_promosi_judi: number;
};

export type RatioPredictionType = {
  positive_promosi_judi: number;
  negative_promosi_judi: number;
};


export enum StatistikFilterPrediction {
  keduanya,
  promosi_judi,
  tidak_promosi_judi
}
