-- 納品物条件用のカラムを追加
ALTER TABLE public.campaigns 
ADD COLUMN IF NOT EXISTS shooting_only boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS editing_only boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS shooting_and_editing boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS tieup_post_production boolean DEFAULT false;