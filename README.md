# Huddle Landing Page: Advanced Responsive Layouts with Curved Sections

This repository is evidence of my learning journey. It represents a project I undertook to refine my layout and conditional logic skills before my current specialization in Full Stack development.

**Note:** The design and assets were provided by Frontend Mentor. My role was the technical implementation from scratch.

---

## 🌟 About this project
This project is a high-fidelity landing page for **Huddle**, a conceptual community-building platform. The main challenge was implementing the "curved sections" that separate different content blocks, requiring a precise mix of background images and structural HTML.

The core objective was to build a UI that feels organic and fluid, ensuring that the complex background transitions remain perfectly aligned across mobile, tablet, and desktop resolutions.

---

## 🚀 Links
* **Live Demo:** [SEE DEMO HERE](https://cmp2007.github.io/Huddle-landing-page-with-curved-sections/)
* **Frontend Mentor Profile:** [View my solutions](https://www.frontendmentor.io/profile/CMP2007)
* **Original Challenge:** [Social media dashboard with theme switcher](https://www.frontendmentor.io/solutions/huddle-landing-page-with-curved-sections-Yjg1thfbvR)

---

### Screenshot

![](./assets/images/Screenshot.jpg)

---

## 📋 Evolution & Context Note
> ⚠️ **Note on my trajectory:** This project demonstrates my transition towards **Adaptive UI**. Beyond simple CSS Media Queries, I implemented JavaScript to dynamically swap SVG assets based on viewport width, ensuring the curved sections always look sharp and correctly proportioned.

## 📋 Technical Milestones of this Stage
In this phase of my learning, I successfully implemented:

* **Dynamic Asset Swapping:** Created a JS `checkWindow` function that listens to the `resize` event to swap between mobile and desktop SVG backgrounds, optimizing the visual flow.
* **Complex Grid Area Mapping:** Used `grid-template-areas` to completely rearrange the layout structure between mobile (stacked) and desktop (alternating side-by-side) without changing the HTML order.
* **Form Validation with Regex:** Integrated a newsletter subscription system with real-time email format validation using Regular Expressions (`emailRegex`).
* **SVG Styling & Gradients:** Implemented advanced SVG manipulation, including custom linear gradients for social media icons and hover effects on vector paths.
* **Semantic Typography:** Managed a dual-font system (Poppins for headings, Open Sans for body) to maintain brand consistency and readability.

## 🛠️ Technologies (at the time)
* **Vanilla JavaScript:** Window resize handling, DOM manipulation, and Regex validation.
* **HTML5 & CSS3:** CSS Grid (Areas), Flexbox, and complex background positioning.
* **Responsive Design:** Mobile-first approach with multiple breakpoints (499px, 650px, 870px, 1000px, 1350px).
