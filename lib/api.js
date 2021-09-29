import client from './sanity';

const projectFields = `
  title,
  subtitle,
  'slug': slug.current,
  'mainImg': mainImg.asset->url

`
export async function getAllProjects() {
  const results = await client
    .fetch(`*[_type == "project"]{${projectFields}}`);
  return results;
}