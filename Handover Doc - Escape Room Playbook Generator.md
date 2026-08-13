**Handover Document: Escape Room Playbook Generator**

**Project Overview**

The **Escape Room Playbook Generator** is a web application designed to create customized marketing and SEO playbooks for destination escape room businesses. It takes user inputs about their business context (name, location, traffic, transit, key challenges) and generates a comprehensive, tailored markdown playbook.

**Current State**

* **Status**: Initial version completed and functional.

* **Features Implemented**:

  * Interactive form for business context variables.

  * Real-time playbook generation based on a detailed template.

  * Tabbed interface separating input and output.

  * Copy to clipboard and download as Markdown functionality.

  * Responsive, modern design with a purple-pink gradient theme.

* **Project Path**: /home/ubuntu/escape-room-playbook-generator

* **Latest Checkpoint**: d154f3ec (can be restored using manus-webdev://d154f3ec)

**Tech Stack**

* **Framework**: React 19 \+ Vite

* **Styling**: Tailwind CSS 4 \+ shadcn/ui

* **Icons**: lucide-react

* **Fonts**: Inter (body) and Space Grotesk (headings)

* **Routing**: Wouter (client-side only)

* **Architecture**: Static frontend (web-static template)

**Key Files**

1. client/src/pages/Home.tsx: Contains the main application logic, state management, form UI, and the playbook generation template.

2. client/src/index.css: Contains the custom color palette (purple/pink theme) and font configurations.

3. client/index.html: Includes the Google Fonts imports.

**Design Decisions**

* **Color Palette**: Vibrant purple and pink gradients (oklch values defined in index.css) to reflect an exciting, entertainment-focused brand.

* **Typography**: Space Grotesk for headings to give a modern, slightly tech/gaming feel, paired with Inter for readable body text.

* **Layout**: Centered card-based layout for the form, with informational cards below to explain the value proposition. Tabbed interface to keep the UI clean and focused.

**Next Steps / Potential Features**

* **Backend Integration**: Upgrade to web-db-user to save generated playbooks to a database and allow users to log in and view their history.

* **AI Integration**: Replace the static template generation with actual LLM calls to generate more dynamic and varied playbooks based on the inputs.

* **Export Options**: Add PDF export functionality alongside the current Markdown export.

* **More Templates**: Add different types of playbooks (e.g., Social Media specific, Operations, Staff Training).

**Starting Prompt for New Chat**

*Copy and paste the following prompt into your new chat to resume development:*

I want to continue developing the "Escape Room Playbook Generator" web application. 

Here is the context:  
\- The project is located at \`/home/ubuntu/escape-room-playbook-generator\`.  
\- It's a React \+ Tailwind CSS static frontend application.  
\- The main functionality is in \`client/src/pages/Home.tsx\`, which contains a form for business details and generates a marketing playbook.  
\- The design uses a purple/pink gradient theme defined in \`client/src/index.css\` and uses Inter and Space Grotesk fonts.

Please restore the project from the latest checkpoint if necessary, and let's start working on adding \[INSERT YOUR NEW FEATURE OR CHANGE HERE, e.g., "AI-powered generation instead of the static template" or "a new tab for social media templates"\].