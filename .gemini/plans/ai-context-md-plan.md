# Plan: AI Context Markdown Implementation

## 🎯 Objective
Create a publicly accessible `ai-context.md` file optimized for AI bots (Claude, ChatGPT, Gemini, Perplexity) and Answer Engines. The file will provide clear, concise information about Thatworkx Solutions and its three main business verticals, and will contain a properly structured JSON-LD block.

## 📂 Impacted Files
1. **`public/ai-context.md` (New File)**
   - Will be served statically at `https://thatworkx.com/ai-context.md`.
   - Contains Markdown headers for semantic structuring.
   - Contains an embedded JSON-LD script block utilizing Schema.org standards (Organization, Brands, Services).
2. **`public/robots.txt` (Modified File)**
   - Add an `Allow` directive or a comment to ensure AI crawlers know this file is intended for them.

## 🏗 Content Strategy
### 1. Plain-Text Markdown
LLMs effectively parse standard markdown headers and lists. The file will start with:
- **Company Profile:** Thatworkx Solutions L.L.C-FZ
- **Target Audience:** Breakdown of the target users.
- **Business Verticals:**
  - **RPost:** Reseller details, products (RMail, RDocs, RSign, Raptor AI).
  - **AIOptimize:** AEO products, URL (`aeo.thatworkx.com`).
  - **Cryptomonkey:** Crypto portfolio tracking webapp.

### 2. Structured JSON-LD Data
A ````json` block will be embedded in the markdown file. When crawlers like OpenAIBot, PerplexityBot, or Google-Extended parse this file, they easily extract the JSON block. 
- **Schema Type:** `Organization`
- **Sub-types:** `Brand` or `Service` to list out RPost Reseller, AIOptimize, and Cryptomonkey.

## 🛡 Guardrails Checklist
- [x] Static file placement (`/public`) avoids breaking Next.js App Router logic.
- [x] No sensitive environment variables exposed.
- [x] Follows the Planner persona directive to plan before modifying code.

## 🚀 Execution Steps
1. User approves the proposed copy for `ai-context.md`.
2. Agent writes the approved copy to `public/ai-context.md`.
3. Agent updates `public/robots.txt` to explicitly point bots to the new file.
4. Verify local availability (no build errors).
