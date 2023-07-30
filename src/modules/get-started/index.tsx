import Button from "@theme/Button"
import { Section } from "../../components/Section"
import React from "react"

export const GetStarted = () => {
  return (
    <Section fullWidth>
      <Section.Title center size="small">
        <div id="go">Ready to get started?</div>
      </Section.Title>

      <Section noGap center>
        <div>
          <Button to="https://forms.gle/BiCcm7Fa2NFPPhKM7" newTab>
            Send a request
          </Button>
        </div>
      </Section>
    </Section>
  )
}
