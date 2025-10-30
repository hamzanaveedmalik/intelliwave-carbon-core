# Cal.com Integration Guide

## Overview

Your Intelliwave website now includes Cal.com integration for booking consultations. This provides both a floating button and regular booking buttons throughout the site.

## Components Added

### 1. BookingButton Component (`src/components/BookingButton.tsx`)

- **Purpose**: Regular booking buttons used throughout the site
- **Usage**: `<BookingButton />` or `<BookingButton variant="outline" size="lg" />`
- **Features**:
  - Opens Cal.com booking modal when clicked using data attributes
  - Configurable styling (variant, size, className)
  - Automatically initializes Cal.com API and UI theming
  - Uses `data-cal-*` attributes for cleaner integration

### 2. CalFloatingButton Component (`src/components/CalFloatingButton.tsx`)

- **Purpose**: Floating button that appears on all pages
- **Usage**: Automatically included on homepage and pricing page
- **Features**:
  - Month view layout
  - Always visible floating button
  - No additional configuration needed

## Cal.com Configuration

### Current Setup

- **Cal Link**: `intelliwave/30min`
- **Namespace**: `30min`
- **Layout**: Month view
- **Event Details**: Visible
- **Brand Color**: `#2563eb` (Intelliwave Blue)
- **Button Colors**: Customized to match brand
- **Integration Method**: Data attributes for buttons, API for floating button

### To Update Your Cal.com Settings:

1. **Change the Cal Link**:

   - Update `intelliwave/30min` to your actual Cal.com username/event
   - In both `BookingButton.tsx` and `CalFloatingButton.tsx`
   - Replace `intelliwave/30min` with `your-username/your-event-type`

2. **Customize the Namespace**:

   - Change `30min` to any identifier you prefer
   - Must be consistent across both components

3. **Modify Layout Options**:

   - `layout: 'month_view'` - Shows month calendar
   - `layout: 'week_view'` - Shows week calendar
   - `layout: 'column_view'` - Shows time slots in columns

4. **Customize Brand Colors**:
   - `buttonColor: '#2563eb'` - Floating button background color (Intelliwave Blue)
   - `buttonTextColor: '#ffffff'` - Floating button text color (White for contrast)
   - `'cal-brand': '#2563eb'` - Cal.com interface brand color

## Pages with Cal.com Integration

### Homepage (`src/pages/Index.tsx`)

- Floating button (always visible)
- Hero section booking button
- Contact section booking button

### Pricing Page (`src/pages/Pricing.tsx`)

- Floating button (always visible)
- Pricing card CTA buttons (via BookingButton)

## Testing Your Integration

1. **Start Development Server**:

   ```bash
   npm run dev
   ```

2. **Test Booking Flow**:

   - Click any "Book Free Consultation" button
   - Verify Cal.com modal opens
   - Check that your actual Cal.com event loads

3. **Verify Floating Button**:
   - Look for floating button on homepage and pricing page
   - Should appear after page loads

## Troubleshooting

### If Cal.com Modal Doesn't Open:

1. Check that your Cal.com link is correct
2. Verify your Cal.com event is published and public
3. Check browser console for errors
4. Ensure Cal.com account is properly configured

### If Floating Button Doesn't Appear:

1. Check that `CalFloatingButton` is imported and used
2. Verify Cal.com API is loading (check network tab)
3. Check for JavaScript errors in console

### Common Issues:

- **Wrong Cal Link**: Make sure `intelliwave/30min` matches your actual Cal.com setup
- **Event Not Published**: Ensure your Cal.com event is published and public
- **CORS Issues**: Cal.com handles this automatically, but check if you have any blocking

## Next Steps

1. **Replace Placeholder Cal Link**: Update `intelliwave/30min` with your actual Cal.com details
2. **Test on Live Site**: Deploy and test the integration
3. **Customize Styling**: Modify button styles if needed
4. **Add More Event Types**: Create additional booking buttons for different consultation types

## Cal.com Documentation

- [Cal.com Embed Documentation](https://cal.com/docs/embed)
- [Cal.com API Reference](https://cal.com/docs/api-reference)
