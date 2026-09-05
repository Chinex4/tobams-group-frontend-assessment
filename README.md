# Tobams Group Frontend Intern Assessment

A responsive landing page implementation built from the provided Figma design as part of the Tobams Group Frontend Internship Assessment.

## Live Demo

[View Live Site](https://tobams-group-chinex.vercel.app/)

## GitHub Repository

[View Repository](https://github.com/Chinex4/tobams-group-frontend-assessment)

## Figma Design

[Frontend Intern Assessment Figma Design](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Next.js App Router
- `next/image`
- `next/font`
- React

## Features

- Responsive implementation based on the provided Figma design
- Mobile, tablet, and desktop layouts
- Reusable component architecture
- Responsive navigation
- Functional mobile navigation menu
- Functional testimonial carousel
- Semantic HTML structure
- Keyboard-accessible buttons and links
- Optimized images using `next/image`
- Nunito font loaded using `next/font`
- Responsive layouts implemented with Tailwind CSS utility classes

## Responsive Design

The application was designed and tested for the required assessment screen sizes:

- 425px mobile
- 768px tablet
- 1280px and above desktop

Responsive behaviour is implemented primarily using Tailwind CSS responsive prefixes such as:

- `sm:`
- `md:`
- `lg:`
- `xl:`

No additional CSS framework was used.

## Getting Started

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL_HERE
```

Navigate into the project:

```bash
cd tobams-group-frontend-assessment
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## Production Build

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

## Project Structure

```text
tobams-group-frontend-assessment/
│
├── public/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── LearningManagementSection.tsx
│   │   │   ├── CorporateTrainingsSection.tsx
│   │   │   ├── IndividualTrainingSection.tsx
│   │   │   ├── CapacityDevelopmentSection.tsx
│   │   │   ├── ManagementDevelopmentSection.tsx
│   │   │   ├── TransformationHubSection.tsx
│   │   │   ├── TrainingConsultantSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── GetInTouchSection.tsx
│   │   │
│   │   └── ui/
│   │
│   ├── constants/
│   └── types/
│
├── package.json
├── postcss.config.mjs
├── next.config.ts
├── eslint.config.mjs
├── tsconfig.json
└── README.md
```

## Component Architecture

The landing page was divided into separate reusable components instead of placing the entire application inside one page file.

The main page acts primarily as the composition layer for the different sections.

Examples include:

- `Navbar`
- `HeroSection`
- `LearningManagementSection`
- `CorporateTrainingsSection`
- `IndividualTrainingSection`
- `CapacityDevelopmentSection`
- `ManagementDevelopmentSection`
- `TransformationHubSection`
- `TrainingConsultantSection`
- `TestimonialsSection`
- `GetInTouchSection`
- `Footer`

This approach keeps the codebase easier to maintain, understand, and extend.

## Design Decisions and Technical Assumptions

The implementation follows the supplied Figma design as closely as possible in terms of:

- Layout
- Typography
- Spacing
- Colours
- Image positioning
- Section structure
- Responsive behaviour

The Nunito font is loaded through Next.js `next/font`.

Images are rendered using `next/image` for optimization.

Some desktop and mobile Figma layouts use different positioning and content arrangements. Responsive Tailwind utilities were used to reproduce those differences instead of simply shrinking the desktop layout.

The testimonial section was implemented as a functional custom carousel without introducing an external carousel or UI library.

Where the Figma design did not provide a complete interactive state, such as some navigation dropdown content, the implementation avoids inventing unsupported content while preserving the visual design.

## Accessibility

Accessibility considerations include:

- Semantic elements such as `nav`, `main`, `section`, `footer`, headings, lists, links, and buttons
- Meaningful image alternative text
- Decorative images marked appropriately
- Keyboard-accessible navigation
- Keyboard-accessible carousel controls
- Accessible labels for navigation and interactive controls
- Visible focus states on interactive elements

## Code Quality

The project follows the assessment requirements by using:

- No inline styles
- Tailwind CSS utilities for styling
- Descriptive component and variable names
- Reusable components
- TypeScript
- Next.js App Router
- `next/image`
- `next/font`
- No Bootstrap, Material UI, Chakra UI, or other CSS/UI frameworks

## AI Usage Disclosure

AI tools were used as a development aid during this assessment for implementation guidance, debugging, code suggestions, responsive layout suggestions, and code review.

All AI-assisted suggestions were reviewed, adapted, understood, and tested before being included in the final implementation.

## Known Issues

No known major issues at the time of submission.

## Author

Chinaza Okuefuna