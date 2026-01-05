import { projectDb } from "@/lib/db";

const newProject = {
  title: "Trash Talk with Garima",
  description: "An engaging workshop on circular economy and sustainable waste management practices, challenging conventional notions of waste management and introducing participants to the 12 R's of circular economy.",
  date: "August 1, 2024",
  venue: "Association of Youth Organizations Nepal (AYON)",
  participants: 10,
  sessionLedBy: "Garima Bista, Core Team Member of Biruwa",
  collaboration: "Association of Youth Organizations Nepal (AYON)",
  imageUrl: "https://github.com/sanil18/biruwa/blob/main/assets/garima-trash-talk.jpg?raw=true",
  published: true,
  category: "workshop",
  detailedContent: {
    introduction: "The session began with Garima introducing the concept of the circular economy, starting by dispelling common misconceptions. She emphasized that a circular economy is not just a set of complicated calculations or projections but a comprehensive approach that encompasses reducing waste, rethinking resource use, and regenerating natural systems. To illustrate these principles, participants were given 'plastic wrappers' and tasked to find creative, sustainable ways to repurpose them. This exercise helped them directly engage with the idea of maximizing resource value, which is central to the circular economy.",
    sessionOverview: {
      title: "Session Overview",
      sections: [
        {
          title: "1. Introduction to the Circular Economy",
          content: "The session began with Garima introducing the concept of the circular economy, starting by dispelling common misconceptions. She emphasized that a circular economy is not just a set of complicated calculations or projections but a comprehensive approach that encompasses reducing waste, rethinking resource use, and regenerating natural systems. To illustrate these principles, participants were given 'plastic wrappers' and tasked to find creative, sustainable ways to repurpose them. This exercise helped them directly engage with the idea of maximizing resource value, which is central to the circular economy."
        },
        {
          title: "2. Group Discussions",
          content: "Participants were encouraged to share their ideas on adopting and adapting circular economy practices in daily life. The discussion focused on making the concept more accessible and relatable, particularly for Generation Z, by turning it into a trend or a lifestyle choice. The group explored ways to use social media and community activities to raise awareness, making sustainability not just a responsibility but also a fun, engaging topic that everyone feels empowered to support."
        },
        {
          title: "3. Role-Playing Activities",
          content: "To deepen their understanding, participants engaged in role-playing scenarios that highlighted challenges within a circular economy framework. They were asked to address real-world problems and propose solutions based on the 12 R's (such as Refuse, Rethink, Repair, and Regenerate). These scenarios encouraged critical thinking about waste management issues and fostered creative problem-solving skills."
        },
        {
          title: "4. Feedback from Participants",
          content: "The participants provided valuable feedback, sharing that before attending the session, they had perceived the circular economy as a complex, technical concept involving financial calculations and projections. However, through the workshop, they realized it is a straightforward, practical approach that emphasizes sustainable living and responsible consumption. They appreciated the engaging activities and felt more equipped to apply circular economy principles in their lives."
        }
      ]
    },
    conclusion: "The session concluded with Garima summarizing key takeaways and encouraging participants to become advocates for the circular economy within their communities. She emphasized that the circular economy is not an abstract concept but a practical solution that everyone can contribute to, starting with small, meaningful changes in daily habits. Participants left the session with a renewed sense of purpose, ready to take actionable steps toward a more sustainable future."
  },
  icon: "recycle",
  color: "emerald"
};

// Add the project to the database
const result = projectDb.create(newProject);

if (result) {
  console.log('Project added successfully!');
  console.log('Project ID:', result.id);
} else {
  console.error('Failed to add project');
}
