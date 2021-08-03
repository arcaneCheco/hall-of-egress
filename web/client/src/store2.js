import create from "zustand";

const useGalleryStore = create((set, get) => ({
  galleries: [
    {
      ownerId: "1",
      _id: "1",
      galleryDescription: "the norse bestiary alphabet by thomas Denmark",
      galleryName: "norse bestiary alphabet",
      position: [4, -2, 1],
      color: "red",
    },
    {
      ownerId: "1",
      _id: "2",
      galleryDescription: "list of my own creations",
      galleryName: "my stuff",
      position: [-5.5, 1, -1],
      color: "green",
    },
  ],
  addGallery: (gallery) =>
    set((state) => ({ galleries: [...state.galleries, gallery] })),

  addGalleryThen: (gallery) => {
    set((state) => ({ galleries: [...state.galleries, gallery] }));
    get().tester();
  },
  tester: () => console.log("worked"),

  isActive: false,
  setIsactiveState: () => set((state) => ({ isActive: !state.isActive })),
}));

const useImageStore = create((set) => ({
  addImage: (image) => set((state) => ({ images: [...state.images, image] })),
  getGalleryPosition: (ownerId) =>
    useGalleryStore
      .getState()
      .galleries.find((gallery) => (gallery._id = ownerId)).position,
  images: [
    {
      ownerId: "1",
      _id: "1",
      imageSource: "/images/A.jpeg",
      imageDescription:
        "A is for Aptrgangr. The 'again-walker' also known as druagr are viking undead, who may have come back for any number of reasons such as vengeance, or to fulfill a pledge, or if he is a son who has disappointed his father.",
    },
    {
      ownerId: "1",
      _id: "2",
      imageSource: "/images/B.jpeg",
      imageDescription:
        "B is for Brunnmigi. In Norse mythology, a troll like being who defiles wells. It is also a kenning applied to foxes.",
    },
    {
      ownerId: "1",
      _id: "3",
      imageSource: "/images/C.jpeg",
      imageDescription:
        "C is for Changeling. A changeling child is a fairy child left in place of a human child stolen by the fairies.",
    },
    {
      ownerId: "1",
      _id: "4",
      imageSource: "/images/D.jpeg",
      imageDescription:
        "D is for Dark Elf. Dökkálfar in old Norse, live down below the earth. They are different from the light elves in appearance, and even more so in nature.",
    },
    {
      ownerId: "1",
      _id: "5",
      imageSource: "/images/E.jpeg",
      imageDescription:
        "E is for Eikthyrnir, which means thorny-oak, is a stag which stands upon Valhalla.",
    },
    {
      ownerId: "1",
      _id: "6",
      imageSource: "/images/F.jpeg",
      imageDescription:
        "F is for Finfolk. A dark mysterious race from Finfolkaheem who kidnap unsuspecting fishermen, or frolicking youth, near the shore and force them into lifelong servitude as a spouse.",
    },
    {
      ownerId: "1",
      _id: "7",
      imageSource: "/images/G.jpeg",
      imageDescription:
        "G is for Gullinbursti (Golden Bristles) The golden boar made by the dwarves and given to Freya who could ride it faster than any horse. Its golden rays shone like the Sun.",
    },
    {
      ownerId: "2",
      _id: "8",
      imageSource: "/images/H.jpeg",
      imageDescription:
        "H is for Huldra. A troll-like woman living in the woods. She is fair and beautiful, but wild and has a long cow-tail which she hides behind her back upon meeting a human.",
    },
    {
      ownerId: "2",
      _id: "9",
      imageSource: "/images/I.jpeg",
      imageDescription:
        "I is for Idi. One of the rime-giants, he left piles of gold to be divided among his sons. The brothers, in choosing how to divide the treasure, decided that each should take as much as his mouth would hold.",
    },
    {
      ownerId: "2",
      _id: "10",
      imageSource: "/images/J.jpeg",
      imageDescription:
        "J is for Jörmungandr. Also known as the Midgard Serpent, is a sea serpent so large it can surround the earth and grasp its own tail. When it releases its tail, Ragnarök will begin.",
    },
    {
      ownerId: "2",
      _id: "8",
      imageSource: "/images/K.jpeg",
      imageDescription:
        "K is for Kabouter. They are tiny people who live underground, or in mushrooms. They are also spirits who help in the home. The males have long, full beards and wear tall, pointed red hats. They are generally shy of humans and often punish people for spying on them.",
    },
    {
      ownerId: "2",
      _id: "9",
      imageSource: "/images/L.jpeg",
      imageDescription:
        "L is for Landvættir ('land wights') who are spirits of the land. They protect and promote the flourishing of the places where they live, which can be as small as a rock or as large as a section of a country.",
    },
  ],
}));

export { useGalleryStore, useImageStore };
