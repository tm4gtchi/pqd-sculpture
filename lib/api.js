import client from './sanity';

const projectFields = `
  title,
  subtitle,
  description,
  'slug': slug.current,
  'mainImg': mainImg.asset->url,
  'gallery': gallery.images[]{
    title,
    caption,
    'url': asset->url
    },
`

const bioText = `
  biography_text,
  section,
  'resumeItems.item[]'
  

`;

// const resumeFields = `
//   section,
//   resumeItems[]{
//     year,
//     item[]: event
//   }
// `

const getClient = preview => preview ? previewClient : client

export async function getAllProjects() {
  const results = await client
    .fetch(`*[_type == "project"]{
      ${projectFields}}`);
  return results;
}

export async function getBiography() {
  const results = await client
    .fetch(`*[_type in ["resume", "bio"]]{
      ${bioText}}`);
  return results;
}
// export async function getResume() {
//   const results = await client
//     .fetch(`*[_type == "bio"]{
//       ${bioText}}`);
//   return results;
// }

export async function getProjectBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const result = await currentClient
    .fetch(`*[_type == "project" && slug.current == $slug] {
      ${projectFields}
      content[]{..., "asset": asset->}
    }`, {slug})
    .then(res => preview ? (res?.[1] ? res[1] : res[0]) : res?.[0])

  return result;
}
