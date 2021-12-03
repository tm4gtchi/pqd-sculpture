import client from './sanity';

const projectFields = `
  title,
  subtitle,
  description,
  'slug': slug.current,
  'mainImg': mainImg.asset->url,
  'gallery': gallery.images[].asset->{
    url, 
    art_title
    },

`

const getClient = preview => preview ? previewClient : client

export async function getAllProjects() {
  const results = await client
    .fetch(`*[_type == "project"]{${projectFields}}`);
  return results;
}

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


  // 'gallery': gallery.images[].asset->{url},
