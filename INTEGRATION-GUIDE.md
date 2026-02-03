# INTEGRATION GUIDE - Thatworkx Website

This guide covers setting up HubSpot forms, Google Analytics, and Microsoft Bookings for the Thatworkx website.

---

## 📊 GOOGLE ANALYTICS 4 SETUP

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click **Admin** (bottom left gear icon)
3. Click **Create Property**
4. Enter property details:
   - Property name: `Thatworkx Solutions`
   - Reporting time zone: `(GMT+04:00) Dubai`
   - Currency: `USD` or `AED`
5. Click **Next** and complete business information
6. Accept Terms of Service

### Step 2: Set Up Data Stream

1. After creating property, click **Web** under Data Streams
2. Enter website URL: `https://thatworkx.com`
3. Stream name: `Thatworkx Main Site`
4. Click **Create Stream**
5. **Copy your Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add Tracking Code to Website

1. Open `/app/layout.tsx`
2. Find the commented Google Analytics section (around line 198)
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Uncomment the entire script block:
```tsx
{/* Google Analytics 4 */}
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ACTUAL_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YOUR_ACTUAL_ID');
    `,
  }}
/>
```

5. Deploy the changes
6. Verify in GA4 by visiting your site and checking Real-Time reports

### Step 4: Set Up Key Events (Conversions)

In GA4, go to **Admin → Events → Create Event** for:

1. **form_submission** - Contact form submissions
2. **pdf_download** - Brochure downloads
3. **external_link_click** - AEO tool clicks
4. **whatsapp_click** - WhatsApp widget clicks
5. **partner_modal_open** - Partner interest
6. **tool_request_modal_open** - Custom tool interest

Mark these as **Conversions** in GA4.

---

## 📧 HUBSPOT INTEGRATION

### Step 1: Create HubSpot Account

1. Go to [HubSpot](https://www.hubspot.com)
2. Sign up for free account or log in
3. Complete onboarding

### Step 2: Create Contact Form

1. In HubSpot, go to **Marketing → Lead Capture → Forms**
2. Click **Create Form**
3. Choose **Embedded Form**
4. Add these fields:
   - First Name (required)
   - Last Name (required)
   - Email (required)
   - Phone
   - Company
   - Interest (dropdown with your options)
   - Message (multi-line text)

5. Click **Options** tab:
   - Set form name: `Thatworkx Contact Form`
   - Thank you message: `Thank you! We'll be in touch within 24 hours.`
   - Redirect: Leave blank (we handle it in code)

6. Click **Publish**
7. **Copy your Form ID and Portal ID** from the embed code

### Step 3: Integrate Form with Website

1. Open `/app/contact/page.tsx`
2. Find the `handleSubmit` function (around line 42)
3. Replace the TODO section with:
```tsx
const response = await fetch(
  `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: [
        { name: 'firstname', value: formData.firstName },
        { name: 'lastname', value: formData.lastName },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone },
        { name: 'company', value: formData.company },
        { name: 'interest', value: formData.interest },
        { name: 'message', value: formData.message },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    }),
  }
)

if (!response.ok) {
  throw new Error('Form submission failed')
}
```

4. Add Portal ID and Form ID as constants at the top of the file:
```tsx
const HUBSPOT_PORTAL_ID = 'YOUR_PORTAL_ID'
const HUBSPOT_FORM_ID = 'YOUR_FORM_ID'
```

### Step 4: Integrate Modals with HubSpot

Repeat similar process for:
- `/app/components/PartnerModal.tsx` (create separate form in HubSpot)
- `/app/components/ToolRequestModal.tsx` (create separate form in HubSpot)

### Step 5: Add HubSpot Tracking Code (Optional)

1. In HubSpot, go to **Settings → Tracking & Analytics → Tracking Code**
2. Copy your tracking code snippet
3. Open `/app/layout.tsx`
4. Find the commented HubSpot section (around line 214)
5. Replace `YOUR_HUBSPOT_ID` with your actual ID
6. Uncomment the script
```tsx
<script
  type="text/javascript"
  id="hs-script-loader"
  async
  defer
  src="//js.hs-scripts.com/YOUR_ACTUAL_HUBSPOT_ID.js"
/>
```

---

## 📅 MICROSOFT BOOKINGS INTEGRATION

### Step 1: Set Up Microsoft Bookings

1. Go to [Microsoft Bookings](https://outlook.office.com/bookings/)
2. Sign in with Microsoft 365 account
3. Create new booking page:
   - Business name: `Thatworkx Solutions`
   - Business type: `Consulting`
   - Time zone: `(GMT+04:00) Abu Dhabi, Muscat`

### Step 2: Create Service Types

Create these booking types:

**1. AEO Consultation (30 min)**
- Duration: 30 minutes
- Buffer time: 15 min before/after
- Price: Free
- Description: "Discuss how AEO can help your business get cited by AI search engines"

**2. RPost Demo (30 min)**
- Duration: 30 minutes
- Buffer time: 15 min before/after
- Price: Free
- Description: "Live demo of RPost email security and e-signature solutions"

**3. Custom Tool Discovery (45 min)**
- Duration: 45 minutes
- Buffer time: 15 min before/after
- Price: Free
- Description: "Discuss your requirements for custom tool development"

### Step 3: Configure Availability

1. Go to **Business hours**
2. Set availability:
   - Sunday-Thursday: 9:00 AM - 6:00 PM (GST)
   - Friday-Saturday: Closed
3. Add buffer times between appointments
4. Set booking lead time (e.g., 2 hours minimum)

### Step 4: Get Booking Link

1. Go to **Booking page**
2. Click **Publish**
3. Copy your booking page URL (format: `https://outlook.office.com/bookings/s/xxx`)
4. Optionally customize the subdomain

