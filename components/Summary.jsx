export function Summary() {
  return (
    <section>
      {[1, 2, 3, 4, 5].map(i => (
        <article key={i} className="mb-12 md:mb-24">
          <header className="mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-1 text-gray-900">
              <a href="https://mateusguimaraes.com/posts/full-stack">Full-stack development is a superpower</a>
            </h2>

            <p className="text-sm text-gray-700 py-1 px-1">
              <a href="https://mateusguimaraes.com/posts/full-stack">
                Published at
                <time className="font-semibold text-blue-600" dateTime="2022-08-07 13:00:00">
                  Aug 07, 2022
                </time>
              </a>
            </p>
          </header>

          <div className="markup leading-relaxed">
            Being a full-stack developer gives you superpowers.
            <p className="mt-6">
              <a className="font-bold text-blue-600" href="https://mateusguimaraes.com/posts/full-stack">
                Read more
              </a>
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}