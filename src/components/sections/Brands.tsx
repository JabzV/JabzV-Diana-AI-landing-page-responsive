import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos = [
  "discord",
  "openai",
  "paypal",
  "slack",
  "spotify",
  "uber",
  "youtube",
];

export const Brands = () => {
  return (
    <section id="services">
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Trusted by Industry Leaders</Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {logos.map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              <a
                href={`https://www.${logo}.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`assets/logos/${logo}.png`}
                  alt={`${logo}.png`}
                  width="100"
                  height="100"
                  className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 hover:scale-105"
                />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
