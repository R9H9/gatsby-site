import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "Andika, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  textAlign: "center",
}

const paragraphStyles = {
  marginBottom: 48,
}
const emojiStyles = {
  fontSize: "400%",
  textAlign: "center",
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not Found</title>
      <h1 style={headingStyles}>Page Not Found</h1>
      <p style={paragraphStyles}>
        <span role="img" aria-label="404" style={emojiStyles}>🚧</span>
        <br />
        Sorry for any inconveniences!
        <br />
        We couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/"><span role="img" aria-label="404" style={emojiStyles}>🏠</span></Link>
      </p>
    </main>
  )
}

export default NotFoundPage
