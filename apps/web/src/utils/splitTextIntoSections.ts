const splitTextIntoSections = (text: string, sectionSize: number) => {
  // Split the text into an array of sentences
  const sentences = text.split(/[.!?]/);

  const sections: string[] = [];
  let currentSection = "";

  for (const sentence of sentences) {
    currentSection += sentence;

    // If the current section is now larger than the desired section size,
    // add it to the list of sections and reset the current section
    if (currentSection.length > sectionSize) {
      sections.push(currentSection);
      currentSection = "";
    }
  }

  // If there is any text left in the current section, add it to the list of sections
  if (currentSection.length > 0) {
    sections.push(currentSection);
  }

  return sections;
};

export default splitTextIntoSections;
