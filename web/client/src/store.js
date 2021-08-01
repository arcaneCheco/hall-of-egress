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
            "F is for Finfolk. A dark mysterious race from Finfolkaheem who kidnap unsuspecting fishermen, or frolicking youth, near the shore and force them into lifelong servitude as a spouse.",
        },
        {
          imageSource: "/images/G.jpeg",
          imageDescription:
            "G is for Gullinbursti (Golden Bristles) The golden boar made by the dwarves and given to Freya who could ride it faster than any horse. Its golden rays shone like the Sun.",
        },
      ],
    },
    {
      galleryId: 2,
      galleryName: "allww",
      galleryDescription: "the norse bestiary alphabet by thomas Denmark",
      images: [
        {
          imageId: 1,
          imageSource: "/images/H.jpeg",
          imageDescription:
            "H is for Huldra. A troll-like woman living in the woods. She is fair and beautiful, but wild and has a long cow-tail which she hides behind her back upon meeting a human.",
        },
        {
          imageId: 2,
          imageSource: "/images/I.jpeg",
          imageDescription:
            "I is for Idi. One of the rime-giants, he left piles of gold to be divided among his sons. The brothers, in choosing how to divide the treasure, decided that each should take as much as his mouth would hold.",
        },
        {
          imageId: 3,
          imageSource: "/images/J.jpeg",
          imageDescription:
            "J is for Jörmungandr. Also known as the Midgard Serpent, is a sea serpent so large it can surround the earth and grasp its own tail. When it releases its tail, Ragnarök will begin.",
        },
        {
          imageId: 4,
          imageSource: "/images/K.jpeg",
          imageDescription:
            "K is for Kabouter. They are tiny people who live underground, or in mushrooms. They are also spirits who help in the home. The males have long, full beards and wear tall, pointed red hats. They are generally shy of humans and often punish people for spying on them.",
        },
        {
          imageId: 5,
          imageSource: "/images/L.jpeg",
          imageDescription:
            "L is for Landvættir ('land wights') who are spirits of the land. They protect and promote the flourishing of the places where they live, which can be as small as a rock or as large as a section of a country.",
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
