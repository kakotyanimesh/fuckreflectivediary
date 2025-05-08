export const generatePrompt = ({
    subjectName,
    grade,
    topicName,
    teaching_aids,
    teachingmethods,
    classroomex,
    more,
  }: {
    subjectName: string;
    grade: string;
    topicName: string;
    teaching_aids: string;
    teachingmethods: string;
    classroomex: string;
    more: string;
  }) => {
    return `
  You are generating a reflective diary entry in HTML format for a B.Ed. trainee teacher based on their classroom teaching experience.
  
  The response must:
  - Start with: Pedagogy : <b>Pedagogy : ${subjectName}</b><br><br>
  - Follow with exactly 8 reflection questions, each starting with a bold question using <b> tags
  - Use <br><br> between each section for proper spacing
  - Write in a formal, natural tone suitable for direct submission in a reflective diary
  - DO NOT use markdown, code blocks, or explanations
  - DO NOT add anything outside the expected 8-question format
  - If 'Teaching Aids Used' is empty, skip mentioning it
  - If 'More' is filled, include the relevant info in question 5, 6 or 8 naturally
  
  Use the following sample as the structure and tone model (but generate a new response from the inputs below):
  
  Example Output Format (HTML):
  Pedagogy : Mathematics<br><br>
  <b>1. What have I learned from today’s lesson practice?</b><br>
  Teaching algebraic expressions taught me how important it is to explain concepts step-by-step. I learned that students often struggle with understanding abstract terms like 'variable' or 'constant' unless connected to real-life examples. I also realised the value of checking prior knowledge before introducing new algebraic concepts.<br><br>
  
  <b>2. What aspects of the lesson practice were most effective?</b><br>
  Breaking the topic into smaller components—starting with definitions, followed by examples, and then classifications—helped students understand the concepts clearly. My blackboard presentation and questioning technique also encouraged participation and clarity.<br><br>
  
  <b>3. Which students stood out today? Who captured my attention? Why?</b><br>
  Several students who typically stay quiet were actively involved during the demonstration part of the Science lesson. One student confidently explained the concept of constants and variables. When I related variables to daily life scenarios like temperature or cost, students connected quickly.<br><br>
  
  <b>4. What worked really well today?</b><br>
  The use of a number-based analogy to explain constants and variables worked very well. For example, when I related variables to daily life scenarios like temperature or cost, students connected quickly. They also appreciated being invited to write on the board.<br><br>
  
  <b>5. To what extent my practice in teaching has led me to become better at teaching skills?</b><br>
  This week helped me improve the following skills:<br>
  Explanation Skill: I became more confident in simplifying complex terms and rephrasing when students appeared confused.<br>
  Use of Blackboard: My blackboard writing skills improved a lot but still need refinement.<br>
  Questioning and Interaction Skills: I was able to frame questions that stimulated thinking and encouraged classroom participation. These skills are gradually improving with every lesson I teach.<br><br>
  
  <b>6. What aspects of the lesson practice were least effective?</b><br>
  I tried to cover too much in one session. Introducing definitions and types of expressions made the class slightly heavy. I should have spread the lesson over two periods for better understanding.<br><br>
  
  <b>7. What did not work or could have been more effective? What was missing or needed?</b><br>
  A recap activity or exit question could have helped in reinforcing the lesson. Also, more examples on the board might have helped slower learners.<br><br>
  
  <b>8. What is important for me to do tomorrow? This week? Or What can I do to improve my next lesson plan and teaching practice?</b><br>
  In upcoming lessons, I will:<br>
  - Focus on breaking down content into smaller, digestible segments.<br>
  - Include student-led activities for better engagement.<br>
  - Allow time for reflection and feedback at the end of each lesson.<br>
  - Rehearse my delivery and transitions to maintain a smooth flow in teaching.<br><br>
  
  Now generate a new response using the following values:
  
  Subject Name: ${subjectName}  
  Grade: ${grade}  
  Topic of Lesson Plan: ${topicName}  
  Teaching Aids Used: ${teaching_aids}  
  Teaching Methods: ${teachingmethods}  
  Classroom Experience: ${classroomex}  
  More (skills improved, areas to improve, future plans – optional): ${more}
  
  Write the full 8-question reflective diary in HTML as described above.
  `;
  };
  