import { useEffect } from "react"

const FormForFindByText = () => {
  useEffect(() => {
    const el = document.getElementById("exampleFindByTextDiv")
    if (!el) return

    const submitButton = document.getElementById("submit")
    if (!submitButton) return
    const formEl = document.getElementById("login_form")
    if (!formEl) return

    submitButton.addEventListener("click", () => {
      const userInput = document.getElementById(
        "username_input",
      ) as HTMLInputElement
      if (!userInput) return
      const passwordInput = document.getElementById(
        "password_input",
      ) as HTMLInputElement
      if (!passwordInput) return

      const userName = userInput.value
      const password = passwordInput.value
      if (!userName) {
        const userNameRequiredErrSpan = document.getElementById(
          "username_required_error",
        )
        if (!userNameRequiredErrSpan) return

        userNameRequiredErrSpan.style.display = "inline"
      }

      if (!password) {
        const passwordRequiredErrSpan = document.getElementById(
          "password_required_error",
        )
        if (!passwordRequiredErrSpan) return

        passwordRequiredErrSpan.style.display = "inline"
      }

      if (userName && userName !== "Bob") {
        const userNameInvalidErrSpan = document.getElementById(
          "invalid_username_error",
        )
        if (!userNameInvalidErrSpan) return

        userNameInvalidErrSpan.style.display = "inline"
      }

      if (password && password !== "theBuilder") {
        const passwordInvalidErrSpan = document.getElementById(
          "invalid_password_error",
        )
        if (!passwordInvalidErrSpan) return

        passwordInvalidErrSpan.style.display = "inline"
      }
    })

    formEl.addEventListener("submit", function (evt) {
      evt.preventDefault()
      window.history.back()
    })
  }, [])

  return (
    <div id="exampleFindByTextDiv">
      <form id="login_form" method="post" name="login">
        <label htmlFor="username">User Name:</label>

        <input
          type="text"
          name="username"
          id="username_input"
          placeholder="Enter user name"
        />

        <span
          id="username_required_error"
          style={{ color: "red", display: "none" }}
        >
          User Name Required
        </span>

        <span
          id="invalid_username_error"
          style={{ color: "red", display: "none" }}
        >
          Invalid User Name
        </span>

        <label htmlFor="password">Password:</label>

        <input
          type="password"
          name="password"
          id="password_input"
          placeholder="Enter password"
        />

        <span
          id="invalid_password_error"
          style={{ color: "red", display: "none" }}
        >
          Invalid Password
        </span>

        <span
          id="password_required_error"
          style={{ color: "red", display: "none" }}
        >
          Password Required
        </span>

        <button id="submit" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default FormForFindByText
