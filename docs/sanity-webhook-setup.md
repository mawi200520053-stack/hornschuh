# Sanity Webhook — On-Demand Revalidation

Richtet sofortige Cache-Invalidierung ein, wenn im Sanity Studio Inhalte gespeichert werden.

## 1. Secret generieren und hinterlegen

```bash
# Lokales Entwickeln
echo "SANITY_REVALIDATE_SECRET=$(openssl rand -hex 32)" >> .env.local
```

In Vercel: **Project → Settings → Environment Variables**
- Name: `SANITY_REVALIDATE_SECRET`
- Value: denselben Wert wie in `.env.local`

## 2. Webhook in Sanity anlegen

Auf [sanity.io/manage](https://www.sanity.io/manage) → Project → **API → Webhooks → Add webhook**:

| Feld | Wert |
|---|---|
| Name | Next.js Revalidate |
| URL | `https://hornschuh.eu/api/revalidate` |
| Dataset | `production` |
| Trigger on | Create, Update, Delete |
| Filter | `_type == "stelle" \|\| _type == "projekt"` |
| Projection | `{ _type, _id, "id": id }` |
| HTTP method | POST |
| API Version | `2025-04-29` |
| Secret | Wert von `SANITY_REVALIDATE_SECRET` |
| Enable signature verification | ✓ |

## 3. Verhalten

- **Sofort** nach Speichern im Studio werden `/karriere`, `/referenzen`, `/` und die betroffene `/referenzen/[id]`-Seite invalidiert.
- Die `revalidate = 3600`-Konstanten in den Pages bleiben als Fallback aktiv.
