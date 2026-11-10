# Supabase setup

The public Projects page reads published entries from the Supabase `projects` table. `/admin/login` signs in with Supabase Auth, and `/admin` is restricted to the account configured as the portfolio owner. The admin page supports adding, editing, publishing/unpublishing, and deleting project entries. Row Level Security allows anyone to read published projects, while writes require the configured owner account and a matching `owner_id`.

## Configure Supabase

1. Create a Supabase project and add your owner account under **Authentication > Users**. Keep public sign-up disabled if only the portfolio owner should sign in.
2. The Vercel Supabase integration syncs environment variables to the connected Vercel project. Confirm `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` exist under **Project > Settings > Environment Variables**. For local development, put their values in `.env.local` (ignored by Git). Never use or expose a secret/service-role key in this app.
3. In the Supabase SQL Editor, run [`../supabase/migrations/202610220001_projects_rls.sql`](../supabase/migrations/202610220001_projects_rls.sql). Copy your Auth user's UUID from **Authentication > Users**, replace `YOUR_AUTH_USER_UUID` in the final commented statement, uncomment it, and run that statement to designate the portfolio owner.
4. Run [`../supabase/migrations/202610220002_projects_video_url.sql`](../supabase/migrations/202610220002_projects_video_url.sql) to add optional project video links.
5. Run [`../supabase/migrations/202611100001_project_presentation.sql`](../supabase/migrations/202611100001_project_presentation.sql) to add contribution, outcome, technology stack, featured status, and manual display order fields.
6. After confirming the synced variables are available to the deployment, sign in at `/admin/login`, add and publish each project, then use `/projects` to confirm the database entries appear. Featured projects sort first; ties use the display order, then newest first.

The first migration creates `projects` with title, summary, preview image, live and source links, publication status, owner, and timestamps. Later migrations add optional video and project presentation fields. The migrations also create a private singleton owner setting; `is_portfolio_owner()` returns only a boolean so RLS can check ownership without exposing the setting table. If Supabase is unavailable or has no published projects, the public page still shows the Medi-Clinic case study as its featured fallback.


## Contact form

Run [`../supabase/migrations/202611090001_contact_messages.sql`](../supabase/migrations/202611090001_contact_messages.sql) to create the inbox table and allow submissions. The table has an insert-only RLS policy and no visitor read policy. The form uses the public Supabase key, a hidden honeypot field, and a minimum completion-time check as basic spam controls. Review submissions from the Supabase dashboard.
