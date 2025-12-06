# Intelliwave Chat Information Architecture Requirements

**Project:** Adding Intelliwave Chat as a product alongside existing web development services

**Date:** January 27, 2025

---

## Project Context

### Current State
- **Services:** Web development services (custom projects, fixed pricing)
  - Website Development (£1,799+)
  - Custom Web Applications (£4,799+)
  - E-commerce Solutions (£3,599+)
- **Positioning:** Web development agency for UK businesses
- **Revenue Model:** Project-based, fixed pricing
- **Target:** UK businesses needing custom solutions

### New Addition
- **Product:** Intelliwave Chat (SaaS)
  - AI-powered customer support for Shopify stores
  - Automatic knowledge base setup
  - Subscription pricing ($49-199/month)
- **Positioning:** Shopify-native AI support tool
- **Revenue Model:** Recurring subscription
- **Target:** Shopify store owners (10-10,000 products)

---

## Design Goals

### Primary Goals
1. **Clear Separation** - Services and Products must be visually and navigationally distinct
2. **Unified Brand** - Both offerings feel like part of the same company
3. **Balanced Prominence** - Both visible, products slightly more prominent initially
4. **Easy Discovery** - Users can quickly find what they need (services OR products)
5. **No Confusion** - Users shouldn't be confused about which offering is for them

### User Experience Goals
- **Service Seekers:** Find custom development services quickly, understand pricing, contact for quote
- **Product Seekers:** Discover Intelliwave Chat, understand automatic setup benefit, join waitlist
- **Both:** Clear paths to conversion, no friction, professional experience

---

## Information Architecture Requirements

### 1. Navigation Structure

**Requirements:**
- Clear separation between Services and Products
- Both easily accessible from any page
- Dropdown menus for sub-items
- Mobile-friendly navigation pattern

**Current Navigation:**
- Services dropdown (exists)
- Products dropdown (exists but minimal)
- Portfolio, Pricing, About, Contact

**Needed:**
- Enhanced Products dropdown with Intelliwave Chat featured
- Clear visual distinction between Services and Products sections
- Consistent navigation across all pages

### 2. Homepage Layout

**Requirements:**
- Balance both offerings without overwhelming
- Clear value proposition for each
- Prominent CTAs for both
- Mobile-first responsive design

**Current Homepage Sections:**
1. Hero
2. Why Intelliwave
3. Services
4. Beyond Custom Development (mentions products)
5. Portfolio
6. FAQ
7. Testimonials
8. Social Proof
9. About
10. Contact

**Needed:**
- Updated hero (balanced or product-focused)
- "Two Ways We Help" section (Services vs Products)
- Products section (Intelliwave Chat - prominent)
- Services section (streamlined, less prominent)
- Clear visual hierarchy

### 3. User Flows

#### Service Seeker Flow
1. Lands on homepage
2. Sees services section OR clicks Services in nav
3. Views service details
4. Clicks "Get Quote" or "Contact"
5. Fills contact form
6. Receives quote/proposal

#### Product Seeker Flow
1. Lands on homepage
2. Sees Intelliwave Chat section OR clicks Products in nav
3. Clicks "Learn More" or "Join Waitlist"
4. Views product page (/products/intelliwave-chat)
5. Understands automatic setup benefit
6. Joins waitlist (email capture)
7. Receives confirmation and nurture emails

#### Hybrid User Flow
1. Lands on homepage
2. Sees both offerings
3. Understands difference (custom vs ready-made)
4. Chooses appropriate path
5. Converts on chosen path

### 4. Mobile-First Considerations

**Requirements:**
- Touch-friendly navigation (hamburger menu or bottom nav)
- Large touch targets (44x44px minimum)
- Simplified layouts for small screens
- Fast loading on mobile
- Clear CTAs on mobile

**Mobile Navigation Options:**
- Hamburger menu with Services/Products clearly separated
- Bottom navigation (if app-like experience)
- Sticky header with simplified menu

### 5. Accessibility Requirements

**Requirements:**
- WCAG 2.1 Level AA compliance
- Keyboard navigation for all interactive elements
- Screen reader support
- Clear focus indicators
- Proper ARIA labels
- Color contrast ratios met
- Descriptive alt text for images

---

## Key Design Decisions Needed

### Navigation
- [ ] Services dropdown structure and items
- [ ] Products dropdown structure and items
- [ ] Mobile navigation pattern
- [ ] Active state indicators
- [ ] Breadcrumb usage

### Homepage Layout
- [ ] Hero section approach (balanced vs product-focused)
- [ ] Section order and prominence
- [ ] "Two Ways We Help" section design
- [ ] Services section prominence vs Products section
- [ ] CTA placement and hierarchy

### Visual Separation
- [ ] How to visually distinguish Services from Products
- [ ] Color coding or visual treatment
- [ ] Typography differences
- [ ] Icon usage

### User Flows
- [ ] Entry points for each user type
- [ ] Conversion paths
- [ ] Form placement and design
- [ ] Success states and feedback

### Responsive Design
- [ ] Breakpoint strategy
- [ ] Mobile navigation pattern
- [ ] Layout adaptations per breakpoint
- [ ] Touch target sizes

### Accessibility
- [ ] WCAG compliance level
- [ ] Keyboard navigation patterns
- [ ] Screen reader support strategy
- [ ] Focus management

---

## Reference Documents

- Strategy: `docs/sales/services-vs-products-strategy.md`
- Product Context: `docs/sales/intelliwave-chat-product-context.md`
- Waiting List Strategy: `docs/sales/intelliwave-chat-waiting-list-strategy.md`

---

## Success Criteria

### Usability
- Users can find Services or Products within 2 clicks
- Clear understanding of difference between offerings
- No confusion about which offering is for them
- High conversion rates for both paths

### Technical
- Fast page load times (< 3 seconds)
- Mobile-responsive design
- Accessible to all users
- SEO-friendly structure

### Business
- Maintains service revenue
- Builds product waitlist
- Clear brand positioning
- Scalable for future products

---

**This document serves as input for the UX Design workflow to create comprehensive information architecture and design specifications.**

