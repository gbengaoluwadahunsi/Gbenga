import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PRODUCTS, type Product } from "@/lib/portfolio"
import { Reveal } from "./reveal"

const pad = (n: number) => String(n).padStart(2, "0")

function Shot({ product, sizes }: { product: Product; sizes: string }) {
  return (
    <div className="frame">
      <div className="frame-core">
        <span className="ph" aria-hidden="true">
          {product.title}
        </span>
        <Image className="shot" src={product.image} alt={`${product.title} interface`} fill sizes={sizes} />
      </div>
    </div>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="tags" aria-label="Stack">
      {tags.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

export function Work() {
  const featured = PRODUCTS.filter((p) => p.featured)
  const rest = PRODUCTS.filter((p) => !p.featured)

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2" className="h2">
            <span id="work-title">
              Selected <em>work</em>
            </span>
          </Reveal>
          <span className="count">{pad(PRODUCTS.length)} projects</span>
        </div>

        {featured.map((p, i) => (
          <article key={p.title} className={`feature grid-12${i % 2 ? " flip" : ""}`}>
            <Reveal className="media">
              <a href={p.href} target="_blank" rel="noopener" tabIndex={-1} aria-hidden="true">
                <Shot product={p} sizes="(max-width: 767px) 100vw, 60vw" />
              </a>
            </Reveal>
            <Reveal className="body" delay={120}>
              <p className="idx">
                {pad(i + 1)}
                {p.kicker ? ` — ${p.kicker}` : ""}
              </p>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.summary}</p>
              <Tags tags={p.tags} />
              <a className="link-out" href={p.href} target="_blank" rel="noopener">
                Visit live <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                <span className="sr-only">: {p.title} (opens in a new tab)</span>
              </a>
            </Reveal>
          </article>
        ))}

        <div className="more">
          <h3 className="more-title">More shipped products</h3>
          <div className="bento">
            {rest.map((p, i) => (
              <Reveal as="article" key={p.title} className="card" delay={i % 2 ? 80 : 0}>
                <a href={p.href} target="_blank" rel="noopener" tabIndex={-1} aria-hidden="true">
                  <Shot product={p} sizes="(max-width: 767px) 100vw, 50vw" />
                </a>
                <div className="card-body">
                  <h3>
                    <span className="idx">{pad(featured.length + i + 1)}</span> {p.title}
                  </h3>
                  <a className="visit" href={p.href} target="_blank" rel="noopener">
                    Visit live <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                    <span className="sr-only">: {p.title} (opens in a new tab)</span>
                  </a>
                  <p>{p.summary}</p>
                  <Tags tags={p.tags} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
