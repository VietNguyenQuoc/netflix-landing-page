type Movie = {
  name: string;
  year: string;
  genres: string[];
  director: string[];
  episodes: { [key: string]: number };
  description: string;
  image: string;
  rate: string;
};

export const movies: Movie[] = [
  {
    name: "Stranger Things",
    year: "2019",
    genres: ["Thriller", "Horror", "Teen Program"],
    director: ["The Duffer Brothers"],
    episodes: {
      "2019": 8,
      "2020": 7,
      "2021": 8,
    },
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    image:
      "https://photo2.tinhte.vn/data/attachment-files/2021/08/5583558_cover-st4.jpg",
    rate: "16+",
  },
];
