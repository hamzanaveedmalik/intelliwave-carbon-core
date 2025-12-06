# Website Analysis Pivot Prompt for Intelliwave Chat

Use this prompt when you want the sales-marketing agent to analyze your website with Intelliwave Chat product context.

---

## Quick Prompt Template

```
I need you to analyze my website for Intelliwave Chat (an AI-powered customer support SaaS for Shopify stores).

Please:

1. Load the Intelliwave Chat product context from: docs/sales/intelliwave-chat-product-context.md

2. Use the website analysis framework from: docs/sales/website-analysis-framework.md

3. Analyze my website at: [YOUR_WEBSITE_URL]

4. Focus on how well the website communicates Intelliwave Chat's value proposition:

   - Automatic knowledge base setup for Shopify stores

   - AI-powered customer support

   - Affordable pricing ($49-199/month)

   - Shopify-native integration

   - "Done-for-you" approach

5. Compare against the product messaging priorities in the context document

6. Provide recommendations specific to selling Intelliwave Chat

Key questions to answer:

- Does the website clearly communicate that this is for Shopify stores?

- Is the "automatic setup" benefit prominent?

- Is the pricing clear and accessible?

- Are the unique differentiators (Shopify-native, edge-native, multi-modal) highlighted?

- Does it address the target customer's pain points (small store owners, limited budget)?

- Is the CTA optimized for Shopify App Store installation?
```

---

## Detailed Prompt Template

```
Hi Alex! I need a comprehensive website analysis for Intelliwave Chat.

**Product Context:**

- Load: docs/sales/intelliwave-chat-product-context.md

- This is an AI-powered customer support SaaS specifically for Shopify stores

- Key value prop: Automatic knowledge base setup, no manual work

- Target: Small-to-medium Shopify stores (10-10,000 products)

- Pricing: $49-199/month (STARTER, GROWTH, SCALE plans)

**Website to Analyze:**

[YOUR_WEBSITE_URL]

**Analysis Framework:**

Use: docs/sales/website-analysis-framework.md

**Focus Areas:**

1. Value Proposition - Does it clearly communicate "automatic setup for Shopify stores"?

2. Target Audience - Is it clear this is for Shopify store owners?

3. Unique Differentiators - Are Shopify-native, automatic setup, affordable pricing highlighted?

4. CTA Optimization - Are CTAs optimized for Shopify App Store installation?

5. Social Proof - Customer logos, testimonials from Shopify stores?

6. Pricing Clarity - Are the three tiers ($49, $99, $199) clearly presented?

7. Trust Signals - Shopify App Store badge, security, guarantees?

8. Demo Access - Easy way to try the widget without installing?

**Specific Questions:**

- Does the hero section immediately communicate "AI support for Shopify stores"?

- Is the "automatic setup" benefit prominent (not buried)?

- Are customer pain points addressed (limited budget, no technical skills, repetitive questions)?

- Is the pricing page clear about what you get at each tier?

- Are there clear paths to: (1) Install from Shopify, (2) Start free trial, (3) See demo?

- Does it address objections (accuracy, setup complexity, cost)?

**Output Format:**

Please provide:

1. Executive summary with top 3 Intelliwave Chat-specific recommendations

2. Section-by-section analysis comparing current state to Intelliwave Chat messaging priorities

3. Prioritized recommendations (High/Medium/Low) with Intelliwave Chat context

4. Specific copy examples showing current vs. proposed (Intelliwave Chat-focused)

5. Implementation roadmap

6. Testing plan for Intelliwave Chat conversion optimization

**Reference Documents:**

- Product context: docs/sales/intelliwave-chat-product-context.md

- Analysis framework: docs/sales/website-analysis-framework.md

- Analysis instructions: docs/sales/website-analysis-instructions.md
```

---

## Short Prompt (Quick Analysis)

```
Analyze [WEBSITE_URL] for Intelliwave Chat using the product context document. 

Focus on: value prop clarity, Shopify-specific messaging, pricing presentation, 

and CTA optimization for App Store installation.
```

---

## Agent Command Format

When using the sales-marketing agent, you can say:

