import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { testimonials, type Testimonial } from "@/lib/data";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-80 shrink-0 flex-col rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)]">
      <Icon name="quote" size={26} className="text-primary/30" />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
        “{t.text}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${t.hue} text-sm font-bold text-white`}>
          {t.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold">{t.name}</span>
          <span className="block text-xs text-[var(--text-faint)]">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden py-[50px]">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Loved by the people who <span className="text-gradient">use it daily</span></>}
          description="From solo creators to engineering teams, here's what the CodeLove community has to say about building, creating and converting faster."
        />
      </div>

      <div className="mask-fade-x relative mt-14 flex flex-col gap-6">
        <div className="flex w-max gap-6 animate-marquee">
          {row.map((t, i) => (
            <Card key={`a-${i}`} t={t} />
          ))}
        </div>
        <div className="flex w-max gap-6 animate-marquee [animation-direction:reverse] [animation-duration:52s]">
          {row.map((t, i) => (
            <Card key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
