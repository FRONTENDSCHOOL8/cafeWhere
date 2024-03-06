import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PB_URL);

export const pbImg = (collectionId, recordId, mainImage) => {
  return `${import.meta.env.VITE_PB_URL}/api/files/${collectionId}/${recordId}/${mainImage}`;
};

export default pb;
