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
        <Section.Subtitle center size="small">
          <a href="https://twitter.com/deeintech">DM me on Twitter</a> or <br />
          <br />
        </Section.Subtitle>
        <div>
          <Button to="https://calendly.com/deeintech/15min" newTab>
            Book a call
          </Button>
        </div>
      </Section>
    </Section>
  )
}
