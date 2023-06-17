/* eslint-disable no-restricted-globals */

// self.addEventListener('message', (event) => {
//   console.log('[WORKER] worker con data: ', event.data);
// });

// self.addEventListener(
//   'message',
//   async (e) => {
//     const resources = e.data;
//     const medias = await Promise.all(
//       resources.map(async (data, index) => {
//         try {
//           if (data.type === 'image') {
//             const url = `${data.src.path}.${data.src.sources[data.src.sources.length - 1].ext}`;
//             return [await fetch(url), index];
//           }

//           if (data.type === 'video') {
//             const sources = data.src.sources.map(async (source) => {
//               const response = await fetch(source.src);
//               return response;
//             });
//             return [sources, index];
//           }

//           return null;
//         } catch (err) {
//           return null;
//         }
//       }),
//     );
//     self.postMessage(medias);
//   },
//   false,
// );
self.addEventListener(
  'message',
  async (e) => {
    const resource = e.data
    let media = null
    try {
      if (resource.type === 'image') {
        const url = `${resource.src.path}.${
          resource.src.sources[resource.src.sources.length - 1].ext
        }`
        const response = await fetch(url)
        media = response.ok
      }

      if (resource.type === 'video') {
        const sources = await Promise.all(
          resource.src.sources.map(async (source) => {
            const response = await fetch(source.src)
            return response.ok
          })
        )
        const posterResponce = await fetch(resource.src.poster)
        if (sources.includes(false) || posterResponce.ok === false) {
          media = false
        } else {
          media = true
        }
      }
    } catch (err) {
      console.error(err)
    }
    self.postMessage(media)
  },
  false
)
