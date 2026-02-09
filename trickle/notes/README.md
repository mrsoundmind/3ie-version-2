# 3ie Resources Page - "Guided Experience" Redesign

This project is a redesign of the 3ie resources page, focusing on "Institutional Authority" and "Guided Browsing".

## Design Philosophy: "Modern Evolution" & "Guided Access"
- **Strict Branding:** Uses 3ie Blue (`#005DD7`), Merriweather (Serif) for headings, and Inter (Sans) for UI.
- **Institutional Tone:** Squared corners (4px radius), clean lines, data-heavy displays.
- **User-Centric:** Introduced "Role-Based" entry points to pre-filter content, BUT with "Universal Access" safeguards.

## Key Components
- **Hero.js**: 
    - Moved to a **3-column grid layout** (Researcher, Policymaker, Student) to demonstrate scalability.
    - Added a **"Browse All"** escape hatch to prevent user lock-in.
- **ResourceGrid.js**: 
    - **Universal Content Logic**: Core resources (like the Main Portal) now have a `universal: true` flag and appear in ALL filtered views.
    - **Clear Filter**: Added a "Clear Filter" action that scrolls users back to the selection area (or users can just browse "All" via tabs).
    - **Visual DNA**: Badges and top-borders are color-coded by type.
- **App.js**: Manages `userRole` state.

## Color Palette
- Primary: `#005DD7` (3ie Blue)
- Background: `#F9FAFB` (Secondary/Light Grey)
- Type Colors (Visual DNA):
    - Datasets: Indigo
    - Manuals: Emerald
    - Policy Briefs: Amber
    - Default: Blue

## Maintenance
- When adding new roles, update `Hero.js` roles array and `ResourceGrid.js` `getTabs` function.
- Ensure critical resources have `universal: true` in `data/resources.js`.