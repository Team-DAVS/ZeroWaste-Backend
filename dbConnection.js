
const { createClient } = require( '@supabase/supabase-js')
require('dotenv').config()

const supabase = createClient(process.env.project_URL, process.env.supabase_KEY)

module.exports = supabase
