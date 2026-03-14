# Payment Processing Strategy — Stripe + GoCardless

Last updated: 14 March 2026

---

## Summary

Use **GoCardless** for recurring subscriptions (Direct Debit) and **Stripe** for one-off report/bundle purchases (card).

---

## Why Both

| Payment Type | Processor | Why |
|---|---|---|
| Subscriptions (£399-£3,995/mo) | GoCardless | £4 cap per transaction, lower churn, professional B2B |
| One-off reports (£245-£995) | Stripe | Instant payment, familiar checkout, already built |
| One-off bundles (£995-£6,995) | Stripe | Same — card payments expected for one-offs |

---

## Fee Comparison Per Subscription Payment

| Tier | Monthly | Stripe (2.2% + 20p) | GoCardless (£4 cap) | Annual Saving |
|------|---------|---------------------|---------------------|---------------|
| Scout | £399 | £8.98/mo | £4.00/mo | £59.78 (55%) |
| Professional | £995 | £22.09/mo | £4.00/mo | £217.09 (82%) |
| Developer | £1,995 | £44.11/mo | £4.00/mo | £481.29 (91%) |
| Enterprise | £3,995 | £88.11/mo | £9.99/mo | £937.47 (89%) |

GoCardless charges: 1% + 20p, capped at £4. Above £2,000: +0.3% on the excess.

## Portfolio Projection (50 subscribers)

Assume: 10 Scout, 20 Professional, 15 Developer, 5 Enterprise

| | Stripe Annual | GoCardless Annual |
|---|---|---|
| Subscription fees | £19,605.40 | £2,759.10 |
| **Saving with GoCardless** | | **£16,846.30/year** |

## One-Off Report Fees (Stripe)

| Transaction | Stripe Fee (1.5% + 20p) |
|---|---|
| £375 (FRA) | £5.83 |
| £595 (SFR) | £9.13 |
| £995 (SAI) | £15.13 |
| £2,995 (Dev Due Diligence bundle) | £45.13 |
| £6,995 (Complete Intelligence) | £105.13 |

---

## GoCardless Key Details

- **Plan:** Standard (free, pay-as-you-go)
- **Fee:** 1% + 20p, capped at £4 per transaction
- **Over £2,000:** additional 0.3% on amount above £2,000
- **First payment timing:** 5-6 working days (Direct Debit mandate setup)
- **Subsequent payments:** 3-4 working days
- **Failed payment rate:** ~2-3% (vs 5-10% for card recurring)
- **No card expiry churn** — DD mandates persist indefinitely
- **Chargeback fee:** None if under 15/month

## Stripe Key Details (already live)

- **Card fee:** 1.5% + 20p (UK cards)
- **Billing fee:** +0.7% for recurring (if used for subscriptions)
- **Total recurring:** 2.2% + 20p per payment
- **Payout timing:** 3-7 business days
- **Chargeback fee:** £20 per dispute
- **Refund:** Processing fee NOT returned

---

## Subscription Products to Create in GoCardless

| Product | Monthly Price | Annual Price (15% off) | Billing |
|---|---|---|---|
| Scout | £399 | £4,069/yr (£339/mo equiv) | Monthly or Annual upfront |
| Professional | £995 | £10,149/yr (£846/mo equiv) | Monthly or Annual upfront |
| Developer | £1,995 | £20,349/yr (£1,696/mo equiv) | Monthly or Annual upfront |
| Enterprise | £3,995 | £40,749/yr (£3,396/mo equiv) | Monthly or Annual upfront |

Each subscription includes N report credits per month (Scout: 2, Professional: 6, Developer: 12, Enterprise: 30).

---

## Implementation Phases

### Phase 1: Manual Onboarding (Launch Week)
- "Get Started" on website → /contact form
- Manually create GoCardless mandate for each new subscriber
- Track credits in spreadsheet or simple admin tool
- Works for first 20 founding members

### Phase 2: Self-Serve GoCardless Checkout
- Build /api/create-subscription endpoint
- GoCardless Billing Request Flow (hosted payment page)
- Customer enters bank details → mandate created → first payment collected
- Webhook receives payment confirmation → activate subscription in system

### Phase 3: Customer Portal
- Subscriber can view credits remaining, usage history
- Upgrade/downgrade tier
- Cancel subscription
- GoCardless handles the payment side; we handle the credit tracking

---

## GoCardless Setup Checklist

- [ ] Create GoCardless account (gocardless.com)
- [ ] Verify business identity (Companies House details)
- [ ] Set up sandbox environment for testing
- [ ] Create subscription plans (4 tiers × 2 billing cycles = 8 plans)
- [ ] Build API endpoint for creating subscriptions
- [ ] Set up webhooks for payment confirmations
- [ ] Build credit tracking system (credits issued per successful payment)
- [ ] Test full flow: signup → mandate → first payment → credits issued
- [ ] Go live with real payments

---

## Technical Integration Notes

### GoCardless API Flow

```
1. Customer clicks "Get Started" on pricing page
2. Frontend calls /api/create-gc-subscription with tier + customer details
3. Backend creates GoCardless Billing Request (hosted page)
4. Customer redirected to GoCardless → enters bank details → confirms DD mandate
5. GoCardless collects first payment (5-6 working days)
6. Webhook: payment_confirmed → issue credits to customer account
7. Monthly: GoCardless auto-collects → webhook → issue credits
```

### Environment Variables Needed
```
GOCARDLESS_ACCESS_TOKEN=<from GoCardless dashboard>
GOCARDLESS_ENVIRONMENT=sandbox|live
GOCARDLESS_WEBHOOK_SECRET=<for verifying webhook signatures>
```

### Key GoCardless API Endpoints
- `POST /billing_requests` — create a billing request (mandate + subscription)
- `POST /subscriptions` — create a recurring subscription on existing mandate
- `GET /subscriptions/:id` — check subscription status
- `POST /subscriptions/:id/actions/cancel` — cancel subscription
- Webhooks: `payment_confirmed`, `payment_failed`, `subscription_cancelled`
