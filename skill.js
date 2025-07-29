// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Submit Form Data
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  database.ref("contacts").push({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact").value,
    message: document.getElementById("message").value,
  });

  alert("Message Sent!");
  document.getElementById("contactForm").reset();
});

// Open Gmail
function openGmail() {
  window.open("gowthamk9842@gmail.com", "_blank");
}

// Open LinkedIn
function openLinkedIn() {
  window.open("https://www.linkedin.com/in/gowtham9842", "_blank");
}
function filterProjects(category) {
  const sections = document.querySelectorAll(".projects-wrapper");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  if (category === "all") {
    document.getElementById("all").classList.add("active");
  } else {
    document.getElementById(category).classList.add("active");
  }
}

function openModal(title) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
