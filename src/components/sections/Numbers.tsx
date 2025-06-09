import { Container } from "../shared/Container";

const numberItems = [
  //max 4
  { data: "579+", description: "Manwhas Consumed" },
  { data: "100%", description: "Trash Anime Lover" },
  { data: "$100m", description: "Grow a garden net-worth" },
  { data: "Rank 1", description: "S-Class Hunter" },
];

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-3px rounded-3xl bg-box-bg border border-box-border 
                        shadow-lg shadow-box-shadow md:divide-x divide-box-border
                        grid grid-cols-2 md:grid-cols-4"
        >
          {numberItems.map((item, key) => (
            <div className="text-center px-5">
              <h2
                className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1"
                key={key}
              >
                {" "}
                {item.data}{" "}
              </h2>
              <p className="mt-2 text-heading-3" key={key}>
                {" "}
                {item.description}{" "}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
