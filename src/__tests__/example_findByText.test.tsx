// https://testing-library.com/docs/example-findByText

// src/__tests__/example.test.js
// This is an example of how to use findByText to query for text that
// is not visible right away

import { render } from "@testing-library/react"
// * screen 経由ではなく render の返り値から [queries](https://testing-library.com/docs/queries/about/) を利用していく
// import { screen } from "@testing-library/dom"
// * user の setup: https://testing-library.com/docs/user-event/setup/
import userEvent from "@testing-library/user-event"
// provides a set of custom jest matchers that you can use to extend jest
// i.e. `.toBeVisible`
// * すでに src/setupTests.ts で import されている
// import "@testing-library/jest-dom"
import FormForFindByText from "../examples/FormForFindByText"

describe("findByText Examples", () => {
  it("should show a required field warning for each empty input field", async () => {
    const { getByRole, findByText } = render(<FormForFindByText />)

    const user = userEvent.setup()
    await user.click(
      getByRole("button", {
        name: "Login",
      }),
    )

    expect(await findByText("User Name Required")).toBeVisible()
    expect(await findByText("Password Required")).toBeVisible()
  })

  it("should show invalid field errors for each invalid input field", async () => {
    const { getByPlaceholderText, findByText, getByRole } = render(
      <FormForFindByText />,
    )

    const userNameField = getByPlaceholderText("Enter user name")
    const passwordField = getByPlaceholderText("Enter password")

    expect(await findByText("Invalid Password")).not.toBeVisible()
    expect(await findByText("Invalid User Name")).not.toBeVisible()

    const user = userEvent.setup()
    await user.type(userNameField, "Philchard")
    await user.type(passwordField, "theCat")

    expect(userNameField).toHaveValue("Philchard")
    expect(passwordField).toHaveValue("theCat")

    await user.click(
      getByRole("button", {
        name: "Login",
      }),
    )

    expect(await findByText("Invalid User Name")).toBeVisible()
    expect(await findByText("Invalid Password")).toBeVisible()
  })
})
