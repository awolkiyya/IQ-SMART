import OpenAI from 'openai';
// this is for configuration purposes
export const clientOpenAi = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});