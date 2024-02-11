import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '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',
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main();