### Step 5: Add to Website

**Option 1: Replace Contact Form CTA**

In `/app/rpost/page.tsx`, update the "Book Demo" button:
```tsx
<a 
  href="https://outlook.office.com/bookings/s/YOUR_BOOKING_ID"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary text-center"
>
  Book 30-Min Demo
</a>
```

**Option 2: Add Booking Widget**

Microsoft Bookings provides an embeddable widget. Add it to contact page or create dedicated `/book` page.

---

## 🔍 SEARCH CONSOLE VERIFICATION

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://thatworkx.com`
3. Choose verification method: **HTML tag**
4. Copy the verification meta tag
5. Add to `/app/layout.tsx` in the `verification` object:
```tsx
verification: {
  google: 'YOUR_VERIFICATION_CODE',
}
```

6. Deploy and verify

### Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site: `https://thatworkx.com`
3. Copy verification code
4. Add to `/app/layout.tsx`:
```tsx
verification: {
  google: 'YOUR_GOOGLE_CODE',
  bing: 'YOUR_BING_CODE',
}
```

---

## 📱 WHATSAPP BUSINESS API (Optional Upgrade)

Currently using direct WhatsApp link. To upgrade to Business API:

1. Apply for [WhatsApp Business API](https://business.whatsapp.com)
2. Get approved
3. Set up automated greetings and quick replies
4. Update WhatsApp widget to use Business API endpoint

---

## 🎯 CONVERSION TRACKING EVENTS

### Events to Track

Add these tracking events throughout the site:
```tsx
// Example: Track PDF downloads
const trackPDFDownload = (pdfName: string) => {
  // Google Analytics
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'pdf_download', {
      pdf_name: pdfName,
      event_category: 'engagement',
    })
  }
  
  // HubSpot
  if (typeof window._hsq !== 'undefined') {
    window._hsq.push(['trackEvent', {
      id: 'PDF Download',
      value: pdfName
    }])
  }
}

// Usage in component:
<a 
  href="/pdfs/AEO-WhatItIs-v2-Jan2026.pdf"
  onClick={() => trackPDFDownload('AEO Guide')}
>
  Download Guide
</a>
```

### Key Events to Implement:

1. **PDF Downloads** - Brochure engagement
2. **External Links** - AEO tool clicks
3. **Modal Opens** - Partner/Tool request interest
4. **Form Submissions** - Lead generation
5. **WhatsApp Clicks** - Contact intent
6. **Video Views** - If you add product videos
7. **Pricing Page Views** - Purchase intent

---

## ✅ TESTING CHECKLIST

Before going live, verify:

- [ ] GA4 Real-Time shows your test visits
- [ ] HubSpot receives test form submissions
- [ ] Contact form emails arrive correctly
- [ ] Modal forms submit to HubSpot
- [ ] Microsoft Bookings confirmations work
- [ ] All PDFs download correctly
- [ ] WhatsApp links open correctly
- [ ] Search Console verifies ownership
- [ ] Structured data validates (use [Schema Validator](https://validator.schema.org))

---

## 📊 RECOMMENDED DASHBOARDS

### Google Analytics 4

Create custom reports for:
1. **AEO Funnel**: Homepage → AEO Section → Free Audit Click
2. **RPost Funnel**: Homepage → RPost Section → Product Page → Demo Request
3. **Lead Sources**: Organic, Direct, Referral, Social
4. **MENA Traffic**: Filter by UAE, Saudi, Egypt, etc.

### HubSpot

Set up workflows:
1. **New Contact**: Auto-assign to sales, send welcome email
2. **AEO Interest**: Tag as "AEO Lead", add to nurture sequence
3. **RPost Demo**: Send calendar invite, reminder emails
4. **Partner Application**: Notify admin, send application review email

---

## 🚨 COMMON ISSUES & SOLUTIONS

**Issue: GA4 not tracking**
- Check if script is loaded (View Source)
- Verify Measurement ID is correct
- Check browser console for errors
- Disable ad blockers for testing

**Issue: HubSpot form not submitting**
- Verify Portal ID and Form ID
- Check CORS settings in HubSpot
- Look for 400/500 errors in Network tab
- Ensure all required fields are included

**Issue: Bookings not showing available times**
- Check time zone settings match
- Verify business hours are set
- Ensure buffer times don't block slots
- Check booking page is published

---

**Need Help?**  
Contact Jess at info@thatworkx.com or +971 529 342 175