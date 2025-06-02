import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sncqxgnabsfpciexwpqy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuY3F4Z25hYnNmcGNpZXh3cHF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMjg1NzUsImV4cCI6MjA2MzgwNDU3NX0.lGJNzoLyF_Glcotjt4Pd0GspQsSsAkW-L2iXzOEEwf8'

export const supabase = createClient(supabaseUrl, supabaseKey)
