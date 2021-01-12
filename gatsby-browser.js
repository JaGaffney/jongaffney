import "./src/styles/index.scss"
import "./src/styles/layout.scss"
import "./src/styles/generics.scss"
import "./src/styles/header.scss"
import "./src/styles/footer.scss"
import "./src/styles/landing.scss"
import "./src/styles/projects.scss"
import "./src/styles/heroImage.scss"
import "./src/styles/responsive.scss"

export const onServiceWorkerUpdateReady = () => {
  if (typeof window !== "undefined") {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
  }
}

export const registerServiceWorker = () => true
