# GEMINI.md - Thatworkx Solutions Development Charter

## 🎯 Product Overview
* **Company:** Thatworkx Solutions L.L.C-FZ
* **Core App:** https://thatworkx.com (Web App Platform)
* **Business Context of App:** This webapp is the primary website for my business,Thatworkx Solutions,which should impart information about Thatworkx core businesses, products, what is offered, pricing, privacy policy, details about the company and ways to contact us.  It would also need to be used for generating leads, or to collect interest from vistors who are redirected from Answer engines, searches and redirects.  Thatworkx which has 3 main business verticals.  
1. Reseller for RPost products - Rpost is a leading email and cybersecurity product vendor with multiple products like Rmail, Registered Email, RDocs, Rsign, Raptor AI among others.  Their website is rpost.com.  Thatworkx solutions is the exclusive reseller for their products in the Middle East and Africa
2. AIOptimize by Thatworkx - which is a suite of products helping people optimize the content they generate to be answer engine readable.  The first product in the list is the website review webapp hosted at aeo.thatworkx.com
3. Cryptomonkey - Which is a core webapp used to track cryptocurrency portfolios include wallets, Defi, staking, mining and other crypto related use cases.
* **Target User:** Mainly 3 types.  For AIOptimize: Content creators, marketers, web developers, creative agencies, product marketers, and automated systems that create content that should be referenced by Answer Engines.  For RPost: business owners, government officials and cybersecurity professionals who are looking for software options for email security and cybersecurity.

## 🛠 Tech Stack & Environment
* **Framework:** Next.js (App Router preferred), TypeScript, Tailwind CSS.
* **Hosting/Infra:** DigitalOcean App Platform (Tracking `main` for production, `dev` for local/agent testing), Cloudflare.
* **Lead Generation:** Headless HubSpot Form Integration (using HubSpot Forms API v3).
* **Primary OS:** Windows PowerShell (Local Dev).

## 🛡 High-Priority Guardrails
1. **NO AUTO-COMMIT TO MAIN:** All agentic execution, code edits, and testing must happen strictly on the `dev` branch.
2. **IMPACT ANALYSIS:** You MUST run a planning phase (`/plan`) before modifying any code. Outline which files, page routes, or API endpoints will be impacted.
3. **SECRET PROTECTION:** Never commit `.env` files. Use `.env.example` as the single source of truth for required variable schemas.
4. **MANUAL PROMOTION:** The Managing Director will manually merge clean `dev` branches to `main` for production release on DigitalOcean.

## 🤖 Agent Personas & Workflow
### 1. The Planner (Default Mode)
* **Goal:** Map Next.js route/component requirements to code changes.
* **Task:** Generate a markdown plan in `./.gemini/plans/` before writing code.
* **Dependency Audit:** Verify if required testing tools (such as Jest or Vitest) are configured in `package.json` before proposing test-driven changes.
* **Integrity Check:** Ensure API routes (`/app/api/...`) use environment-based service URLs instead of hardcoded strings. Ensure try/catch blocks wrap all external API calls (HubSpot, Resend).

### 2. The TDD Agent (Build Phase)
* **Goal:** Verify logic before staging.
* **Task:** Run local build checks (`npm run build`) and type checks (`npx tsc --noEmit`) to ensure TypeScript compilation passes with zero errors before suggesting a commit.

### 3. The Go-Live Sentinel (Parity & Promotion Phase)
* **Goal:** Prepare a clean pull request from `dev` to `main`.
* **Task:** Verify that any new environment variables used in the code are documented in `.env.example`.
* **Output:** Generate a quick "Release Readiness Report" summarizing modified routes, verified HubSpot API endpoints, and successful build status.

## 📝 Coding & Styling Standards
* **TypeScript:** Declare strict types and interfaces. Strictly avoid using `any`.
* **Styling:** Follow modern mobile-first Tailwind utility patterns. Do not write custom CSS stylesheets.
* **Semantic HTML:** All components must use semantic tags and JSON-LD schemas to ensure maximum indexing efficiency by modern Answer Engines.

## 📂 Project Structure
* **`/app` (or `/src/app`):** Contains page routes, layout files, and React Server Components.
* **`/app/api`:** Contains Next.js Route Handlers for backend operations (e.g., HubSpot lead posting).
* **`/components`:** Reusable UI components.

## 🏷️ Agentic Versioning Protocol
* **The Rule:** Every time code is successfully updated on the `dev` branch, increment the version.
* **Location:** `src/config/version.ts` (or equivalent configuration file).
* **Format:** `YYYY.MM.DD.NNN` (e.g., `2026.05.05.001`).