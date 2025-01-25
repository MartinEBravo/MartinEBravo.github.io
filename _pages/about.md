---
layout: about
title: about
permalink: /
subtitle: 

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Stockholm, Sweden</p>

news: false # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

Hi! I'm Martín Bravo, a <span id="age"></span>-year-old Computer Science and Engineering student from Chile. I'm currently an exchange student at KTH Royal Institute of Technology in Stockholm, Sweden. My passion lies in programming, mathematics, machine learning, and entrepreneurship. I've worked with the National Center for Artificial Intelligence in Chile and SoyMomo. Right now, I’m interning at Hopsworks as a Machine Learning Engineer, focusing on LLMs and ML pipelines.

When I’m not working or studying, I enjoy learning languages (currently Swedish and Chinese), running, playing the violin and chess. My long-term dream is to contribute to the technological development of Chile and Latin America by building impactful businesses and fostering innovation.

Feel free to connect with me on LinkedIn or check out my projects! I’m always open to new opportunities and collaborations.


<script>
    // Set your birthday
    const birthday = new Date("2003-02-16"); // Replace with your actual birthday (YYYY-MM-DD)
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    const dayDiff = today.getDate() - birthday.getDate();

    // Adjust age if the current date is before the birthday in the current year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Update the age in the HTML
    document.getElementById("age").textContent = age;
</script>

