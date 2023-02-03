export function getPrompt(description: string) {
  const prompt = `How would be a good description of myself to apply for a job with the following description: ${
    description.slice(-1) === "." ? "" : "."
  }`;

  return prompt;
}