```
*website-analysis

I want you to analyze my website for Intelliwave Chat. 

Please:

1. Load docs/sales/intelliwave-chat-product-context.md first

2. Then analyze [WEBSITE_URL] using the framework

3. Focus on Intelliwave Chat-specific messaging and positioning

4. Provide recommendations for improving conversion to Shopify App Store installations
```

---

## What the Agent Will Do

When you use this prompt, the agent will:

1. **Load Product Context** - Understand Intelliwave Chat's features, benefits, and positioning

2. **Analyze Website** - Review your website section by section

3. **Compare Against Product Messaging** - Check if messaging aligns with Intelliwave Chat's value props

4. **Identify Gaps** - Find where Intelliwave Chat-specific benefits aren't communicated

5. **Provide Recommendations** - Suggest specific changes to better sell Intelliwave Chat

6. **Prioritize** - Focus on changes that will improve Shopify App Store conversions

---

## Key Things the Agent Will Check

### Value Proposition

- ✅ Does it say "AI support for Shopify stores"?
- ✅ Is "automatic setup" prominent?
- ✅ Is it benefit-focused (not feature-focused)?

### Target Audience

- ✅ Is it clear this is for Shopify store owners?
- ✅ Are small store pain points addressed?
- ✅ Is pricing accessible ($49-199/month)?

### Unique Differentiators

- ✅ Shopify-native (not generic)
- ✅ Automatic setup (not manual)
- ✅ Edge-native (fast)
- ✅ Affordable (not enterprise pricing)

### Conversion Paths

- ✅ Install from Shopify App Store
- ✅ Start free trial
- ✅ See demo (demo mode)
- ✅ View pricing

### Trust Signals

- ✅ Shopify App Store badge
- ✅ Customer logos (Shopify stores)
- ✅ Testimonials with metrics
- ✅ Free trial, money-back guarantee

---

## Example Output Structure

The agent will provide:

```markdown
# Website Analysis: Intelliwave Chat

**Date:** [Date]

**Analyst:** Alex (Sales & Marketing Specialist)

**URL:** [Your Website]

## Executive Summary

[Summary focusing on Intelliwave Chat-specific findings]

## Intelliwave Chat Messaging Analysis

### Value Proposition

**Current:** [What it says now]

**Should Be:** [Intelliwave Chat-focused messaging]

**Gap:** [What's missing]

**Recommendation:** [Specific fix with Intelliwave Chat copy]

### Target Audience Clarity

**Current:** [How it addresses audience]

**Should Be:** [Shopify store owner-focused]

**Recommendation:** [Specific changes]

[Continue for each section...]

## Priority Recommendations for Intelliwave Chat

### High Priority

1. **Rewrite Hero for Shopify Store Owners**

   - Current: "[Current headline]"

   - Proposed: "AI Customer Support That Sets Up Automatically for Your Shopify Store"

   - Why: Makes target audience and automatic setup benefit clear

   - Impact: Expected 25-30% increase in qualified traffic

[More recommendations...]

## Shopify App Store Conversion Optimization

### Current Conversion Path

[Analysis of current path to installation]

### Recommended Improvements

1. [Specific change]

2. [Specific change]

## Implementation Roadmap

[Timeline with Intelliwave Chat-specific priorities]
```

---

## Tips for Best Results

1. **Provide Website URL** - Give the exact URL to analyze

2. **Share Current Metrics** - If you have conversion data, share it

3. **Mention Competitors** - If you know who you're competing against

4. **Specify Goals** - What's the primary goal? (App installs, trials, demos?)

5. **Share Constraints** - Any limitations? (Can't change certain sections, etc.)

---

## Follow-Up Prompts

After getting the analysis, you can ask:

- "Focus on the hero section - give me 5 headline variations for Intelliwave Chat"

- "Create CTA copy optimized for Shopify App Store installation"

- "Write a value proposition statement for Intelliwave Chat"

- "Design a pricing page layout for the three tiers"

- "Create social proof section with customer logos and testimonials"

---

**Use these prompts to get Intelliwave Chat-specific website analysis and recommendations.**

