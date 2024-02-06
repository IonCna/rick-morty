import "../styles/app.css"
import "../styles/notfound.css"

const NotFound = () => {

  return (
    <section className="container gap-0">
      <img
        src="https://imgs.search.brave.com/_xGmmIaM_ioOwk7bcchUKJ1qOjs-uUpdPx_fQFbnrHk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDMyNzc3/MzUuanBn"
        alt=""
        className="not-found-banner"
      />

      <div className="not-found-content">
        <div>
          <h1 className="title">
            No encontré lo que buscabas
          </h1>

          <a
            href="/"
            className="btn a-home"
          >
            Volver
          </a>
        </div>
      </div>
    </section>
  )
}

export default NotFound