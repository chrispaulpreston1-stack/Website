import fs from 'fs';

let blogPostsCode = fs.readFileSync('src/data/blogPosts.ts', 'utf8');

const rawJson = fs.readFileSync('src/data/newBlogPosts.json', 'utf8');
const newPostsStr = rawJson.replace("import { BlogPost } from './blogPosts';\n\nexport const newPosts: BlogPost[] = ", "").replace(/;$/, "");
const parsed = JSON.parse(newPostsStr);

// Insert into the array right before The end brace of the array.
// Look for `];\n\nexport default blogPosts;`
const jsonStrList = parsed.map(p => JSON.stringify(p, null, 2));

const insertIndex = blogPostsCode.lastIndexOf('];\n\nexport default blogPosts;');
if (insertIndex === -1) {
  console.error("Could not find the end of the array in blogPosts.ts");
  process.exit(1);
}

const before = blogPostsCode.slice(0, insertIndex).trimEnd();
const after = blogPostsCode.slice(insertIndex);

// Add a comma after the last item in the array if needed.
// 'before' ends with something like `}`
const finalCode = before + ',\n  ' + jsonStrList.join(',\n  ') + '\n' + after;

fs.writeFileSync('src/data/blogPosts.ts', finalCode);
console.log('Appended to blogPosts.ts');
