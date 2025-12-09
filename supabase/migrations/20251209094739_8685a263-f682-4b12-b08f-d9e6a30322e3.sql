-- デモ用キャンペーンを追加
INSERT INTO public.campaigns (
  slug,
  title,
  client_name,
  summary,
  platforms,
  deadline,
  posting_date,
  status,
  requires_consent,
  is_closed,
  deliverables,
  shooting_only,
  editing_only,
  shooting_and_editing,
  tieup_post_production,
  video_production_only,
  ad_appearance,
  secondary_usage,
  restrictions,
  nda_template
) VALUES (
  'demo-campaign',
  '【デモ】サンプル案件タイトル',
  'デモクライアント株式会社',
  'これはデモ用のサンプル案件です。配布URLの動作確認やフロー学習にご利用ください。

・案件概要の説明文がここに表示されます
・複数行の記載も可能です
・画像資料や添付ファイルも確認できます',
  ARRAY['Instagram', 'TikTok', 'YouTube'],
  '2025-12-31',
  '2026-01-15',
  'active',
  true,
  false,
  '{"Instagram": ["リール", "ストーリーズ"], "TikTok": ["動画投稿"], "YouTube": ["ショート動画"]}'::jsonb,
  false,
  false,
  true,
  true,
  false,
  true,
  '{"hasUsage": true, "duration": "1年間", "purpose": "広告・PR素材"}'::jsonb,
  '・競合他社との重複案件はNG
・政治的・宗教的な発言はお控えください
・投稿前に必ずクライアント確認を行ってください',
  'PlanC'
) ON CONFLICT (slug) DO NOTHING;