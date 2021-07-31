import create from "zustand";

const useStore = create((set) => ({
  userId: 1,
  userName: "default user",
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
  updateScrollData: (data) =>
    set((state) => ({
      gallery: state.gallery.map((galleryObj, i) =>
        Object.assign(galleryObj, data[i])
      ),
    })),
}));

export default useStore;
