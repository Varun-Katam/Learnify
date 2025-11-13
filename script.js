// ======== FIREBASE CONFIGURATION ========
const firebaseConfig = {
  apiKey: "AIzaSyDqBvqYx7Sh1WmFsmGtuplQ0OfuV21ODnU",
  authDomain: "learnify-99e81.firebaseapp.com",
  databaseURL: "https://learnify-99e81-default-rtdb.firebaseio.com",
  projectId: "learnify-99e81",
  storageBucket: "learnify-99e81.appspot.com",
  messagingSenderId: "1092554919462",
  appId: "1:1092554919462:web:3f9495bdb98d50e65dc4c4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();


// ======== BUILT-IN PROGRAMMING LANGUAGE RESOURCES ========
const resourceData = {
  "Python": [
    { name: "Python for Beginners – YouTube", link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
    { name: "Learn Python (Programiz)", link: "https://www.programiz.com/python-programming" },
    { name: "Python Projects (GeeksforGeeks)", link: "https://www.geeksforgeeks.org/python-projects-beginner-to-advanced/" },
    { name: "Advanced Python (Real Python)", link: "https://realpython.com/" },
    { name: "Python vs JavaScript (freeCodeCamp)", link: "https://www.freecodecamp.org/news/python-vs-javascript/" }
  ],
  "Java": [
    { name: "Java Tutorial (W3Schools)", link: "https://www.w3schools.com/java/" },
    { name: "OOPs in Java (GeeksforGeeks)", link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" },
    { name: "Java Collections (TutorialsPoint)", link: "https://www.tutorialspoint.com/java/java_collections.htm" },
    { name: "Java Projects (GeeksforGeeks)", link: "https://www.geeksforgeeks.org/java-projects/" },
    { name: "Java vs Kotlin (freeCodeCamp)", link: "https://www.freecodecamp.org/news/kotlin-vs-java-difference/" }
  ],
  "C": [
    { name: "C Programming Basics (W3Schools)", link: "https://www.w3schools.com/c/" },
    { name: "Pointers in C (GeeksforGeeks)", link: "https://www.geeksforgeeks.org/pointers-in-c-and-c-set-1-introduction-arithmetic-and-array/" },
    { name: "Memory Management in C (TutorialsPoint)", link: "https://www.tutorialspoint.com/cprogramming/c_memory_management.htm" },
    { name: "C Projects (GeeksforGeeks)", link: "https://www.geeksforgeeks.org/c-projects/" },
    { name: "C Interview Questions", link: "https://www.interviewbit.com/c-interview-questions/" }
  ],
  "C++": [
    { name: "C++ Tutorial (W3Schools)", link: "https://www.w3schools.com/cpp/" },
    { name: "OOP in C++ (GeeksforGeeks)", link: "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/" },
    { name: "STL in C++", link: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/" },
    { name: "C++ Projects", link: "https://www.geeksforgeeks.org/cpp-projects/" },
    { name: "C vs C++", link: "https://www.geeksforgeeks.org/difference-between-c-and-c/" }
  ],
  "C#": [
    { name: "C# Tutorial (W3Schools)", link: "https://www.w3schools.com/cs/" },
    { name: "C# OOP Concepts", link: "https://www.tutorialsteacher.com/csharp/csharp-oops" },
    { name: "C# Projects (GeeksforGeeks)", link: "https://www.geeksforgeeks.org/c-sharp-projects/" },
    { name: "C# vs Java", link: "https://www.geeksforgeeks.org/difference-between-java-and-c-sharp/" },
    { name: "Advanced C#", link: "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/" }
  ],
  "JavaScript": [
    { name: "Learn JavaScript (W3Schools)", link: "https://www.w3schools.com/js/" },
    { name: "DOM Manipulation Guide", link: "https://www.geeksforgeeks.org/dom-document-object-model-in-javascript/" },
    { name: "ES6 and Modern JS", link: "https://www.freecodecamp.org/news/javascript-es6-cheatsheet/" },
    { name: "JavaScript Projects", link: "https://www.geeksforgeeks.org/javascript-projects/" },
    { name: "Async JS and Promises", link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" }
  ],
  "HTML": [
    { name: "HTML Tutorial (W3Schools)", link: "https://www.w3schools.com/html/" },
    { name: "HTML Forms", link: "https://www.w3schools.com/html/html_forms.asp" },
    { name: "HTML5 Semantic Tags", link: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html" },
    { name: "Responsive Web Design", link: "https://www.w3schools.com/html/html_responsive.asp" },
    { name: "Build a Website", link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" }
  ],
  "CSS": [
    { name: "CSS Tutorial (W3Schools)", link: "https://www.w3schools.com/css/" },
    { name: "Flexbox Guide (CSS-Tricks)", link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
    { name: "CSS Grid Layout", link: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
    { name: "Animations in CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations" },
    { name: "Responsive CSS", link: "https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/" }
  ],
  "Kotlin": [
    { name: "Kotlin Tutorial (KotlinLang)", link: "https://kotlinlang.org/docs/home.html" },
    { name: "Kotlin for Beginners (YouTube)", link: "https://www.youtube.com/watch?v=EExSSotojVI" },
    { name: "Kotlin vs Java", link: "https://www.freecodecamp.org/news/kotlin-vs-java-difference/" },
    { name: "Kotlin Android Projects", link: "https://developer.android.com/kotlin" },
    { name: "Advanced Kotlin", link: "https://kotlinlang.org/docs/advanced-overview.html" }
  ],
  "Scratch": [
    { name: "Scratch Programming (Official)", link: "https://scratch.mit.edu/" },
    { name: "Scratch Step by Step (YouTube)", link: "https://www.youtube.com/watch?v=jXUZaf5D12A" },
    { name: "Scratch Game Development", link: "https://www.scratch.mit.edu/projects/editor/" },
    { name: "Scratch Animation Ideas", link: "https://www.scratch.mit.edu/explore/projects/animations/" },
    { name: "Scratch Projects Collection", link: "https://www.scratch.mit.edu/explore/projects/all/" }
  ],
  "PHP": [
    { name: "PHP Tutorial (W3Schools)", link: "https://www.w3schools.com/php/" },
    { name: "PHP and MySQL", link: "https://www.tutorialrepublic.com/php-tutorial/php-mysql-introduction.php" },
    { name: "PHP Projects (GeeksforGeeks)", link: "https://www.geeksforgeeks.org/php-projects/" },
    { name: "PHP Arrays and Loops", link: "https://www.geeksforgeeks.org/php-arrays/" },
    { name: "Advanced PHP", link: "https://www.tutorialspoint.com/php/index.htm" }
  ],
  "Ruby": [
    { name: "Ruby Basics (W3Schools)", link: "https://www.w3schools.com/ruby/" },
    { name: "Ruby on Rails", link: "https://guides.rubyonrails.org/" },
    { name: "Ruby Projects", link: "https://www.geeksforgeeks.org/ruby-projects/" },
    { name: "Ruby Classes and Modules", link: "https://www.tutorialspoint.com/ruby/ruby_classes.htm" },
    { name: "Ruby Gems", link: "https://guides.rubygems.org/" }
  ],
  "Swift": [
    { name: "Swift Tutorial (Apple)", link: "https://developer.apple.com/swift/" },
    { name: "SwiftUI Guide", link: "https://developer.apple.com/xcode/swiftui/" },
    { name: "iOS Development with Swift", link: "https://developer.apple.com/learn/courses/develop-in-swift/" },
    { name: "Swift Projects", link: "https://www.geeksforgeeks.org/swift-projects/" },
    { name: "Advanced Swift", link: "https://swift.org/documentation/" }
  ],
  "SQL": [
    { name: "SQL Tutorial (W3Schools)", link: "https://www.w3schools.com/sql/" },
    { name: "SQL Joins Explained", link: "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/" },
    { name: "SQL Projects", link: "https://www.geeksforgeeks.org/sql-projects/" },
    { name: "Advanced SQL Queries", link: "https://mode.com/sql-tutorial/advanced-sql/" },
    { name: "SQL vs NoSQL", link: "https://www.geeksforgeeks.org/difference-between-sql-and-nosql/" }
  ],
  "Rust": [
    { name: "Rust Basics (Rust Lang)", link: "https://www.rust-lang.org/learn" },
    { name: "Rust Memory Safety", link: "https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html" },
    { name: "Rust Projects", link: "https://www.geeksforgeeks.org/rust-projects/" },
    { name: "Rust vs C++", link: "https://www.geeksforgeeks.org/difference-between-c-and-rust/" },
    { name: "Advanced Rust", link: "https://doc.rust-lang.org/book/" }
  ],
  "TypeScript": [
    { name: "TypeScript Basics (W3Schools)", link: "https://www.w3schools.com/typescript/" },
    { name: "TypeScript vs JavaScript", link: "https://www.freecodecamp.org/news/typescript-vs-javascript/" },
    { name: "TypeScript Projects", link: "https://www.geeksforgeeks.org/typescript-projects/" },
    { name: "Interfaces & Generics", link: "https://www.typescriptlang.org/docs/handbook/2/objects.html" },
    { name: "Advanced TypeScript", link: "https://www.typescriptlang.org/docs/handbook/advanced-types.html" }
  ],
  "DBMS": [
    { name: "TutorialsPoint – DBMS", link: "https://www.tutorialspoint.com/dbms/index.htm" },
    { name: "GeeksforGeeks – DBMS", link: "https://www.geeksforgeeks.org/dbms/" },
    { name: "StudyTonight – DBMS", link: "https://www.studytonight.com/dbms/" },
    { name: "Javatpoint – DBMS", link: "https://www.javatpoint.com/dbms-tutorial" },
    { name: "Scaler – DBMS", link: "https://www.scaler.com/topics/dbms/" }
  ],
  "Go": [
    { name: "Go Basics (Go.dev)", link: "https://go.dev/learn/" },
    { name: "Go for Developers (TutorialsPoint)", link: "https://www.tutorialspoint.com/go/index.htm" },
    { name: "Concurrency in Go", link: "https://tour.golang.org/concurrency/1" },
    { name: "Go Projects", link: "https://www.geeksforgeeks.org/golang-projects/" },
    { name: "Advanced Go", link: "https://golangbot.com/learn-golang-series/" }
  ],
  "Node.js": [
    { name: "Node.js Docs", link: "https://nodejs.org/en/docs" },
    { name: "Node.js Tutorial (W3Schools)", link: "https://www.w3schools.com/nodejs/" },
    { name: "Node.js Guide (GeeksforGeeks)", link: "https://www.geeksforgeeks.org/nodejs/" },
    { name: "freeCodeCamp – Node.js Course", link: "https://www.freecodecamp.org/news/learn-nodejs-full-course/" },
    { name: "TutorialsPoint – Node.js", link: "https://www.tutorialspoint.com/nodejs/" }
  ],
  "React": [
    { name: "React – Official Docs", link: "https://react.dev/learn" },
    { name: "W3Schools – React Tutorial", link: "https://www.w3schools.com/react/" },
    { name: "GeeksforGeeks – ReactJS Guide", link: "https://www.geeksforgeeks.org/reactjs-tutorials/" },
    { name: "freeCodeCamp – React Course", link: "https://www.freecodecamp.org/news/learn-react-by-building-a-simple-app/" },
    { name: "TutorialsPoint – ReactJS", link: "https://www.tutorialspoint.com/reactjs/" }
  ]
};

// ======== SEARCH FEATURE ========
function findResources() {
  const searchInput = document.getElementById("subjectInput").value.trim();
  const outputDiv = document.getElementById("resources");
  outputDiv.innerHTML = "";

  if (resourceData[searchInput]) {
    outputDiv.innerHTML = `<h3>Resources for ${searchInput}:</h3>`;
    resourceData[searchInput].forEach(r => {
      outputDiv.innerHTML += `<p>📘 <a href="${r.link}" target="_blank">${r.name}</a></p>`;
    });
  } else {
    outputDiv.innerHTML = `<p>No resources found for "${searchInput}".</p>`;
  }
}

// ======== ADD RESOURCE FEATURE ========
function addResource() {
  const subject = document.getElementById("customSubject").value.trim();
  const name = document.getElementById("customName").value.trim();
  const link = document.getElementById("customLink").value.trim();

  if (!subject || !name || !link) {
    alert("⚠️ Please fill in all fields before submitting!");
    return;
  }

  const newResource = { subject, name, link, timestamp: Date.now() };
  db.ref("shared_resources").push(newResource);
  alert("✅ Resource added successfully!");

  document.getElementById("customSubject").value = "";
  document.getElementById("customName").value = "";
  document.getElementById("customLink").value = "";
}

// ======== LOAD SHARED RESOURCES ========
function loadSharedResources() {
  const sharedDiv = document.getElementById("shared");
  db.ref("shared_resources").on("value", snapshot => {
    const data = snapshot.val();
    if (!data) return;
    sharedDiv.innerHTML = "<h3>🌍 Shared Resources from Students:</h3>";
    Object.values(data).forEach(r => {
      sharedDiv.innerHTML += `
        <p>📗 <strong>${r.name}</strong> (${r.subject}) — 
        <a href="${r.link}" target="_blank">${r.link}</a></p>`;
    });
  });
}

// ======== ON PAGE LOAD ========
window.onload = () => {
  loadSharedResources();
};
