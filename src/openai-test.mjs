import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Where is italy?" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main();
