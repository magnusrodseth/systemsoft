const validate = ({ fullName, email, phone, message }) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^(0047|\+47)?[2-9]\d{7}$/;

  if (fullName.length < 2) {
    return {
      success: false,
      description: "Name must be at least 2 characters long",
    };
  }

  if (!emailRegex.test(email.toLowerCase())) {
    return { success: false, description: "Invalid email address" };
  }

  if (phone != "" && !phoneRegex.test(phone)) {
    return {
      success: false,
      description: "Phone number must be a Norwegian phone number",
    };
  }

  if (message.length < 25) {
    return {
      success: false,
      description: "Message must be at least 25 characters long",
    };
  }

  return { success: true, description: "" };
};

export { validate as validateContactForm };
