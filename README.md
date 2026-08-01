# Arnold Antonio Portfolio

A premium portfolio and personal brand website for Arnold Antonio, an AI Automation Specialist and GoHighLevel expert helping businesses streamline operations, improve lead conversion, and deploy AI-powered systems that save time at scale.

This project is a luxury-tech portfolio experience with a dark, high-end visual direction, automation-focused messaging, and strong conversion CTAs. It showcases services, certifications, and a booking flow designed to turn visitors into qualified leads.

## Overview

Arnold Antonio helps businesses automate repetitive work, improve CRM performance, and connect their tools into reliable, intelligent workflows. The portfolio highlights:

- AI agents and workflow automation
- GoHighLevel setup and CRM optimization
- API and webhook integrations
- Lead capture and qualification systems
- Knowledge automation and AI-assisted operations
- Sales funnel and landing page builds

## Features

- Premium black-and-gold luxury aesthetic
- Responsive portfolio layout for desktop and mobile
- Strong hero section and conversion-focused CTAs
- Services and capabilities overview
- Case study highlights and certification showcase
- Embedded booking workflow
- Light/dark theme support
- Vercel-ready deployment configuration

## Tech Stack

- React + TypeScript
- TanStack Start
- Vite
- Tailwind CSS
- Radix UI components
- Nitro / Vercel deployment
- SQLite database setup support

## Local Development

```bash
npm install
npm run db:setup
npm run dev
```

## Production Build

```bash
npm run build
```

## Deployment

This project is configured for Vercel deployment and includes a GitHub Actions workflow for validation and deployment when the required environment secrets are configured.

### Vercel setup

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Use the default framework settings from this project.
4. Add the required environment variables if the app uses them.
5. Deploy the project from the main branch.

### GitHub Actions

The workflow in `.github/workflows/deploy.yml` validates the project on pushes to `main` and deploys to Vercel when `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` are set as repository secrets.

## Repository Notes

This portfolio is built to be lead-generation focused, portfolio-first, and easy to customize with additional case studies, certifications, and business details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact / Booking

The site is designed to route leads toward direct discovery-call booking and project inquiries.

## Build with Lovable

This project was originally created with [Lovable](https://lovable.dev).

## Development

```bash
git clone <repository-url>
cd <repository-name>
npm install
npm run dev
```

