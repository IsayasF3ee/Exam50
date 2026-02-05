const questions = [
    {question: "1. What is the binary equivalent of decimal 10?", options: ["1010", "1100", "1001", "1110"], answer: 0},
    {question: "2. Which is a programming language?", options: ["HTML", "CSS", "JavaScript", "Photoshop"], answer: 2},
    {question: "3. What does CPU stand for?", options: ["Central Processing Unit", "Computer Primary Unit", "Central Program Unit", "Control Processing Unit"], answer: 0},
    {question: "4. Which of the following is a database?", options: ["MySQL", "HTML", "CSS", "JS"], answer: 0},
    {question: "5. What is the main purpose of an Operating System?", options: ["To compile code", "To manage hardware", "To design websites", "To browse the internet"], answer: 1},
    {question: "6. Which of these is NOT a programming paradigm?", options: ["Object-oriented", "Functional", "Procedural", "Graphical"], answer: 3},
    {question: "7. What does RAM stand for?", options: ["Random Access Memory", "Read Access Memory", "Rapid Application Module", "Read And Modify"], answer: 0},
    {question: "8. Which protocol is used for sending emails?", options: ["HTTP", "SMTP", "FTP", "TCP"], answer: 1},
    {question: "9. What is the largest unit of digital information?", options: ["Byte", "Kilobyte", "Terabyte", "Bit"], answer: 2},
    {question: "10. Which HTML tag is used for a line break?", options: ["<br>", "<hr>", "<lb>", "<break>"], answer: 0},
    {question: "11. What is the main function of DNS?", options: ["Translate domain names to IP addresses", "Secure networks", "Store website files", "Control network traffic"], answer: 0},
    {question: "12. What is the full form of HTTPS?", options: ["HyperText Transfer Protocol Secure", "HyperText Transfer Protocol System", "HyperText Transmission Protocol Secure", "HyperText Transfer Private System"], answer: 0},
    {question: "13. Which of these is a high-level language?", options: ["C++", "Assembly", "Machine Code", "Binary"], answer: 0},
    {question: "14. Which type of memory is non-volatile?", options: ["RAM", "ROM", "Cache", "Registers"], answer: 1},
    {question: "15. What is the size of an IPv4 address?", options: ["32 bits", "64 bits", "128 bits", "16 bits"], answer: 0},
    {question: "16. Which of the following is a loop structure?", options: ["if", "while", "switch", "break"], answer: 1},
    {question: "17. What is the main function of a router?", options: ["Forward packets between networks", "Store data", "Run applications", "Provide IP addresses"], answer: 0},
    {question: "18. Which of these is NOT an OS?", options: ["Windows", "Linux", "Oracle", "macOS"], answer: 2},
    {question: "19. What is the purpose of a compiler?", options: ["Convert source code to machine code", "Execute machine code", "Store data", "Send data over the network"], answer: 0},
    {question: "20. What is the purpose of HTTP?", options: ["Transfer web pages", "Send emails", "Secure data", "Encrypt files"], answer: 0},
    {question: "21. Which sorting algorithm has the best average case efficiency?", options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], answer: 2},
    {question: "22. Which is an example of a NoSQL database?", options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"], answer: 0},
    {question: "23. Which of these is used for version control?", options: ["Git", "Docker", "Python", "Node.js"], answer: 0},
    {question: "24. Which of these is a frontend framework?", options: ["React", "Django", "Laravel", "Spring"], answer: 0},
    {question: "25. What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "System Query List", "Sequential Query Language"], answer: 0},
    {question: "26. Which of these is a valid JavaScript data type?", options: ["Number", "Integer", "Decimal", "Char"], answer: 0},
    {question: "27. What is the full form of GUI?", options: ["Graphical User Interface", "General User Interface", "Global User Interaction", "Graphical Utility Interface"], answer: 0},
    {question: "28. Which of these is used for backend development?", options: ["Node.js", "Bootstrap", "CSS", "HTML"], answer: 0},
    {question: "29. Which protocol is used for secure communication over the Internet?", options: ["HTTPS", "HTTP", "FTP", "SMTP"], answer: 0},
    {question: "30. What does IP stand for?", options: ["Internet Protocol", "Internal Process", "Internet Program", "Internal Protocol"], answer: 0},
    {question: "31. Which of these is a linear data structure?", options: ["Array", "Tree", "Graph", "Heap"], answer: 0},
    {question: "32. Which of these is used to style web pages?", options: ["CSS", "HTML", "JS", "SQL"], answer: 0},
    {question: "33. Which of these is a version of Linux?", options: ["Ubuntu", "Windows", "macOS", "Oracle"], answer: 0},
    {question: "34. Which is used for network troubleshooting?", options: ["Ping", "Photoshop", "Excel", "Word"], answer: 0},
    {question: "35. What is the main function of a firewall?", options: ["Block unauthorized access", "Store data", "Transfer files", "Run programs"], answer: 0},
    {question: "36. Which HTML element is used to create a table?", options: ["<table>", "<div>", "<section>", "<form>"], answer: 0},
    {question: "37. Which programming language is used for Android development?", options: ["Java", "Python", "C++", "HTML"], answer: 0},
    {question: "38. Which cloud service provides infrastructure as a service?", options: ["AWS EC2", "Google Docs", "Dropbox", "Slack"], answer: 0},
    {question: "39. Which of these is a database query language?", options: ["SQL", "HTML", "CSS", "JS"], answer: 0},
    {question: "40. Which OS is open-source?", options: ["Linux", "Windows", "macOS", "iOS"], answer: 0},
    {question: "41. Which of these is a binary number?", options: ["1011", "256", "A1", "FF"], answer: 0},
    {question: "42. What does IDE stand for?", options: ["Integrated Development Environment", "Internal Data Engine", "Input Device Emulator", "Interface Design Environment"], answer: 0},
    {question: "43. Which of these is a markup language?", options: ["HTML", "Python", "Java", "C++"], answer: 0},
    {question: "44. Which of these is NOT a database?", options: ["Photoshop", "MySQL", "MongoDB", "Oracle"], answer: 0},
    {question: "45. What is the function of a switch in networking?", options: ["Connect devices in a network", "Store files", "Display websites", "Send emails"], answer: 0},
    {question: "46. Which protocol is used for transferring files?", options: ["FTP", "HTTP", "SMTP", "DNS"], answer: 0},
    {question: "47. Which algorithm is used for searching in a sorted array?", options: ["Binary Search", "Linear Search", "Bubble Sort", "Merge Sort"], answer: 0},
    {question: "48. What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Syntax", "Control Style Sheets", "Creative Style Syntax"], answer: 0},
    {question: "49. Which of these is a logic gate?", options: ["AND", "OR", "NOT", "All of the above"], answer: 3},
    {question: "50. Which language is primarily used for AI programming?", options: ["Python", "HTML", "CSS", "SQL"], answer: 0}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz-container");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion(){
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.forEach((btn, index) => {
        btn.textContent = q.options[index];
        btn.disabled = false;
        btn.classList.remove("btn-success","btn-danger");
        btn.classList.add("btn-outline-primary");
    });
}

optionsEl.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        checkAnswer(index);
    });
});

function checkAnswer(selected){
    const correct = questions[currentQuestion].answer;
    if(selected===correct){
        score++;
        optionsEl[selected].classList.remove("btn-outline-primary");
        optionsEl[selected].classList.add("btn-success");
    } else {
        optionsEl[selected].classList.remove("btn-outline-primary");
        optionsEl[selected].classList.add("btn-danger");
        optionsEl[correct].classList.remove("btn-outline-primary");
        optionsEl[correct].classList.add("btn-success");
    }
    optionsEl.forEach(btn=>btn.disabled=true);
}

nextBtn.addEventListener("click",()=>{
    currentQuestion++;
    if(currentQuestion<questions.length){
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult(){
    quizContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
    scoreEl.textContent=score;
}

restartBtn.addEventListener("click",()=>{
    currentQuestion=0;
    score=0;
    quizContainer.classList.remove("hide");
    resultContainer.classList.add("hide");
    loadQuestion();
});

loadQuestion();
