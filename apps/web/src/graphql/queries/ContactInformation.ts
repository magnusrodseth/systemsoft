import { graphql } from "../generated";

const ContactInformationQuery = graphql(`
  query ContactInformation {
    allContactInformation {
      email
      phone
      linkedInLink
      address
      postalCode
      city
      country
    }
  }
`);

export default ContactInformationQuery;
