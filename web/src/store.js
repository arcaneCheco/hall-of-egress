import create from "zustand";

const useStore = create((set) => ({
  userId: 1,
  userName: "default user",
  galleries: [
    {
      galleryName: "all",
      galleryId: 1,
      images: [
        {
          imagePath: "/images/A.jpeg",
          description:
            "A is for Aptrgangr. The 'again-walker' also known as druagr are viking undead, who may have come back for any number of reasons such as vengeance, or to fulfill a pledge, or if he is a son who has disappointed his father.",
        },
        {
          imagePath: "/images/B.jpeg",
          description:
            "B is for Brunnmigi. In Norse mythology, a troll like being who defiles wells. It is also a kenning applied to foxes.",
        },
        {
          imagePath: "/images/C.jpeg",
          description:
            "C is for Changeling. A changeling child is a fairy child left in place of a human child stolen by the fairies.",
        },
        {
          imagePath: "/images/D.jpeg",
          description:
            "D is for Dark Elf. Dökkálfar in old Norse, live down below the earth. They are different from the light elves in appearance, and even more so in nature.",
        },
        {
          imagePath: "/images/E.jpeg",
          description:
            "E is for Eikthyrnir, which means thorny-oak, is a stag which stands upon Valhalla.",
        },
        {
          imagePath: "/images/F.jpeg",
          description:
            "E is for Eikthyrnir, which means thorny-oak, is a stag which stands upon Valhalla.",
        },
        {
          imagePath: "/images/G.jpeg",
          description:
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
