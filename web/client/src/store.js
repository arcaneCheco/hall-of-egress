import create from "zustand";

const useGalleryStore = create((set) => ({
  galleries: [
    {
      galleryId: 1,
      galleryName: "all",
      galleryDescription: "the norse bestiary alphabet by thomas Denmark",
      images: [
        {
          imageId: 1,
          imageSource: "/images/A.jpeg",
          imageDescription:
            "A is for Aptrgangr. The 'again-walker' also known as druagr are viking undead, who may have come back for any number of reasons such as vengeance, or to fulfill a pledge, or if he is a son who has disappointed his father.",
        },
        {
          imageId: 2,
          imageSource: "/images/B.jpeg",
          imageDescription:
            "B is for Brunnmigi. In Norse mythology, a troll like being who defiles wells. It is also a kenning applied to foxes.",
        },
        {
          imageId: 3,
          imageSource: "/images/C.jpeg",
          imageDescription:
            "C is for Changeling. A changeling child is a fairy child left in place of a human child stolen by the fairies.",
        },
        {
          imageId: 4,
          imageSource: "/images/D.jpeg",
          imageDescription:
            "D is for Dark Elf. Dökkálfar in old Norse, live down below the earth. They are different from the light elves in appearance, and even more so in nature.",
        },
        {
          imageId: 5,
          imageSource: "/images/E.jpeg",
          imageDescription:
            "E is for Eikthyrnir, which means thorny-oak, is a stag which stands upon Valhalla.",
        },
        {
          imageSource: "/images/F.jpeg",
          imageDescription:
            "E is for Eikthyrnir, which means thorny-oak, is a stag which stands upon Valhalla.",
        },
        {
          imageSource: "/images/G.jpeg",
          imageDescription:
            "E is for Eikthyrnir, which means thorny-oak, is a stag which stands upon Valhalla.",
        },
      ],
    },
  ],
  // updateScrollData: (data) =>
  //   set((state) => ({
  //     gallery: state.gallery.map((galleryObj, i) =>
  //       Object.assign(galleryObj, data[i])
  //     ),
  //   })),
}));

export { useGalleryStore };

// database:
// userCollection = [
//   {
//     _id: "1",
//     userName: "user1",
//   },
//   {
//     _id: "2",
//     userName: "user2",
//   },
// ];
// galleryCollection = [
//   {
//     ownerId: "1",
//     _id: "61054ecc300ad7244078b599",
//     galleryDescription: "the norse bestiary alphabet by thomas Denmark",
//     galleryName: "norse bestiary alphabet",
//   },
//   {
//     ownerId: "1",
//     _id: "61054ecc300ad7244078b5wef",
//     galleryDescription: "list of my own creations",
//     galleryName: "my stuff",
//   },
//   {
//     ownerId: "2",
//     _id: "61054ecc300078b5wef",
//     galleryDescription: "",
//     galleryName: "hello",
//   }
// ]
// imageCollection = [
//   {
//     ownerId: "weewboiewf",
//     _id: "pqohwefiweo",
//     imageSource: "webewp",
//     imageDescription: "wegbewpfiew"
//   }
// ]

// import axios from "axios";

// const userName = "checo";
// const baseUrl = `http://localhost:3001/${userName}`;
// const [galleries, setGalleries] = useState([]);
//   const [images, setImages] = useState([]);
//   useEffect(() => {
//     // retrive user galleries
//     (async () => {
//       const data = await fetchGalleries();
//       // console.log(data)
//       setGalleries(data);
//     })();
//   }, []);
//   useEffect(() => {
//     // retrive user galleries
//     (async () => {
//       const data = await fetchImages("hello9");
//       // console.log(data)
//       setImages(data);
//     })();
//   }, []);
//   // populate galleries with imaages

//   // fetchGalleries();
//   // const galleries = fetchGalleries();
//   console.log(galleries);
//   console.log(images);

// const fetchGalleries = async () => {
//   try {
//     const res = await axios.get(`${baseUrl}/galleries`);
//     return await res.data;
//   } catch (error) {
//     console.log(error);
//   }
//   // // let data;
//   // return axios.get(`${baseUrl}/galleries`).then((res) => {
//   //   return res.data;
//   // });
// };
// const fetchImages = async (galleryName) => {
//   try {
//     const res = await axios.get(`${baseUrl}/galleries/${galleryName}/images`);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// // fetchGalleries();

// // export { fetchGalleries };

// // const testComponent = () => {
// //   return 1
// // }
