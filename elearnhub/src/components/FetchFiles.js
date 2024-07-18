import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const fetchUploadedFiles = async () => {
  const listRef = ref(storage, 'materials/');
  const res = await listAll(listRef);
  const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
  return urls;
};
