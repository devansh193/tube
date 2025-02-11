import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryName = [
  "Card and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animations",
  "How-to and style",
  "Music",
  "News and politics",
  "People and animals",
  "Science and technology",
  "Sports",
  "Travel and events",
];

async function main() {
  console.log("seeding categories....");
  try {
    const values = categoryName.map((name) => ({
      name,
      description: `Videos related to ${name}`,
    }));
    await db.insert(categories).values(values);
    console.log("Categories seeded successfully.");
  } catch (error) {
    console.log("Error seeding categories", error);
    process.exit();
  }
}

main();
