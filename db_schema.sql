-- Create metrics table for tracking page visits and likes
CREATE TABLE IF NOT EXISTS metrics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id TEXT UNIQUE NOT NULL,
  visits INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE metrics ENABLE ROW LEVEL SECURITY;

-- Allow public to read metrics
CREATE POLICY "Allow public read access" ON metrics
  FOR SELECT TO public
  USING (true);

-- Allow public to insert/update metrics
CREATE POLICY "Allow public insert" ON metrics
  FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update" ON metrics
  FOR UPDATE TO public
  USING (true);
