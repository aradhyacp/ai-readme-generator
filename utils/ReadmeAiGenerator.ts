import { GoogleGenAI } from "@google/genai";

const AiGen = async ({ apiKey, repoUrl, projectName, projectStruct, aboutProject }) => {
      try {
        const ai = new GoogleGenAI({ apiKey:apiKey });

        const prompt = `Please generate a professional, highly detailed, visually appealing, and developer-friendly README.md file for my GitHub repository. The repository URL is ${repoUrl}, and the file structure is as follows: ${projectStruct}. Carefully analyze the repository contents, including all code files, folders, and any documentation, to extract every relevant detail about the project. The README should be clear, structured, and visually organized, making it easy for developers and users to understand, use, and contribute to the project.

  the user say about their project (optional, if nothing is present ignore this and move on): project name ${projectName} about project ${aboutProject}

The README.md should include the following enhanced sections:

Project Title – A clear, descriptive, and catchy title.

Badges – Include relevant badges such as build status, license, version, and dependencies if applicable.

Description – A detailed explanation of what the project does, its purpose, and why it is useful. Include context about the problem it solves.

Features – Extract all key features and functionalities from the codebase, modules, and folder structure. Present them in a well-organized bullet list or table format. Highlight important points with icons or emojis for better readability.

Tech Stack / Technologies Used – Automatically identify all languages, frameworks, libraries, and tools used in the project. Include images or icons for each technology (e.g., Python, React, Node.js, Docker) to create a visually appealing tech stack section. Arrange them in a clean grid or table layout. And also make separate section in which Extract and list all programming languages, frameworks, libraries, and tools used in the project.

Screenshots / Demo / GIFs – Add a section for screenshots, GIFs, or demo videos. Use placeholders for images with clear instructions on where the user can add images. Include example Markdown code for displaying screenshots.

Project Structure – Provide a clear explanation of the main folders and files, highlighting their purpose.

Contributing – Guidelines for contributing to the project, extracted from any existing CONTRIBUTING.md or inferred from code organization.

License – Specify the project license, if present.

Contact / Support – Include instructions on how users can report issues, request features, or contact maintainers.

Acknowledgements – Credit any libraries, frameworks, or contributors used in the project.

Formatting Guidelines for the README:
Always return Markdown file only nothing extra, only just Markdown is allowed
Use headings and subheadings consistently.
Use bullet points, numbered lists, and tables to organize information.
Use code blocks for commands, scripts, or code examples.
Include images, GIFs, and icons where appropriate for a clean and modern look.
Use emphasis (bold/italics) strategically to highlight important content.
Ensure readability and professional appearance across all sections.
The final README.md should be fully self-contained, easy to read, visually appealing, and informative, presenting the project as professional, well-documented, and ready for developers and users alike. Make it attractive and suitable for GitHub’s first-page view, with all essential information extracted automatically from the repository content.

Ensure the README is well-formatted with Markdown, including headings, subheadings, bullet points, tables, code blocks, and links where appropriate. The final file should be readable, professional, and appealing, making it easy for developers and users to understand the project quickly.`;

        const model = "gemini-3-flash-preview";
        

        const response = await ai.models.generateContent({
          model,
          contents: prompt,
        });

        return (
      response?.text ||
      "No content generated"
    );
      } catch (error) {
        console.error("Error generating AI content:", error);
        return "Error generating README";
      }
};

export default AiGen;
