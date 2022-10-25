export function Article() {
  return (
    <article className="mb-12 md:mb-24">
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
          <a href="https://mateusguimaraes.com/posts/full-stack">Full-stack development is a superpower</a>
        </h1>

        <p className="text-sm text-gray-700 py-1 px-1">
          <a href="https://mateusguimaraes.com/posts/full-stack">
            Published at &nbsp;
            <time className="font-semibold text-blue-600" dateTime="2022-08-07 13:00:00">
              Aug 07, 2022
            </time>
          </a>
        </p>
      </header>

      <div className="prose md:prose-lg lg:prose-xl">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit explicabo architecto nobis laborum reiciendis enim eum ea iusto numquam atque ipsa corrupti asperiores ratione, repellendus velit, minima rerum quis!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quas. Ratione aspernatur sunt culpa at et. Ad sunt modi, nulla perferendis molestiae quisquam earum doloremque consequatur illo, ullam accusantium officia.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe cum odio pariatur culpa eum rerum, veniam officia perferendis corrupti consequuntur, optio esse quod? Esse perspiciatis blanditiis aspernatur explicabo nam.</p>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facilis vitae amet similique harum quibusdam enim blanditiis veniam vero praesentium error, dicta odio molestiae quasi iusto cupiditate est id nemo!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, itaque saepe ut nesciunt quia explicabo eveniet quidem? Odio autem qui deserunt! Atque unde dolorem perspiciatis! Ratione totam quia voluptas nesciunt.</p>
      </div>
    </article>
  )
}